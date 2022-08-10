import * as React from "react";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import { langMenu, langLink } from "./languageSwitcher.module.css";
const getLocalizedRoute = require("../i18n/getLocalizedRoute");

const LanguageSwitcher = () => {
  const { languages, originalPath, language } = useI18next();

  return (
    <ul className={langMenu}>
      {languages.map(
        (lang) =>
          lang !== language && (
            <li key={lang}>
              <Link
                className={langLink}
                to={getLocalizedRoute(originalPath, lang)}
                language={lang}
              >
                {lang}
              </Link>
              |
            </li>
          )
      )}
      <li>
        <Link
          to={getLocalizedRoute(originalPath, language)}
          language={language}
          style={{ fontWeight: "bold" }}
        >
          {language}
        </Link>
      </li>
    </ul>
  );
};

export default LanguageSwitcher;
