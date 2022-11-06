import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import {
  aboutWrapper,
  aboutImage,
  aboutContent,
  aboutContentWrapper,
  icons,
  followUs,
} from "./about.module.css";
import SocialMediaLinks from "../utils/socialMediaLinks";

const About = () => {
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
            Findability and context are important quality features of content. Findability is related to UX factors like ease of use, intuitiveness, efficiency. The right context of information is related to  UX factors like relevancy, helpfulness, completeness, safety. 
            </Trans>
          </p>
          <p>
            <Trans>
            In a documentation portal, how do we fulfil these user needs? Are they built into the content model of the CCMS? Is it a combination of technologies that get's it right?
            </Trans>
          </p>
          <p>
            <Trans>
            For a user-friendly documentation portal, to what extend does the content model need to take the documentation portal output into consideration?
            </Trans>
          </p>
          <div className={followUs}>
            <p>
              <Trans>Bleibt dran!</Trans>
            </p>
            <div className={icons}>
              <SocialMediaLinks />
            </div>
          </div>
        </div>
        <StaticImage
          className={aboutImage}
          alt={t(
            "Uta und Menno fahren im Sonnenschein auf einem steinigen Pfad an der Küste der Barentssee auf dem Fahrrad."
          )}
          src="../images/about.png"
        />
      </div>
    </div>
  );
};

export default About;
