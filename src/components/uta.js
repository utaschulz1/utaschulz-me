import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Trans } from "gatsby-plugin-react-i18next";
import SocialMediaLinks from "../utils/socialMediaLinks";
import { container, wrapper, img } from "./uta.module.css";

const Uta = (params) => {
  return (
    <div className={wrapper}>
      <div className={container}>
        <StaticImage
          className={img}
          alt="Uta Schulz"
          src="../images/authors/uta.jpg"
          placeholder="blurred"
          loading="lazy"
          width={250}
        />
        <p>
          <Trans>
            Hi, I am Uta, born in Germany, living in Portugal. I am a TCLoc
            student at the University of Strasbourg. This is a master's program
            for technical documentation and localization. Since January 2021, I
            am also a TEKOM-certified Technical Communicator.
          </Trans>
        </p>
        <p>
          <Trans>
            My background is in mechanical engineering (technician for
            mechanical engineering, specialization design). For the past 15
            years, I have been working as a freelance translator of technical
            documentation and patents in mechanical engineering for English and
            Dutch into German.
          </Trans>
        </p>
        <p>
          <Trans>
            Recently, I have been looking for new challenges in the ubiquitous
            multilingualism I live in. I started the TCLoc master's program and
            fell in love with content strategy and UX writing, which lead to
            this research project!
          </Trans>
        </p>
        <p>
          <Trans>
            I love to measure, to analyze, to set up workflows, to automate and
            writing to tell a story. Connect on LinkedIn!
          </Trans>
        </p>
        <SocialMediaLinks />
      </div>
    </div>
  );
};

export default Uta;
