import * as React from "react";
import { useI18next } from "gatsby-plugin-react-i18next";
import { wrapper, footer, top, bottom, mailto, rss } from "./footer.module.css";
import SocialMediaLinks from "../utils/socialMediaLinks";
import Subscribe from "../utils/subscribe";

const Footer = () => {
  const { language } = useI18next();

  return (
    <footer className={wrapper}>
      <div className={footer}>
        <div className={top}>
          <p>&copy; weonbikes.com</p>
          <a href="mailto:info@weonbikes.com" className={mailto}>
            info@weonbikes.com
          </a>
          <Subscribe />
        </div>
        <hr />
        <div className={bottom}>
          <div></div>
          {/* <a
            className={credit}
            href="https://mennovanbalen.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            site: Menno van Balen
          </a> */}
          {language === "de" && (
            <a className={rss} href="/rss.xml" hrefLang={language}>
              RSS
            </a>
          )}
          {language === "en" && (
            <a className={rss} href="/en/rss.xml" hrefLang={language}>
              RSS
            </a>
          )}
          <SocialMediaLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
