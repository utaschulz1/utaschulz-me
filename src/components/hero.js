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
            <Trans>Radfernwege Nord-Süd durch Europa</Trans>
          </h1>
          <p>
            <Trans>
              Die 7 beliebtesten Fahrradrouten von Norden nach Süden durch
              Europa. Willst du Radwandern von Kap zu Kap, durch Hauptstädte,
              über Berg und Land, von der Nordsee bis zum Mittelmeer, Pilgern
              auf dem Jakobsweg, nach Trondheim oder Rom? Hier findest du die
              Routen und nützliche Tipps.
            </Trans>
          </p>
          <div className={heroButtons}>
            <SevenRoutesDownload
              text="GPX herunterladen"
              color="white"
              backgroundColor="#ee6556"
              padding="7px"
              width="90%"
            />
            <Link
              className={heroButton2}
              to={getLocalizedRoute(
                "/blog/7-radwanderwege-in-europa-nord-sued/",
                lng
              )}
            >
              <Trans>Weiterlesen</Trans>
            </Link>
          </div>
          <div className={heroReview}>
            <div className={quotes} style={{ marginBottom: "-70px" }}>
              “
            </div>
            <p style={{ lineHeight: "25px" }}>
              <Trans>
                Mir ist es eingefallen, während ich Fahrrad fuhr.
                <br />
                (Albert Einstein)
              </Trans>
            </p>
            <div className={quotes} style={{ marginTop: "-30px" }}>
              ”
            </div>
          </div>
        </div>
        <div className={heroImage}>
          {language === "de" && (
            <StaticImage
              alt="7 Routen von Norden nach Süden durch Europa"
              src="../images/hero-7-routen-DE.jpg"
              placeholder="blurred"
              loading="eager"
              width={400}
            />
          )}
          {language === "en" && (
            <StaticImage
              alt="7 routes from north to south through Europe"
              src="../images/hero-7-routes-EN.jpg"
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
