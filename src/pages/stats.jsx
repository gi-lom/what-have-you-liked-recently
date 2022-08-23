import React from "react"
import { motion } from "framer-motion"

import Header from "./header.jsx"
import Artists from "./elements/artists.jsx"
import AvgMinMax from "./elements/avgminmax.jsx"
import Duration from "./elements/duration.jsx"
import Explicit from "./elements/explicit.jsx"
import Keys from "./elements/keys.jsx"
import Mode from "./elements/mode.jsx"
import ReleaseDates from "./elements/release_dates.jsx"

import '../style/pages/error.scss';
import '../style/pages/stats.scss';


const Stats = (props) => {
    try {
        let stats = props.stats;
        let num = props.stats.duration_ms.list.length;
        if (num == 0)
            return(
                <div>
                    <Header headerClass={"header-not-welcome"} />
                    <div id="loader">
                        <div id="error-button">
                            <div id="error-button-text">
                                0 <br />
                                <span id="error-button-desc">songs found</span>
                            </div>
                        </div>
                    </div>
                    <div id="error">
                        <div id="errorDescription">
                            You have no faved songs on your Spotify account. <br />
                        </div>
                    </div>
                </div>
            );
        else {
            let statsCards = [];
            let statsCardsColumns = [];
            let nakedCartsColumns = [
                /*Mode*/
                (<Mode stats={stats.mode} num={num}/>),
                /*Keys*/
                (<Keys stats={stats.keys} num={num}/>),
                /*Explicit*/
                (<Explicit stats={stats.explicit} num={num}/>),
            ];
            for (let i = 0; i < nakedCartsColumns.length; i++)
                statsCardsColumns.push(
                    <div className="stats-card">
                        {nakedCartsColumns[i]}
                    </div>
                );
            let statsCardsColumnsWrapped = (
                <div className = "stats-card-columns">
                    {statsCardsColumns}
                </div>
            );
            let nakedCarts = [
                /*Duration*/
                (<Duration stats={stats.duration_ms} title={"Duration"} description={"How long are your songs?"} least={"shortest"} most={"longest"} num={num}/>),
                /*Release dates*/
                (<ReleaseDates stats={stats.release_dates} num={num}/>),
                /*Popularity*/
                (<AvgMinMax data={"Popularity"} stats={stats.popularity} title={"Popularity"} description={"How popular are your songs?"} least={"least popular"} most={"most popular"} num={num}/>),
                /*Danceability*/
                (<AvgMinMax data={"Danceability"} stats={stats.danceability} title={"Danceability"} description={"How much can you dance on your songs?"} least={"least danceable"} most={"most danceable"} num={num}/>),
                /*Energy*/
                (<AvgMinMax data={"Energy"} stats={stats.energy} title={"Energy"} description={"How energetic are your songs?"} least={"least energetic"} most={"most energetic"} num={num}/>),
                /*Valence (called happiness in the frontend)*/
                (<AvgMinMax data={"Happiness"} stats={stats.valence} title={"Happiness"} description={"How happy are your songs?"} least={"least happy"} most={"happiest"} num={num}/>)
            ];
            for (let i = 0; i < nakedCarts.length; i++) {
                if (i == 2) {
                    statsCards.push(statsCardsColumnsWrapped);
                    
                }
                statsCards.push(
                    <motion.div className="stats-card" initial={{scale: 0.01}} animate={{scale: 1}} transition={{duration: 0.25}}>
                        {nakedCarts[i]}
                    </motion.div>
                )
            }  
            return (
                <div>
                    <Header headerClass={"header-not-welcome"} />
                    {/*Artists*/}
                    <div>
                        <motion.div initial={{scale: 0.01}} animate={{scale: 1}} transition={{duration: 0.25}}>
                            <Artists stats={stats.artists} num={num} />
                        </motion.div>
                            <div id="stats">
                                {statsCards}        
                            </div>
                    </div>
                </div>
            )
        }
    }
    catch (err) {
        <div />
    }
}

export default Stats