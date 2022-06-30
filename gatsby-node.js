// Idea for pagenation inside createPages
//   // Articles template pages and context
//   // const posts = query.data.allMarkdownRemark.edges;
//   // const postsPerPage = 20;
//   // const numPages = Math.ceil(posts.length / postsPerPage);

//   // Array.from({ length: numPages }).forEach((_, i) => {
//   //   createPage({
//   //     path: i === 0 ? "/articles" : `/articles/${i + 1}`,
//   //     component: path.resolve("src/templates/articles.js"),
//   //     context: {
//   //       limit: postsPerPage,
//   //       skip: i * postsPerPage,
//   //       numPages,
//   //       currentPage: i + 1,
//   //     },
//   //   });
//   // });

const path = require("path");
const getLocalizedRoute = require("./src/i18n/getLocalizedRoute");
const languageOptions = require("./src/i18n/languageOptions.json");

// Create blogpost pages with localized routes
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  for (const language of languageOptions.languages) {
    const result = await graphql(`
      query {
        allMdx(filter: {frontmatter: {lang: {eq: "${language}"}}} sort: {fields: frontmatter___date, order: ASC}) {
          edges {
            next {
              frontmatter {
                path
                title_post
              }
            }
            previous {
              frontmatter {
                path
                title_post
              }
            }
            node {
              id
              frontmatter {
                date
                lang
                path
                title_post
              }
            }
          }
        }
      }
      `);

    if (result.errors) {
      reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
    }

    const posts = result.data.allMdx.edges;

    posts.forEach((post) => {
      const language = post.node.frontmatter.lang;
      const lang =
        language !== languageOptions.defaultLanguage ? "/" + language : "";
      const route = `/blog/${post.node.frontmatter.path}/`;

      createPage({
        path: `${lang}${route}`,
        component: path.resolve(`./src/components/post.js`),
        context: {
          language: language,
          id: post.node.id,
          previous: post.previous,
          next: post.next,
          i18n: {
            language,
            languages: languageOptions.languages,
            defaultLanguage: languageOptions.defaultLanguage,
            generateDefaultLanguagePage: false,
            routed: language === languageOptions.defaultLanguage ? false : true,
            originalPath: getLocalizedRoute(
              route,
              languageOptions.defaultLanguage
            ),
            path: `${lang}${route}`,
          },
        },
      });
    });
  }
};

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
