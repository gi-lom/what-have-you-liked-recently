import spotifyGetAccessToken from "./token";
import urlCompare from "./url";


const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};


const spotifyGetLibraryTracks = async (access_token) => {
  const trackRetrieve = new Promise ((resolve, reject) => {
    fetch("https://api.spotify.com/v1/me/tracks?limit=50&offset=0", {
      headers: {
        Authorization: "Bearer " + access_token
      }
    }).then((resp) => {
      if (resp.status === 204 || resp.status >= 300)
        resolve({error: resp.status});
      else
        resolve(resp.json());
    });
  });

  return await trackRetrieve;
};


const spotifyGetLibraryTracksFeatures = async (access_token, currentId) => {
  let trackFeaturesRetrieve = new Promise ((resolve, reject) => {
    fetch("https://api.spotify.com/v1/audio-features/" + currentId, {
    headers: {
      Authorization: "Bearer " + access_token
    }
    }).then((resp) => {
      if (resp.status === 204 || resp.status >= 300)
        reject({error: resp.status});
      else
        resolve(resp.json());
    });
  });

  return await trackFeaturesRetrieve;
};


const spotifyGetLibraryList = access_token => {
  let tracks = [];

  return new Promise((resolve, reject) => {
    let readSequential = function(offset) {
    let realOffset = offset + 1;
    if (offset >= 1)
      resolve(tracks);
    else {
      spotifyGetLibraryTracks(access_token)
      .then(function (tr) {
        if (!(Object.keys(tr).includes("error"))) {
          for (let i = 0; i < tr.items.length; i++) {
            spotifyGetLibraryTracksFeatures(access_token, tr.items[i].track.id)
            .then(function (tr_f) {
              if (!("error" in tr_f)) {
                tracks.push({
                  "release_date": parseInt(tr.items[i].track.album.release_date.substring(0, 4)),
                  "artists": tr.items[i].track.artists,
                  "id": tr.items[i].track.id,
                  "name": tr.items[i].track.name,
                  "popularity": tr.items[i].track.popularity,
                  "explicit": tr.items[i].track.explicit,
                  "danceability": tr_f.danceability,
                  "energy": tr_f.energy,
                  "key": tr_f.key,
                  "loudness": tr_f.loudness,
                  "mode": tr_f.mode,
                  "valence": tr_f.valence,
                  "duration_ms": tr_f.duration_ms
                });
              }
              else
                resolve(tr);
            });
          }
        }
        else
          resolve(tr);
      }).then(async function() {
        let sl = 1000;
        await sleep(sl);
        readSequential(realOffset);
      });
    }
  };
  readSequential(0);
});
};


const spotifyGetLibrary = access_token => {
  return new Promise((resolve, reject) => {
		spotifyGetLibraryList(access_token)
  	.then(function (tr) {
      if (Object.keys(tr).includes("error"))
        resolve({error: tr.error});
      else {
        let num_of_tracks = tr.length;
    	  let fields = ["popularity", "danceability", "energy", "valence", "duration_ms"];
    	  let fields_maxmin = ["max", "min"];
    	  let stats = {
      	  artists: {},
      	  release_dates: [],
      	  explicit: 0,
      	  keys: new Array(13).fill(0),
      	  mode: [0, 0],
      	  popularity:   { list: [], max: [], min: [] },
      	  danceability: { list: [], max: [], min: [] },
      	  energy:       { list: [], max: [], min: [] },
      	  valence:      { list: [], max: [], min: [] },
      	  duration_ms:  { list: [], max: [], min: [] }
    	  }
    	  for (let i = 0; i < tr.length; i++) {
      	  let el = tr[i];
      	  //artist
      	  for (let j = 0; j < el.artists.length; j++) {
        	  let artist = el.artists[j];
        	  if (!(artist.id in stats.artists))
          	  stats.artists[artist.id] = {
              	name: artist.name,
              	frequency: 1
          	  };
        	  else
          	  stats.artists[artist.id].frequency++;
      	  }
      	  //release_date
          if (parseInt(stats.release_dates) != NaN)
            stats.release_dates.push(parseInt(el.release_date));
      	  //explicit
      	  if (el.explicit)
        	  stats.explicit++;
      	  //keys
          stats.keys[el.key]++;
      	  //mode
      	  stats.mode[el.mode]++;
      	  //avg/max/min:
      	  for (let j = 0; j < fields.length; j++) {
          	let st = fields[j];
            let val = st == "popularity" || st == "duration_ms" ? el[st] : el[st]*100;
            let valueInList = st == "duration_ms" ? val : Math.round(val);
        	  stats[st].list.push(valueInList);
        	  for (let k = 0; k < fields_maxmin.length; k++) {
            	let minmax = fields_maxmin[k];
          	  let newm = new Object();
          	  newm['id'] = el['id'];
          	  newm['artist'] = el['artists'];
          	  newm['name'] = el['name'];
          	  newm['value'] = val;
          	  if (stats[st][minmax].length === 0)
              	stats[st][minmax].push(newm); 
          	  else {
            	  let valueToCheck = minmax === "min" ? newm.value < stats[st][minmax][0].value : newm.value > stats[st][minmax][0].value;
            	  if (valueToCheck)
                	stats[st][minmax] = [newm];
            	  else
              	  if (newm.value === stats[st][minmax][0])
                	  stats[st][minmax].push(newm);
          	  }
        	  }
      	  }
    	  }
        stats.release_dates = stats.release_dates.sort();
        resolve(stats);
      }
  	});
	});
};

export default function setLocalStorage(statsAreEmpty) {
	return new Promise((resolve, reject) => {
    if (urlCompare() && localStorage.getItem("access_token") === null) {
        let tokenArray = window.location.href.split('#')[1].split('&');
        let currentTime = Math.floor(new Date().getTime() / 1000);
        for (let i = 0; i < tokenArray.length; i++) {
            let tokenDictValue = tokenArray[i].split('=');
            let key = tokenDictValue[0];
            let value = key === "expires_in" ? parseInt(tokenDictValue[1]) + currentTime : tokenDictValue[1];
            localStorage.setItem(key, value);
        }
        if (statsAreEmpty)
          spotifyGetLibrary(localStorage.getItem("access_token"))
					.then( (finalResult) => {
						resolve(finalResult);
					});
				else
					resolve(null);
    }
    else
      if (localStorage.getItem("access_token") !== null && localStorage.getItem("expires_in") !== null) {
        if (Math.floor(new Date().getTime() / 1000) > localStorage.getItem("expires_in")) {
          localStorage.removeItem("access_token");
          localStorage.removeItem("expires_in");
          localStorage.removeItem("token_type");
          spotifyGetAccessToken();
        }
        else
          if (statsAreEmpty)
						spotifyGetLibrary(localStorage.getItem("access_token"))
						.then( (finalResult) => {
							resolve(finalResult);
						});
					else
						resolve(null);
      }
			else
				resolve(null);
	});
};