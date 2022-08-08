import React from "react"

import setLocalStorage from "./../modules/spotify.jsx";
import Welcome from "./welcome.jsx";
import Loading from "./loading.jsx";
import Stats from "./stats.jsx";
import Error from "./error.jsx";


class MainPart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {stats: null};
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
    if (this.state.stats === null) {
      if (localStorage.getItem("access_token") !== null)
        return (
          <Loading />
        )
      else
        return (
          <Welcome />
        )
    }
    else {
      if (Object.keys(this.state.stats).includes("error"))
        return (
          <Error stats={this.state.stats} />
        )
      else
        return (
          <Stats stats={this.state.stats} />
        )
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
