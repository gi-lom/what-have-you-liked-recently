import React from "react";
import Header from "./header.jsx";

const Error = (props) => {
    return (
        <div>

            <Header />
        
            <div id="error">
                <div id="errorTitle">{props.stats.error}</div>
                <div id="errorDescription">
                    Something bad happened. <br />
                    Try reloading the page. If it still fails, wait some minutes and redo it. <br />
                </div>
            </div>

        </div>
    ) 
}

export default Error