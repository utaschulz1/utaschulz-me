import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Trans } from "gatsby-plugin-react-i18next";

import {
  title,
  heroContentWrapper,
  heroImage,
  heroContent,
  heroButtons,
  heroButton1,
} from "./hero.module.css";

const Hero = (params) => {
  return (
    <div>
      <h1 className={title}>
        <Trans>
          How Documentation Portal UX Factors Impact Content Creation
        </Trans>
      </h1>
      <div className={heroContentWrapper}>
        <div className={heroContent}>
          <p>
            <Trans>
              Which UX factors are relevant for documentation Portals? What is
              the impact of these UX factors on modularization and
              classification of content in a CCMS?
            </Trans>
          </p>
          <div className={heroButtons}>
            <a
              className={heroButton1}
              href={params.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Trans>Questionnaire for software producers</Trans>
            </a>
          </div>
        </div>
        <div className={heroImage}>
          <StaticImage
            alt="UX factors of documentation portals for content structure"
            src="../images/thesis-model.png"
            placeholder="blurred"
            loading="eager"
            width={700}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
