import React from "react"
import Header from "./header"

import '../style/pages/loading.scss';

const Loading = () => {
    return (
      <div>
        <Header headerClass={"header-not-welcome"} />
        <div id="loader">
          <div id="login-button" className="no-error">
            <div id="login-button-text">LOADING</div> 
            <div id="login-button-border"></div>
          </div>
        </div>

          <div className="cookie-alert">
            <br />
            <br />
            <br />
            If the loading page is stuck, try disabling extensions or browser features that block trackers.
            <br />
            The author guarantees there are no trackers outside those necessary for the website to work.
            <br />
            Whoever is expert enough can verify this by looking at the repository.
        </div>
      </div>
    )
  }
  
  export default Loading