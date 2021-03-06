require(`dotenv`).config({
  path: `.env`,
});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  siteMetadata: {
    siteTitle: "码个Der",
    siteTitleAlt: `码个Der - 码个der，码走寂寞，码出快乐`,
    siteHeadline: `码个Der - Gatsby Theme from @lekoarts`,
    siteUrl: `https://code-a-der.github.io`,
    siteDescription: `记录分享开发心得和生活感悟`,
    siteLanguage: "zh",
    siteImage: "/banner.png",
    authorL: "@guxuewu",
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `博客`,
            slug: `/blog`,
          },
          {
            title: `关于`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `掘金`,
            url: `https://juejin.im/user/3157453124675341`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `码个der，码走寂寞，码出快乐`,
        short_name: `码个Der`,
        description: `码个der，码走寂寞，码出快乐`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#219BE4`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
};
