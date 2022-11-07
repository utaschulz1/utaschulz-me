require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const languageOptions = require("./src/i18n/languageOptions.json");

module.exports = {
  siteMetadata: {
    siteUrl: "https://utaschulz.me/",
    title: "TCLoc Master Theses Research | Uta Schulz",
    description: "How Documentation Portal UX Factors Impact Content Creation",
  },
  trailingSlash: "always",
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
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
        siteUrl: `http://https://utaschulz.me/`,
        generateDefaultLanguagePage: true,
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
        // pages: [
        //   {
        //     matchPath: "/:lang?/blog/:uid",
        //     getLanguageFromPath: true,
        //     excludeLanguages: ["nl", "en", "pt"],
        //   },
        // ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Uta Schulz`,
        short_name: `Uta Schulz`,
        description: `Translation, localization and DTP of technical documentation, eLearning and SEO content for the German market.`,
        lang: `en`,
        display: `standalone`,
        icon: `src/images/thesis-model.png`,
        icon_options: {
          purpose: `any`,
        },
        start_url: `/en/`,
        background_color: `#000000`,
        theme_color: `#0d4880`,
        localize: [
          {
            start_url: `/de/`,
            lang: `de`,
            name: `Uta Schulz`,
            short_name: `Uta Schulz`,
            description: `Translation, localization and DTP of technical documentation, eLearning and SEO content for the German market.`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://utaschulz.me",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-htaccess",
      options: {
        https: true,
        www: false,
        SymLinksIfOwnerMatch: true,
        host: "utaschulz.me",
        redirect: [
          `
          RewriteCond %{ENV:REDIRECT_STATUS} ^$
          RewriteRule !^[a-z]{2}/ /en%{REQUEST_URI} [L,NE,R=301]
          `,
        ],
      },
    },
  ],
};
