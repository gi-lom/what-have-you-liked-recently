# What Have You Liked Recently?
## Detailed statistics of the latest 50 songs you faved on Spotify

### Website: whathaveyoulikedrecently.gatsbyjs.io

This website tells you the following statistics about the latest 50 songs you faved on Spotify:

- **Artists.** What's the artist you've faved the most?
- **Duration.** How long are your tracks on average? What's the longest? The shortest?
- **Years.** What year have your tracks been released? What decade is the most frequent?
- **Mode.** How many tracks are in minor key, and how many in major?
- **Keys.** What musical keys do the tracks have?
- **Explicitness.** How many tracks are explicit?
- **Popularity.** How much popular are your tracks on average? What's the least and the most popular?
- **Danceability.** How much danceable are your tracks on average? What's the least and the most danceable?
- **Energy.** How much energetic are your tracks on average? What's the least and the most energetic?
- **Happiness.** How much happy are your tracks on average? What's the saddest? The happiest?

The meaning of these stats can be read on [Spotify's official documentation.](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-audio-features)

## Changelog

- 2022/09/22: Added logout button and Spotify links to artists' and tracks' names


## FAQ (Will add more questions with time, if needed)

### Why only 50 songs?
I have to comply with Spotify's bandwidth limits. Asking for a user's whole library, in case of large ones, activates their servers' protection shields against hacker attacks, because you can only ask them a certain amount of songs to be retrieved at one time, and therefore to get the whole library you need to do a lot of requests. There is the possibility of asking for more bandwidth, but they won't give it to hobbyist projects.

### Can I edit this website?
Yes. This website is released with a GNU General Public License 3, which allows you to read and fork the source code, provided you release it with the same license. If you want to edit this specific repository, however, open a pull request and I'll decide whether to accept it or not.

### Wait, doesn't Spotify already show you statistics of your listening habits?
Yes, but they are based on the tracks you have listened, not the ones you have saved in your library. In my opinion, the latter are more significant to analyze a user's music taste. It's more likely you listened to a song just to try, or that you let a song be played by accident, than you saving a song by accident.
