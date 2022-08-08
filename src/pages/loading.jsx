import React from "react"
import Header from "./header"

const Loading = () => {
    return (
      <div>
        <Header />
        <div class="loader"></div>
        <div class="loaderMessage">
            Retrieving your faved songs...
        </div>
      </div>
    )
  }
  
  export default Loading