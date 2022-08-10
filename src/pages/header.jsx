import React from "react";

const Header = (props) => {
    return (
        <header className={props.headerClass}>
            <div id="title">
                <div id="title-components">
                    <span id="title-1">WHAT HAVE</span>
                    <span id="title-2"> YOU LIKED</span>
                    <span id="title-3"> RECENTLY?</span>
                </div>
            </div>
            <div id="slogan">
                <span id="slogan-1">Detailed statistics of the latest</span>
                <span id="slogan-2"> 50 songs you faved on Spotify</span>
            </div>
        </header>
    )
}

export default Header