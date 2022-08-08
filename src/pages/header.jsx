import React from "react";

const Header = () => {
    return (
        <header>
            <div id="title">WHAT HAVE YOU LIKED RECENTLY?</div>
            <div id="slogan">Detailed statistics of the latest 50 songs you faved on Spotify</div>
            <button id="logoutButton" onClick={() => {
                localStorage.clear();
                sessionStorage.clear();
                window.location.reload(false);
            }}>
                Log out
            </button>
        </header>
    )
}

export default Header