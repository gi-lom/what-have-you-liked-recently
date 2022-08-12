import React from "react"

import Header from "./header.jsx";
import spotifyGetAccessToken from "./../modules/token.jsx";

import '../style/pages/welcome.scss';

const Welcome = () => {
  return (
    <div>

      <Header headerClass={"header-welcome"}/>

      <div id="login-button-section">
        <button id="login-button" className="no-error" onClick={spotifyGetAccessToken}>START</button>
      </div>
        
      <div id="cookie-alert">
        This website does NOT use third-party cookies, except those from Spotify.<br />
        No trackers are present, and the author of this website does not get any profit from the website.< br />
        HOWEVER, in order to work, it has to retrieve data from your Spotify account.<br />
        If you click on the login button, the author will take for granted you are fine with it.<br />
        <br />
        This website is not related to Spotify AB or any of its partners.<br />
      </div>

    </div>
  )
}

export default Welcome