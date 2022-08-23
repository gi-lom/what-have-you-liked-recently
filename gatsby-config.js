module.exports = {
  siteMetadata: {
    title: `What Have You Liked Recently`,
  },
  plugins: [
    'gatsby-plugin-charts-css',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        useResolveUrlLoader: true
      }
    }
  ],
}
