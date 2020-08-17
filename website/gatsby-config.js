const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Jina Anne',
    author: {
      name: 'Jina Anne',
      summary: '',
    },
    description: 'Portfolio',
    siteUrl: `https://www.jina.me/`,
    social: {
      twitter: 'jina',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        sourceMap: true,
        includePaths: [path.resolve(__dirname, './src')],
        sassRuleTest: /\.nothing\.s(a|c)ss$/,
        sassRuleModulesTest: /\.scss$/,
        useResolveUrlLoader: true,
        // eslint-disable-next-line global-require
        postCssPlugins: require('./postcss.config.js').plugins,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/site/DefaultLayout.jsx'),
        },
        // a workaround to solve mdx-remark plugin compat issue
        // https://github.com/gatsbyjs/gatsby/issues/15486
        plugins: ['gatsby-remark-images'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
            },
          },
          // Valid remark-smartypants options may passed to the plugin.
          // For more on valid options refer to the remark-smartypants API
          // https://github.com/retextjs/retext-smartypants#api
          {
            resolve: 'gatsby-remark-smartypants',
          },
          // Avoid widows in titles, paragraphs, etc.
          {
            resolve: 'gatsby-remark-widows',
            // Default options:
            // options: {
            //   minLength: 4,
            //   maxLength: null,
            // },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        whitelist: ['::-moz-selection', ':focus', ':active', 'img'], // Don't remove this selector
        // ignore: ['global.scss'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },

    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'bso7cts',
        },
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-no-javascript',
  ],
};
