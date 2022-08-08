import getRedirectURI from "./redirect";


const generateRandomString = length => {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};


export default function spotifyGetAccessToken () {
    // authorize user and get access token
    const SPOTIFY_CLIENT_ID = "6de8e9bb834648af8dfd1d3ec29a09be";
    let scope = "user-library-read";
    let url = "https://accounts.spotify.com/authorize";
    let state = generateRandomString(16);
    localStorage.setItem("spotify_auth_state", state);
  
    url += "?client_id=" + encodeURIComponent(SPOTIFY_CLIENT_ID);
    url += "&scope=" + encodeURIComponent(scope);
    url += "&redirect_uri=" + encodeURIComponent(getRedirectURI(window.location));
    url += "&response_type=token";
    url += "&state=" + encodeURIComponent(state);
    window.location = url;
}