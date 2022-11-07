import * as React from "react";
import { useI18next, Link, Trans } from "gatsby-plugin-react-i18next";
import LanguageSwitcher from "./languageSwitcher";
import { desktop, navbar, switcher } from "./nav.module.css";

const getLocalizedRoute = require("../i18n/getLocalizedRoute");

// Array with menu links
const navItems = [""];

const Nav = () => {
  const { language } = useI18next();
  const lng = language;

  return (
    <nav className={navbar}>
      {/* Nav items desktop */}
      <ul className={desktop}>
        {navItems.map((link) => {
          if (link === "") {
            return (
              <li key={link}>
                <Link
                  to={getLocalizedRoute("/" + link.toLocaleLowerCase(), lng)}
                >
                  Home
                </Link>
              </li>
            );
          } else {
            return (
              <li key={link}>
                <Link
                  to={getLocalizedRoute(`/${link.toLocaleLowerCase()}/`, lng)}
                >
                  <Trans>{link}</Trans>
                </Link>
              </li>
            );
          }
        })}
      </ul>

      <div className={switcher}>
        <LanguageSwitcher />
      </div>
    </nav>
  );
};
export default Nav;
