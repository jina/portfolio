const fs = require('fs');
const yaml = require('js-yaml');

exports.onCreateWebpackConfig = ({ actions, stage, getConfig }) => {
  // See https://spectrum.chat/gatsby-js/general/having-issue-related-to-chunk-commons-mini-css-extract-plugin~0ee9c456-a37e-472a-a1a0-cc36f8ae6033?m=MTU3MjYyNDQ5OTAyNQ==
  if (stage === 'build-javascript') {
    const config = getConfig();
    const miniCssExtractPlugin = config.plugins.find(
      (plugin) => plugin.constructor.name === 'MiniCssExtractPlugin',
    );

    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true;
    }

    actions.replaceWebpackConfig(config);
  }
};
exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  const ymlDoc = yaml.safeLoad(fs.readFileSync('./content/work.yml', 'utf-8'));
  ymlDoc.forEach((element) => {
    createPage({
      path: element.path,
      component: require.resolve('./src/templates/Project.jsx'),
      context: {
        pageTitle: element.title,
        pageHTMLTitle: element.htmlTitle,
        pageNext: element.next,
        pagePrev: element.prev,
        pageDescription: element.description,
        pageImage: element.image,
        pageCover: element.cover,
        pageLogo: element.logo,
        pageContent: element.content,
        pageRoles: element.roles,
        pageDeliverables: element.deliverables,
      },
    });
  });
};
