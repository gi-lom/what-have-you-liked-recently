import React from "react";
import { Helmet } from "react-helmet";

import setLocalStorage from "./../modules/spotify.jsx";
import Welcome from "./welcome.jsx";
import Loading from "./loading.jsx";
import Stats from "./stats.jsx";
import Error from "./error.jsx";
import Header from "./header.jsx";

import "@fontsource/secular-one";
import "@fontsource/shrikhand";
import "@fontsource/raleway";
import "@fontsource/alegreya/900-italic.css";

import spotifyLogo from "../images/spotify.png";

class MainPart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stats: null, forceRender: false };
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    setLocalStorage(this.state.stats === null).then((finalResult) => {
      if (finalResult !== null) this.state.stats = finalResult;
      this.setState({ state: this.state });
    });
  }

  logout() {
    if (
      window.confirm(
        "This will log you out of Spotify in the whole browser. Continue?"
      )
    ) {
      localStorage.clear();
      sessionStorage.clear();
      const url = "https://accounts.spotify.com/logout";
      const spotifyLogoutWindow = window.open(
        url,
        "Spotify Logout",
        "width=700,height=500,top=40,left=40"
      );
      const timeout = Promise.resolve(
        setTimeout(() => spotifyLogoutWindow.close(), 500)
      );
      timeout.then(() => {
        this.forceUpdate();
      });
    }
  }

  render() {
    let authState =
      typeof window !== "undefined"
        ? localStorage.getItem("spotify_auth_state")
        : null;
    if (authState === null || window.location.href.split("#").length == 1)
      return <Welcome />;
    else {
      let el = <div />;
      if (this.state.stats === null)
        el = <Loading forceRender={this.forceRender} />;
      else {
        if (Object.keys(this.state.stats).includes("error"))
          el = (
            <Error stats={this.state.stats} forceRender={this.forceRender} />
          );
        else
          el = (
            <Stats stats={this.state.stats} forceRender={this.forceRender} />
          );
      }
      return (
        <>
          <Header headerClass={"header-not-welcome"} />
          <div id="logout-container">
            <div className="spotify-logo">
              <img src={spotifyLogo} />
            </div>
            <button id="logout" onClick={this.logout}>
              Logout
            </button>
          </div>
          {el}
        </>
      );
    }
  }
}

// markup
const IndexPage = () => {
  return (
    <main>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <title>What Have You Liked Recently?</title>
        {props.robots == "nofollow" && (
          <link rel="canonical" href="https://whathaveyoulikedrecently.gatsbyjs.io" />
        )}
        <meta charset="utf-8" />
        <meta
          name="description"
          content="Detailed statistics of the latest 50 songs you faved on Spotify"
        />
        <meta
          name="keywords"
          content="spotify, music, spotify data, spotify library stats, faved tracks stats"
        />
        <meta name="author" content="gi-lom" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content={props.robots} />
      </Helmet>

      <MainPart />

      <footer>
        Released under GPL3 license
        <br />
        Author: gi-lom -{" "}
        <a href="https://github.com/gi-lom/what-have-you-liked-recently">
          Github page
        </a>
      </footer>
    </main>
  );
};

export default IndexPage;
