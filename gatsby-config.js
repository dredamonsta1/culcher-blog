module.exports = {
  siteMetadata: {
    title: `Nine By Four`,
    description: `An appreciation for Rap / HipHop culture and a look into it's future.`,
    author: `Andre Wilkinson`,
  },
  plugins: [
    // `gatsby-plugin-react-helmet`,
    {
      //filesystem is needed to view files pics from src or markdownfrom pages folder 
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      //filesystem is needed to view .md or markdown files from src pages folder 
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Images`,
        path: `${__dirname}/src/pages`,
      },
    },
    //transformer-remark is needed for gasby to readmarkdown 
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
        //this changes the favcon or tiny tab icon when you get on the site
        icon: `src/images/pure-hiphop.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],


}
