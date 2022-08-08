import React from "react"
import Header from "./header.jsx";
import spotifyGetAccessToken from "./../modules/token.jsx";

const Welcome = () => {
  return (
    <div>

      <Header />

      <div id="loginButtonSection">
        <button id="loginButton" onClick={spotifyGetAccessToken}>Start here</button>
      </div>
        
      <div id="cookieAlert">
        This website does NOT use third-party cookies and any kind of tracking technology.<br />
        The author of this website does not get any profit from it.< br />
        HOWEVER, in order to work, it has to retrieve data from your Spotify account.<br />
        If you click on the login button, the author will take for granted you are fine with it.<br />
        <br />
        This website is not related to Spotify AB or any of its partners.<br />
      </div>

    </div>
  )
}

export default Welcome