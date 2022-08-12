module.exports = {
  siteMetadata: {
    title: `What Have You Liked Recently`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-page-transitions',
    'gatsby-plugin-charts-css',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        useResolveUrlLoader: true
      }
    }
  ],
}
