module.exports = {
  siteMetadata: {
    title: `Nine By Four`,
    description: `An appreciation for Rap / HipHop culture and a look into it's future.`,
    author: `Andre Wilkinson`,
  },
  plugins: [
    // `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Images`,
        path: `${__dirname}/src/images`,
        // name: `Images`,
        // path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],

//   plugins: [
//   {
//     resolve: `gatsby-source-filesystem`,
//     options: {
//       path: `${__dirname}/path/to/markdown/files`,
//       name: "markdown-pages",
//     },
//   },
//   `gatsby-transformer-remark`,
// ]
}
