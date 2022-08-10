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
              Wir, das sind Uta aus Deutschland und Menno aus den Niederlanden.
            </Trans>
          </p>
          <p>
            <Trans>
              Wir wohnen in Portugal, ganz in der Nähe von Lissabon und fahren
              bei jeder Gelegenheit Fahrrad. Ein Auto besitzen wir gar nicht.
            </Trans>
          </p>
          <p>
            <Trans>
              Als technische Übersetzerin und als Software Developer arbeiten
              wir freiberuflich zu Hause.
            </Trans>
          </p>
          <p>
            <Trans>
              Alle paar Jahre steht uns der Sinn nach einer langen Reise, einem
              richtigen Abenteuer eben. Raus aus dem Trott und rauf aufs Rad.
            </Trans>
          </p>
          <p>
            <Trans>
              WeOnBikes.com – Life by bicycle – ist unser neues Projekt, mit dem
              wir uns auf die nächste{" "}
              <strong>Fahrradtour von Nord nach Süd</strong> durch Europa
              vorbereiten. Wir möchten die Erfahrungen, die wir dabei machen,
              mit allen teilen, die sich für Bikepacking interessieren und
              wissen möchten, wie man eine solche Reise angeht.
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
