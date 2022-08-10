import React from "react"
import Header from "./header.jsx"
import Artists from "./elements/artists.jsx"
import AvgMinMax from "./elements/avgminmax.jsx"
import Duration from "./elements/duration.jsx"
import Explicit from "./elements/explicit.jsx"
import Keys from "./elements/keys.jsx"
import Mode from "./elements/mode.jsx"
import ReleaseDates from "./elements/release_dates.jsx"

const Stats = (props) => {
    let stats = props.stats;
    return (
        <div>
            <Header deleteStats={props.deleteStats} />
            <div id="stats">
                {/*Artists*/}
                <Artists stats={stats.artists} />
                {/*Duration*/}
                <Duration stats={stats.duration_ms} title={"Duration"} description={"How long are your songs?"} least={"shortest"} most={"longest"} />
                {/*Release dates*/}
                <ReleaseDates stats={stats.release_dates} />
                {/*Mode*/}
                <Mode stats={stats.mode} />
                {/*Keys*/}
                <Keys stats={stats.keys} />
                {/*Explicit*/}
                <Explicit stats={stats.explicit} />
                {/*Popularity*/}
                <AvgMinMax data={"Popularity"} stats={stats.popularity} title={"Popularity"} description={"How popular are your songs from 0 to 100?"} least={"least popular"} most={"most popular"} />
                {/*Danceability*/}
                <AvgMinMax data={"Danceability"} stats={stats.danceability} title={"Danceability"} description={"How much can you dance on your songs from 0 to 100?"} least={"least danceable"} most={"most danceable"} />
                {/*Energy*/}
                <AvgMinMax data={"Energy"} stats={stats.energy} title={"Energy"} description={"How energetic are your songs from 0 to 100?"} least={"least energetic"} most={"most energetic"} />
                {/*Valence (called happiness in the frontend)*/}
                <AvgMinMax data={"Happiness"} stats={stats.valence} title={"Happiness"} description={"How happy are your songs from 0 to 100?"} least={"least happy"} most={"happiest"} />
            </div>
        </div>
    )
}

export default Stats