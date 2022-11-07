const getLocalizedRoute = require("./src/i18n/getLocalizedRoute");

// Recreate all pages with translated routes
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  const language = page.context.i18n.language;
  const defaultLanguage = page.context.i18n.defaultLanguage;
  const lang = language !== defaultLanguage ? "/" + language : "";
  const originalPath = page.context.i18n.originalPath;

  if (page.internalComponentName === `Component/${lang}dev-404-page/`) {
    return;
  }

  const localizedPath = getLocalizedRoute(originalPath, language);
  deletePage(page);

  createPage({
    ...page,
    path: `${lang}${localizedPath}`,
    context: {
      ...page.context,
      i18n: {
        ...page.context.i18n,
        path: `${lang}${localizedPath}`,
        originalPath: originalPath,
      },
    },
  });
};
