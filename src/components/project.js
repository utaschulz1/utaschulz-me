import * as React from "react";
import { Trans, Link, useI18next } from "gatsby-plugin-react-i18next";
import {
  projectWrapper,
  projectButtons,
  projectButton1,
} from "./project.module.css";
import Subscribe from "../utils/subscribe";

const getLocalizedRoute = require("../i18n/getLocalizedRoute");

const Project = () => {
  // const { t } = useTranslation();
  const { language } = useI18next();
  const lng = language;
  return (
    <div className={projectWrapper}>
      <h2>
        <Trans>Content for Documentation Portals</Trans>
      </h2>
      <p>
        <Trans>
          UX research for software applications is nothing new to us. Also for
          content modeling, we research our users. Technical documentation is
          designed for a specific user-product context and modeled for this
          purpose. Documentation portals, in contrast, can be less targeted and
          provide information for several user groups and several product
          groups.
        </Trans>
      </p>

      <p>
        <Trans>
          CCMS-produced technical documentation usually has an elevated degree
          of modularization. In many documentation portals, you still find
          monolithic documents for download. Providing one or more user groups
          with modular information about one or more products and one or more
          use cases presents a challenge to the documentation software UI and to
          the content model.
        </Trans>
      </p>

      <p>
        <Trans>
          How UX factors in documentation portals impact modularization and
          classification of content in CCMS is therefore the topic of my
          research.
        </Trans>
      </p>
      <p>
        <Trans>
          Below you will find questionnaires that help explore the relationships
          between documentation portal software, users, content, content
          producers and software producers regarding UX factors and content
          models.
        </Trans>
      </p>
      <p>
        <Trans>
          So, if you provide content in a documentation portal, produce
          documentation portal software or CCMSs or have used documentation
          portals then this is your call. Find your questionnaire below and fill
          it in!
        </Trans>
      </p>
      <div className={projectButtons}>
        <Link className={projectButton1} to={getLocalizedRoute("/", lng)}>
          Questionnaire for software producers
        </Link>
      </div>
    </div>
  );
};

export default Project;
