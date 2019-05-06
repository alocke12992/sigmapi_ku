const { BLOCKS, MARKS, INLINES } = require('@contentful/rich-text-types')
let contentfulConfig
const path = require('path')

try {
  // Load the Contentful config from the .contentful.json
  contentfulConfig = require('./.contentful')
} catch (_) {}

// Overwrite the Contentful config with environment variables if they exist
contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID || contentfulConfig.spaceId,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN || contentfulConfig.accessToken,
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the delivery token need to be provided.'
  )
}

module.exports = {
  siteMetadata: {
    title: 'Sigma Pi | University of Kansas',
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-layout`,
      options: {
          component: require.resolve(`./src/layouts`)
      }
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        components: path.join(__dirname, 'src/components'),
        styledComponents: path.join(__dirname, 'src/styledComponents'),
        styles: path.join(__dirname, 'src/styles'),
        static: path.join(__dirname, 'static'),
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: spaceId,
        accessToken: accessToken,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'static', 'images'),
      },
    },
    {
      resolve: '@contentful/gatsby-transformer-contentful-richtext',
      options: {
        renderOptions: {
          /*
           * Defines custom html string for each node type like heading, embedded entries etc..
           */
          renderNode: {
            // Example
            [INLINES.ASSET_HYPERLINK]: node => {
              return `<img class='custom-asset' src="${
                node.data.target.fields.file['en-US'].url
              }"/>`
            },
            [INLINES.EMBEDDED_ENTRY]: node => {
              return `<div class='custom-entry' />${
                node.data.target.fields.name['en-US']
              }</div>`
            },
          },
          /*
           * Defines custom html string for each mark type like bold, italic etc..
           */
          renderMark: {
            // Example
            [MARKS.BOLD]: text => `<custom-bold>${text}<custom-bold>`,
          },
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'icons',
        path: path.join(__dirname, 'static', 'icons'),
      },
    },
  ],
}