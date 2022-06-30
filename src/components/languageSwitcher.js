import * as React from "react";
import { useState } from "react";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import { switcher, menuIcon, langs } from "./languageSwitcher.module.css";
const getLocalizedRoute = require("../i18n/getLocalizedRoute");

const LanguageSwitcher = () => {
  const { languages, originalPath, language } = useI18next();

  const [show, setShow] = useState(false);

  const handleLeave = () => setShow(false);
  const handleClick = () => setShow(!show);

  return (
    <button
      className={switcher}
      onMouseLeave={handleLeave}
      onClick={handleClick}
    >
      <svg
        className={menuIcon}
        widht={"13"}
        height={"13"}
        viewBox={"0 0 14.8 23.4"}
        transform={show ? "rotate(270)" : "rotate(90)"}
      >
        <path d="M14.1 13.6l-.5.5-8.5 8.5c-1 1-2.8 1-3.8 0l-.5-.5c-1-1-1-2.8 0-3.8l6.6-6.6L.8 5c-1-1-1-2.7 0-3.8l.5-.5c1-1 2.7-1 3.8 0l9 9c1 1.2 1 2.9 0 3.9z"></path>
      </svg>
      {language}
      <ul className={langs} style={{ display: show ? "flex" : "none" }}>
        {languages.map(
          (lang) =>
            lang !== language && (
              <li key={lang}>
                <Link
                  to={getLocalizedRoute(originalPath, lang)}
                  language={lang}
                  onBlur={handleLeave}
                >
                  {lang}
                </Link>
              </li>
            )
        )}
      </ul>
    </button>
  );
};

export default LanguageSwitcher;
