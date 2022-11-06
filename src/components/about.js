import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

import {
  aboutWrapper,
  aboutImage,
  aboutContent,
  aboutContentWrapper,
} from "./about.module.css";
import { projectButtons, projectButton1 } from "./project.module.css";

const About = (params) => {
  const { t } = useTranslation();

  return (
    <div className={aboutWrapper}>
      <h2>
        <Trans>Wer hier reist und schreibt</Trans>
      </h2>
      <div className={aboutContentWrapper}>
        <div className={aboutContent}>
          <p>
            <Trans>
            For Documentation Portal or CCMS Software Producers
            </Trans>
          </p>
          <p>
            <Trans>
              In a documentation portal, how do we fulfil these user needs? Are
              they built into the content model of the CCMS? Is it a combination
              of technologies that get's it right?
            </Trans>
          </p>
          <p>
            <Trans>
              For a user-friendly documentation portal, to what extend does the
              content model need to take the documentation portal output into
              consideration?
            </Trans>
          </p>
        </div>
        <StaticImage
          className={aboutImage}
          src="../images/thesis-model-software-producers.jpg"
          placeholder="blurred"
          loading="lazy"
          width={600}
          alt={t("thesis-model-software-producers.")}
        />
      </div>
      <div className={projectButtons}>
        <a
          className={projectButton1}
          href={params.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Trans>Questionnaire for software producers</Trans>
        </a>
      </div>
    </div>
  );
};

export default About;
