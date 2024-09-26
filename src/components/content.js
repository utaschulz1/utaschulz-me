import * as React from "react";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import {
  projectWrapper,
  projectButtons,
  projectButton1,
} from "./project.module.css";
import { StaticImage } from "gatsby-plugin-image";

const Content = (params) => {
  const { t } = useTranslation();

  return (
    <div className={projectWrapper}>
      <h2>
        <Trans>For documentation portal users</Trans>
      </h2>
      <p>
        <Trans>
          There are many UX factors. Not all of them are relevant for
          documentation portals. My research is about which of the UX factors
          relevant for documentation portals would translate into requirements
          for the software and which would translate into requirements for the
          content, specifically the modularization and classification of
          content. You as a user of documentation portals can help my research
          by telling me which UX factors matter most to you.
        </Trans>
      </p>
      <StaticImage
        src="../images/thesis-model-CDP-users.jpg"
        placeholder="blurred"
        loading="lazy"
        width={600}
        alt={t("thesis-model-software-producers.")}
      />
      <div className={projectButtons}>
        <a
          className={projectButton1}
          href={params.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Trans>Questionnaire for users</Trans>
        </a>
      </div>
    </div>
  );
};

export default Content;
