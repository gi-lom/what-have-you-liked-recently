import React from "react";
import Header from "./header.jsx";

import '../style/pages/error.scss';

const Error = (props) => {
    return (
        <div>

                <Header headerClass={"header-not-welcome"} />
                <div id="loader">
                    <div id="error-button">
                        <div id="error-button-text">
                            {props.stats.error} <br />
                            <span id="error-button-desc">Error</span>
                        </div>
                    </div>
                </div>
        
                <div id="error">
                    <div id="errorDescription">
                        Something bad happened. <br />
                        Try reloading the page. If it still fails, wait some minutes and redo it. <br />
                    </div>
                </div>
        </div>
    ) 
}

export default Error