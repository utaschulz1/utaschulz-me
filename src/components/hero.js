import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Trans, Link, useI18next } from "gatsby-plugin-react-i18next";

import {
  heroWrapper,
  heroContentWrapper,
  heroImage,
  heroContent,
  heroReview,
  quotes,
  heroButtons,
  heroButton2,
} from "./hero.module.css";


import SevenRoutesDownload from "../utils/sevenRoutesDownload.js";

const getLocalizedRoute = require("../i18n/getLocalizedRoute");

const Hero = () => {
  const { language } = useI18next();
  const lng = language;

  return (
    <div className={heroWrapper}>
      <div className={heroContentWrapper}>
        <div className={heroContent}>
          <h1>
            <Trans>Wie UX-Faktoren in CDPs die Content-Erstellung beeinflussen</Trans>
          </h1>
          <p>
            <Trans>
            Welche UX-Faktoren sind für Conten Delivery Portale relevant? Welchen Einfluss haben diese UX-Faktoren auf die Modularisierung und Klassifizierung von Content im CCMS?
            </Trans>
          </p>
          <div className={heroButtons}>
            { <SevenRoutesDownload
              text="Questionnaire for software producers" //Link to https://forms.clickup.com/24337696/f/q6q90-3800/3FPLWDGZVYAAN1V5BL
              color="white"
              backgroundColor="#ee6556"
              padding="7px"
              width="90%"
            /> }
            <Link
              className={heroButton2}
              to={getLocalizedRoute(
                "/blog/7-radwanderwege-in-europa-nord-sued/",//to page Hauptkonzepte/gatsmain-concepts
                lng
              )}
            >
              <Trans>Concepts</Trans>
            </Link>
          </div>
          <div className={heroReview}>
            {/* <div className={quotes} style={{ marginBottom: "-70px" }}>
              “
            </div>
            {/* <p style={{ lineHeight: "25px" }}>
              <Trans>
                Mir ist es eingefallen, während ich Fahrrad fuhr.
                <br />
                (Albert Einstein)
              </Trans>
            </p> */}
            {/*<div className={quotes} style={{ marginTop: "-30px" }}>
              ”
          </div> */}
          </div>
        </div>
        <div className={heroImage}>
          {language === "de" && (
            <StaticImage
              alt="UX factors of documentation portals for content structure"
              src="../images/thesis-model.png"
              placeholder="blurred"
              loading="eager"
              width={400}
            />
          )}
          {language === "en" && (
            <StaticImage
              alt="UX factors of documentation portals for content structure"
              src="../images/thesis-model.png"
              placeholder="blurred"
              loading="eager"
              width={400}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
