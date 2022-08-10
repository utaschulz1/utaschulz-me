import * as React from "react";
import { Trans, Link, useI18next } from "gatsby-plugin-react-i18next";
import {
  projectWrapper,
  projectButtons,
  projectButton1,
  // projectButton2,
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
        <Trans>Bikepacking durch ganz Europa</Trans>
      </h2>
      <p>
        <Trans>
          Fahrradfahren macht glücklich, schont im Stadtverkehr die Nerven und
          sorgt für die nötige Bewegung im Alltag. Auf Langstrecken trägt dich
          das Fahrrad zudem in idealer Reisegeschwindigkeit durchs Land: schnell
          genug um die Welt zu umrunden und dennoch mit Gemach für eine
          Begegnung, ein Gespräch.
        </Trans>
      </p>
      <p>
        <Trans>Wir lieben Fahrradfahren.</Trans>
      </p>
      {language === "de" && (
        <p>
          Deshalb haben wir uns mit <strong>Fahrrad und Zelt</strong> von Moskau
          zum Nordkap aufgemacht: 4000 km durch Russland, Karelien, Finnland und
          Lappland nach Norwegen. Eine spannende Fahrradtour, die ihr in unserem{" "}
          <Link to={getLocalizedRoute("/buch/", lng)}>Buch</Link> miterleben
          könnt.
        </p>
      )}
      {language === "en" && (
        <p>
          Thus we set off <strong>on bikes with our tent</strong> from Moscow to
          the North Cape: a 4000 km cycling holiday through Russia, Karelia,
          Finland and Lapland to Norway, a trip you can go on in our{" "}
          <Link to={getLocalizedRoute("/buch/", lng)}>book</Link>.
        </p>
      )}
      <p>
        <Trans>
          <strong>2023 geht die Reise weiter</strong>: Einmal{" "}
          <strong>von Nord nach Süd durch Europa</strong>, vom Nordkap zum Cabo
          de São Vincente.
        </Trans>
      </p>
      <p>
        <Trans>
          Bis dahin erwartet uns eine aufregende Reiseplanung, die wir mit euch
          teilen möchten.
        </Trans>
      </p>
      <p>
        <Trans>
          Deshalb haben wir WeOnBikes in Leben gerufen. Auf unserer Website
          findest du nützliche Informationen zum Thema{" "}
          <strong>Fahrradleben und Radwandern</strong>. Lass dich inspirieren
          und mach mit!
        </Trans>
      </p>
      <div className={projectButtons}>
        <div className={projectButton1}>
          <Subscribe margin="0px" />
        </div>
        {/* TODO: dit wordt de mission link */}
        {/* <Link className={projectButton2} to={getLocalizedRoute("/", lng)}>
          <Trans>Mission</Trans>
        </Link> */}
      </div>
    </div>
  );
};

export default Project;
