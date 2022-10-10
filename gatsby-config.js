module.exports = {
  siteMetadata: {
    title: `What Have You Liked Recently`,
    description: 'Detailed statistics of the latest 50 songs you faved on Spotify',
    siteUrl: 'https://whathaveyoulikedrecently.gatsbyjs.io',
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-charts-css',
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    "gatsby-plugin-preload-fonts",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        useResolveUrlLoader: true
      }
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://whathaveyoulikedrecently.gatsbyjs.io",
        sitemap: "https://whathaveyoulikedrecently.gatsbyjs.io/sitemap.xml",
        resolveEnv: () => process.env.GATSBY_ENV,
        policy: [{ userAgent: '*', allow: '/' }]
      },
    }
  ],
}
