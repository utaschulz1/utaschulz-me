require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const languageOptions = require("./src/i18n/languageOptions.json");

module.exports = {
  siteMetadata: {
    siteUrl: "https://weonbikes.com/",
    title:
      "WeOnBikes - Radwandern, Bikepacking-Erfahrungen und Fahrradleben in Europa",
    description:
      "Radwandern ist unsere Leidenschaft. Praktische Tipps, Radrouten, Packlisten - unsere Erfahrungen zu Bikepacking, Radtouren und Fahrradleben teilen wir mit euch in unserem Blog und unserem Buch.",
    author: "Menno van Balen & Uta Schulz",
  },
  trailingSlash: "always",
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
              wrapperStyle(image) {
                let maxImageWidth;
                if (image.aspectRatio < 1)
                  maxImageWidth = image.aspectRatio * 600;
                else maxImageWidth = 600;

                return `max-width: clamp(120px, calc(${
                  image.aspectRatio
                }* 80vh), ${
                  Math.round(maxImageWidth * 10) / 10
                }px); max-height: 600px;`;
              },
              showCaptions: false,
              quality: 75,
              withWebp: true,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `300`,
              icon: false,
              className: `ni`,
              elements: [`h2`, `h3`],
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "noopener noreferrer",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog-posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: languageOptions.languages,
        defaultLanguage: languageOptions.defaultLanguage,
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl: `http://https://weonbikes.com/`,
        // generateDefaultLanguagePage: true,
        redirect: false,
        // you can pass any i18next options
        // pass following options to allow message content as a key
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
        },
        pages: [
          {
            matchPath: "/:lang?/blog/:uid",
            getLanguageFromPath: true,
            excludeLanguages: ["nl", "en", "pt"],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `We On Bikes`,
        short_name: `We On Bikes`,
        description: `Radwandern ist unsere Leidenschaft. Praktische Tipps, Radrouten, Packlisten - unsere Erfahrungen zu Bikepacking, Radtouren und Fahrradleben teilen wir mit euch in unserem Blog und unserem Buch.`,
        lang: `de`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        icon_options: {
          purpose: `any`,
        },
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#0d4880`,
        localize: [
          {
            start_url: `/en/`,
            lang: `en`,
            name: `We On Bikes`,
            short_name: `We On Bikes`,
            description: `Bicycle touring is our passion; practical tips, cycling routes, packing lists - we share our experiences on bikepacking, bike trips and cycling life with you in our blog and book.`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://weonbikes.com/",
        sitemap: "https://weonbikes.com/sitemap/sitemap-0.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-htaccess",
      options: {
        https: true,
        www: false,
        SymLinksIfOwnerMatch: true,
        host: "weonbikes.com",
        redirect: [
          `
          RewriteCond %{HTTP_HOST} ^weonbikes.com$ [OR]
          RewriteCond %{HTTP_HOST} ^www.weonbikes.com$
          RewriteRule ^mission/?$ "https://weonbikes.com/story/" [R=301,L]
          RewriteCond %{HTTP_HOST} ^weonbikes.com$ [OR]
          RewriteCond %{HTTP_HOST} ^www.weonbikes.com$
          RewriteRule ^en/mission/?$ "https://weonbikes.com/en/story/" [R=301,L]
        `,
        ],
      },
    },
    {
      resolve: "gatsby-plugin-feed",
      options: {
        // We'll get to this in a moment
        query: `
        {
          site {
            siteMetadata {
              siteUrl
              site_url: siteUrl
            }
          }
        }`,
        feeds: [
          {
            title: "We On Bikes blog RSS feed",
            description:
              "Radwandern ist unsere Leidenschaft. Praktische Tipps, Radrouten, Packlisten - unsere Erfahrungen zu Bikepacking, Radtouren und Fahrradleben teilen wir mit euch in unserem Blog und unserem Buch.",
            language: "de",
            output: "/rss.xml",
            query: `
              {
                allMdx(
                  filter: { frontmatter: { lang: { eq: "de" } } }
                  sort: { fields: frontmatter___date, order: DESC }
                  ) {
                    nodes {
                      frontmatter {
                      date
                      path
                      title_post
                      description
                    }
                  }
                }
              }
            `,
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes.map((node) => {
                return Object.assign({}, node.frontmatter, {
                  title: node.frontmatter.title_post,
                  description: node.frontmatter.description,
                  date: node.frontmatter.date,
                  url:
                    site.siteMetadata.siteUrl +
                    "/blog/" +
                    node.frontmatter.path +
                    "/",
                  guid:
                    site.siteMetadata.siteUrl +
                    "/blog/" +
                    node.frontmatter.path +
                    "/",
                });
              });
            },
          },
          {
            title: "We On Bikes Blog RSS Feed",
            description:
              "Bicycle touring is our passion; practical tips, cycling routes, packing lists - we share our experiences on bikepacking, bike trips and cycling life with you in our blog and book.",
            site_url: "https://weonbikes.com/en/",
            language: "en",
            output: "/en/rss.xml",
            query: `
              {
                allMdx(
                  filter: { frontmatter: { lang: { eq: "en" } } }
                  sort: { fields: frontmatter___date, order: DESC }
                ) {
                  nodes {
                    frontmatter {
                      date
                      path
                      title_post
                      description
                    }
                  }
                }
              }  
            `,
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes.map((node) => {
                return Object.assign({}, node.frontmatter, {
                  title: node.frontmatter.title_post,
                  description: node.frontmatter.description,
                  date: node.frontmatter.date,
                  url:
                    site.siteMetadata.siteUrl +
                    "/en/blog/" +
                    node.frontmatter.path +
                    "/",
                  guid:
                    site.siteMetadata.siteUrl +
                    "/en/blog/" +
                    node.frontmatter.path +
                    "/",
                });
              });
            },
          },
        ],
      },
    },
  ],
};
