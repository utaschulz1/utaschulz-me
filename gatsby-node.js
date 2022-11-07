const getLocalizedRoute = require("./src/i18n/getLocalizedRoute");

// Recreate all pages with translated routes
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  const language = page.context.i18n.language;
  // const defaultLanguage = page.context.i18n.defaultLanguage;
  // const lang = language !== defaultLanguage ? "/" + language : "";
  const originalPath = page.context.i18n.originalPath;

  if (page.internalComponentName === `Component/${language}dev-404-page/`) {
    return;
  }

  const localizedPath = getLocalizedRoute(originalPath, language);
  deletePage(page);

  createPage({
    ...page,
    path: `${language}${localizedPath}`,
    context: {
      ...page.context,
      i18n: {
        ...page.context.i18n,
        path: `${language}${localizedPath}`,
        originalPath: originalPath,
      },
    },
  });
};
