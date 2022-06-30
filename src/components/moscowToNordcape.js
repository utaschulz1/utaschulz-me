import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  Trans,
  useTranslation,
  // Link,
  // useI18next,
} from "gatsby-plugin-react-i18next";

import {
  moscowToNordcapeWrapper,
  moscowToNordcapeImage,
  moscowToNordcapeContentWrapper,
  moscowToNordcapeButtons,
  // moscowToNordcapeButton1,
} from "./moscowToNordcape.module.css";
import RouteDownload from "../utils/routeDownload";

// const getLocalizedRoute = require("../i18n/getLocalizedRoute");

const MoscowToNordcape = () => {
  const { t } = useTranslation();
  // const { language } = useI18next();
  // const lng = language;

  return (
    <div className={moscowToNordcapeWrapper}>
      <div
        className={moscowToNordcapeContentWrapper}
        id={t("moscowToNordcape")}
      >
        <h2>
          <Trans>Von Moskau zum Nordkap auf dem Fahrrad</Trans>
        </h2>
        {/* TODO: faq page. En dan laatste zin invoegen */}

        {/*  Fragen zu Einzelheiten
            der Fahrradtour haben wir im{" "}
            <Link to={getLocalizedRoute("/", lng)}>FAQ</Link> beantwortet. */}
        <p>
          <Trans>
            Mit Fahrrad und Zelt sind wir fernab vom Tourismus von Russland nach
            Karelien, durch Finnland und über den Polarkreis geradelt. 3 Länder
            trennten uns in Moskau vom nördlichsten Punkt des europäischen
            Kontinents. 60 Tage lang haben wir statt Alltag Abenteuer erlebt und
            statt im Hamsterrad in die Pedalen getreten. Der Weg nahm uns mit
            auf 4000 Kilometer frischen Wind um die Nase, voller interessanter
            Begegnungen und Sehnsucht nach Barentssee.
          </Trans>
        </p>
        <p>
          <Trans>
            Hier findet ihr die Fahrradroute und könnt euch Fotos anschauen.
          </Trans>
        </p>
        <div className={moscowToNordcapeButtons}>
          {/* <Link
            className={moscowToNordcapeButton1}
            to={getLocalizedRoute("/", lng)}
          >
            <Trans>Galerie</Trans>
          </Link> */}
          <RouteDownload margin="0px" />
        </div>
      </div>
      <div className={moscowToNordcapeImage}>
        <StaticImage
          alt={t("Fahrradroute 2018")}
          src="../images/route2018.png"
        />
      </div>
    </div>
  );
};

export default MoscowToNordcape;
