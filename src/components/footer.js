import * as React from "react";
import { wrapper, footer, top, bottom, mailto } from "./footer.module.css";
import SocialMediaLinks from "../utils/socialMediaLinks";

const Footer = () => {
  return (
    <footer className={wrapper}>
      <div className={footer}>
        <div className={top}>
          <p>&copy;utaschulz.me</p>
          <a href="mailto:info@utaschulz.me" className={mailto}>
            info@utaschulz.me
          </a>
          <SocialMediaLinks />
        </div>
        <hr />
        <div className={bottom}>
          <div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
