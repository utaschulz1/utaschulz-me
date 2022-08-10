import * as React from "react";
import { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link, Trans, useI18next } from "gatsby-plugin-react-i18next";
import LanguageSwitcher from "./languageSwitcher";
import {
  desktop,
  mobile,
  navbar,
  burger,
  line,
  icon,
  img,
  switcher,
} from "./nav.module.css";

const getLocalizedRoute = require("../i18n/getLocalizedRoute");

// Array with menu links
const navItems = ["", "Blog", "Buch", "Story", "FAQ"];

const Nav = () => {
  const { language } = useI18next();
  const lng = language;

  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handlescroll = () => {
      if (showMenu) setShowMenu(false);
    };
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  }, [showMenu]);

  return (
    <nav className={navbar}>
      <button className={icon} aria-label="menu" onClick={handleClick}>
        <svg
          className={burger}
          style={{ display: !showMenu ? "block" : "none" }}
          widht={"30"}
          height={"30"}
          viewBox={"0 0 80 80"}
        >
          <line className={line} x1={"20"} y1={"20"} x2={"60"} y2={"20"}></line>
          <line className={line} x1={"20"} y1={"40"} x2={"60"} y2={"40"}></line>
          <line className={line} x1={"20"} y1={"60"} x2={"60"} y2={"60"}></line>
        </svg>
        <svg
          className={burger}
          style={{ display: showMenu ? "block" : "none" }}
          widht={"30"}
          height={"30"}
          viewBox={"0 0 80 80"}
        >
          <line className={line} x1={"20"} y1={"20"} x2={"60"} y2={"60"}></line>
          <line className={line} x1={"60"} y1={"20"} x2={"20"} y2={"60"}></line>
        </svg>
      </button>
      {/* Nav items desktop */}
      <ul className={desktop}>
        {navItems.map((link) => {
          if (link === "") {
            return (
              <li key={link}>
                <Link
                  to={getLocalizedRoute("/" + link.toLocaleLowerCase(), lng)}
                >
                  <StaticImage
                    className={img}
                    alt="home"
                    src="../images/icon.png"
                    width={32}
                    loading="eager"
                  />
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

      {/* Nav items mobile */}
      <ul className={mobile} style={{ display: showMenu ? "block" : "none" }}>
        {navItems.map((link) => {
          if (link === "") {
            return (
              <li key={link}>
                <Link
                  to={getLocalizedRoute("/" + link.toLocaleLowerCase(), lng)}
                >
                  <StaticImage
                    className={img}
                    alt="home"
                    src="../images/icon.png"
                    width={28}
                    loading="eager"
                  />
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
