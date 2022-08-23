import React from "react"

   
const orderArtists = (artists) => {
    if (artists !== null) {
        let artistIds = Object.keys(artists);
        let firstArtists = [];
        let orderedArtists = artistIds.map((id) => {
            return [id, artists[id].name, artists[id].frequency];
        }).sort((a,b) => {
            return b[2]-a[2];
        });
        for (let i = 0; i < orderedArtists.length; i++) {
            firstArtists.push(orderedArtists[i]);
            if (i + 1 == orderedArtists.length || orderedArtists[i+1][2] != orderedArtists[i][2])
                break;
        }
        return firstArtists;
    }
    return [];
}

const Artists = (props) => {
    let artistCharts = orderArtists(props.stats, props.num);
    let names = "";
    let pluralArtists = artistCharts.length > 1 ? "Your most faved artists are" : "Your most faved artist is";
    let pluralTracks = artistCharts[0][2] == 1 ? "" : "s";
    for (let i = 0; i < artistCharts.length; i++) {
        if (i > 0)
            names += ", "
        names += artistCharts[i][1];
    }
    return (
        <div className="text-info">
            <div className="text-info-section-artist">
                <div> {pluralArtists} </div>
                <div className="stats-cards-title">
                    <div className="text-info-big"> {names} </div>
                </div>
                <div className="text-info-data"> {artistCharts[0][2]} track{pluralTracks} </div>
            </div>
        </div>
    )
}

export default Artists