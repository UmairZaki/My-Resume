module.exports = {
  //pathPrefix: `/`,
  siteMetadata: {
    title: 'Resume',
    author: 'umair',
    description: 'A Gatsby.js V2 Starter based on Landed by HTML5 UP',
    menuLinks: [
      
      {
        name: 'My Work',
        cl: 'button primary',
        items: [
          {
            name: 'Deep Learning',
            link: '/elements',
          },
          {
            name: 'Gatsby',
            link: '/no-sidebar',
          },
          {
            name: 'Contact Me',
            link: '#footer',
            items: [
              {
                name: 'Home',
                link: "/",
              },
            ],
          },
        ],
      },
      {
        name: 'My Achievements',
        link: '#two',
        cl: 'button primary',
      },
      {
        name: 'My Skills',
        link: '#four',
        cl: 'button primary',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Umair Zaki',
        short_name: 'portfolio',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'Umair Zaki',
        icon: 'src/assets/images/website-icon.jpg', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images/`,
        name: 'images',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
    'gatsby-plugin-offline',
  ],
}
