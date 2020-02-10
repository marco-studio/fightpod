module.exports = {
  siteMetadata: {
    title: `Box to Box`,
    description: `your description of the podcast is not detailed enough therefore not good for discoverability`,
    author: `Phil McCormick and Zach Marsden`,
    twitter: `https://twitter.com/podcastboxtobox`,
    instagram: `https://www.instagram.com/podcastboxtobox/`,
    facebook: ``,
    youtube: `https://www.youtube.com/channel/UCy3_DSR2ecfsSteIaa5wAoA`,
    apple: `https://podcasts.apple.com/podcast/id1490630408?ct=podlink&mt=2`,
    stitcher: ``,
    google: `https://podcasts.google.com/?feed=aHR0cHM6Ly9hdWRpb2Jvb20uY29tL2NoYW5uZWxzLzUwMTI1NjAucnNz`,
    pocket: `https://pca.st/itunes/1490630408`,
    spotify: `https://open.spotify.com/show/1v2XpGi3x1zlEtbzP87Vap`,
    overcast: `https://overcast.fm/itunes1490630408`,
    castbox: `https://castbox.fm/vic/1490630408`,
    castro: `https://castro.fm/itunes/1490630408`,
    podbean: ``,
    beaker: `https://www.breaker.audio/shows?feed_url=https%3A%2F%2Faudioboom.com%2Fchannels%2F5012560.rss`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
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
        // icon: `https://pbcdn1.podbean.com/imglogo/image-logo/2144795/26850174_531238480575311_1377019303222901017_o_1_.png`, // This path is relative to the root of the site.
        icon: `src/images/logo.png` // This path is relative to the root of the site.
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        // url: `https://www.gatsbyjs.org/blog/rss.xml`,
        // url: `https://boysinthecave.com/feed/podcast/`,
        // url: `http://boysinthecave.libsyn.com/rss`,
        url: `https://audioboom.com/channels/5012560.rss`,
        name: `GatsbyBlog`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        parserOption: {
          customFields: {
            channel: ["title", "image"]
            // item: ["itunes:summary"],
            // item: ["itunes:image", "img"],
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`tailwindcss`)]
      }
    }
  ]
};
