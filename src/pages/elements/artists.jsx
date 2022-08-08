import React from "react"
import "./styles.css"

   
const orderArtists = (artists) => {
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

const getArtistChart = (artistCharts) => {
    let names = "";
    let pluralArtists = artistCharts.length > 1 ? "Your most faved artists are" : "Your most faved artist is";
    let pluralTracks = artistCharts[0][2] == 1 ? "" : "s";
    for (let i = 0; i < artistCharts.length; i++) {
        if (i > 0)
            names += ", "
        names += artistCharts[i][1];
    }
    return (
        <div className="chart">
            <div className="description"> {pluralArtists} </div>
            <div className="big"> {names} </div>
            <div className="description"> with {artistCharts[0][2]} track{pluralTracks} </div>
            <div className="description"> {(artistCharts[0][2]*artistCharts.length/50)*100}% of your latest 50 faved tracks</div>
        </div>
    )
}

const Artists = (props) => {
    let artistChart = getArtistChart(orderArtists(props.stats));
    return (
        <div id="statsCard">
            {artistChart}
        </div>
    )
}

export default Artists