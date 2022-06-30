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

import BuyButton from "../utils/buyButton";

const getLocalizedRoute = require("../i18n/getLocalizedRoute");

const Hero = () => {
  const { language } = useI18next();
  const lng = language;

  return (
    <div className={heroWrapper}>
      <div className={heroContentWrapper}>
        <div className={heroContent}>
          <h1>
            <Trans>Bikepacking von Moskau zum Nordkap</Trans>
          </h1>
          <p>
            <Trans>
              Mit Fahrrad und Zelt haben wir uns von Moskau zum Nordkap
              aufgemacht: 4000 km Fahrradurlaub durch Russland, Karelien,
              Finnland und Lappland nach Norwegen. Eine Reise, die ihr in
              unserem Buch miterleben könnt.
            </Trans>
          </p>
          <div className={heroButtons}>
            <BuyButton />
            {/* <Link className={heroButton2} to={getLocalizedRoute("/book", lng)}> */}
            <Link className={heroButton2} to={getLocalizedRoute("/buch/", lng)}>
              <Trans>Buch lesen</Trans>
            </Link>
          </div>
          <div className={heroReview}>
            <div className={quotes} style={{ marginBottom: "-70px" }}>
              “
            </div>
            <p style={{ lineHeight: "25px" }}>
              <Trans>
                Da haben Sie ja eine spannende Reise erlebt, die von Ihnen
                eindrucksvoll beschriebenen Bilder machen Lust zum Reisen –
                vielen Dank für diese angenehme Abwechslung!
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
              alt="book-cover"
              src="../images/cover-de.jpg"
              placeholder="blurred"
              loading="eager"
              width={600}
            />
          )}
          {language === "en" && (
            <StaticImage
              alt="book-cover"
              src="../images/cover-en.jpg"
              placeholder="blurred"
              loading="eager"
              width={600}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
