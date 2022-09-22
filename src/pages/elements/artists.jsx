import React from "react"
   
const orderArtists = (artists) => {
    try {
        let artistIds = Object.keys(artists);
        let firstArtists = [];
        let orderedArtists = artistIds.map((id) => {
            return [artists[id].url, artists[id].name, artists[id].frequency];
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
    catch (err) {
        return [];
    }
}

const Artists = (props) => {
    try {
        const charts = props;
        let artistCharts = orderArtists(props.stats, props.num);
        let names = [];
        let pluralArtists = artistCharts.length > 1 ? "Your most faved artists are" : "Your most faved artist is";
        let pluralTracks = artistCharts[0][2] == 1 ? "" : "s";
        for (let i = 0; i < artistCharts.length; i++) {
            let comma = artistCharts.length > 1 && i < artistCharts.length - 1 ? ", " : "";
            names.push(
                <span>
                    <span className="spotify-link" onClick={() => window.open(artistCharts[i][0], "_blank").focus()}>
                        {artistCharts[i][1]}
                    </span>
                    {comma}
                </span>
            );
        }
        return (
            <div className="chart">
                <div className="stats-cards-title">
                    <div className="big"> {charts.title} </div>
                    <div className="description"> {charts.description} </div>
                </div>

                <div className="text-info">
                    <div className="text-info-section">
                        <div> {pluralArtists} </div>
                        <div className="stats-cards-title">
                            <div className="text-info-big"> {names} </div>
                        </div>
                        <div className="text-info-data"> {artistCharts[0][2]} track{pluralTracks} </div>
                    </div>
                </div>
            </div>
        )
    }
    catch (err) {
        return <div />
    }
}

export default Artists