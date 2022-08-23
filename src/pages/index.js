import React from "react"

import setLocalStorage from "./../modules/spotify.jsx";
import Welcome from "./welcome.jsx";
import Loading from "./loading.jsx";
import Stats from "./stats.jsx";
import Error from "./error.jsx";

import "@fontsource/secular-one";
import "@fontsource/shrikhand";
import "@fontsource/raleway";
import "@fontsource/alegreya/900-italic.css"

class MainPart extends React.Component {

  constructor(props) {
    super(props);
    this.state = { stats: null };
  }

  componentDidMount() {
    setLocalStorage(this.state.stats === null)
    .then((finalResult) => {
      if (finalResult !== null)
        this.state.stats = finalResult;
        this.setState({ state: this.state });
    });
  }

  render() {
    let authState = typeof window !== 'undefined' ? localStorage.getItem('spotify_auth_state') : null
    if (authState === null)
      return (
        <Welcome />
      )
    else {
      if (this.state.stats === null)
        return (
          <Loading />
        )
      else {
      if (Object.keys(this.state.stats).includes("error"))
        return (
          <Error stats={this.state.stats} deleteStats={this.deleteStats} />
        )
      else
        return (
          <Stats stats={this.state.stats} deleteStats={this.deleteStats} />
        )
      }
    }
  }

}

// markup
const IndexPage = () => {

  return (
    <main>
      <title>What Have You Liked Recently?</title>

      <MainPart />

      <footer>
        Released under GPL3 license<br />
        Author: gi-lom - <a href="https://github.com/gi-lom/what-have-i-liked-recently">Github page</a>
      </footer>
    </main>
  )
}

export default IndexPage
