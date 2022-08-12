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
      </div>
    )
  }
  
  export default Loading