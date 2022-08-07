module.exports = {
  presets: ["babel-preset-gatsby"],
  plugins: [
    [
      "babel-plugin-i18next-extract",
      {
        keySeparator: null,
        nsSeparator: null,
        keyAsDefaultValue: ["de"],
        useI18nextDefaultValue: ["de"],
        discardOldKeys: true,
        outputPath: "locales/extractedTranslations/{{locale}}/{{ns}}.json",
        customTransComponents: [["gatsby-plugin-react-i18next", "Trans"]],
      },
    ],
  ],
  overrides: [
    {
      test: [`**/*.ts`, `**/*.tsx`],
      plugins: [[`@babel/plugin-transform-typescript`, { isTSX: true }]],
    },
  ],
};
