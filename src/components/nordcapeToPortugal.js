import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  Trans,
  useTranslation,
  Link,
  useI18next,
} from "gatsby-plugin-react-i18next";

import {
  nordcapeToPortugalWrapper,
  nordcapeToPortugalImage,
  nordcapeToPortugalContentWrapper,
  nordcapeToPortugalButtons,
  nordcapeToPortugalButton1,
} from "./nordcapeToPortugal.module.css";

const getLocalizedRoute = require("../i18n/getLocalizedRoute");

const NordcapeToPortugal = () => {
  const { t } = useTranslation();
  const { language } = useI18next();
  const lng = language;

  return (
    <div className={nordcapeToPortugalWrapper}>
      <div className={nordcapeToPortugalImage}>
        <StaticImage
          alt={t("mögliche Route für 2023")}
          src="../images/route2023.png"
        />
      </div>
      <div
        className={nordcapeToPortugalContentWrapper}
        id={t("NordcapeToPortugal")}
      >
        <h2>
          <Trans>
            Bikepacking vom Nordkap zum Cabo de São Vincente in Portugal
          </Trans>
        </h2>
        <p>
          <Trans>
            Einmal auf dem Fahrrad von Norden nach Süden durch ganz Europa – vom
            nördlichsten Punkt auf dem europäischen Festland, wo die letzte
            Reise geendet hat, bis zum südwestlichsten Punkt des Kontinents: das
            Cabo de São Vincente in Portugal. Und ein paar Kilometer zurück in
            Richtung Norden, nach Hause. Das haben wir uns für 2023 vorgenommen.
          </Trans>
        </p>
        <p>
          <Trans>Losgehen soll es zum Mittsommer.</Trans>
        </p>
        <p>
          <Trans>
            Und wenn man sich die beiden Routen so anschaut, ist eigentlich
            klar, dass das Projekt dann nicht zu Ende ist
          </Trans>{" "}
          &#128578;
        </p>
        <div className={nordcapeToPortugalButtons}>
          {/* Deze link gaat naar een blog of page voor reisplan */}

          <Link
            className={nordcapeToPortugalButton1}
            to={getLocalizedRoute(
              "/blog/7-radwanderwege-in-europa-nord-sued/",
              lng
            )}
          >
            <Trans>Reiseplanung Teil 1</Trans>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NordcapeToPortugal;
