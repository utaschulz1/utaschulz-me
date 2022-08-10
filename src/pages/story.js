import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import Seo from "../components/seo";
import "../styles/mission.css";

const Story = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Seo
        position={2}
        title={t("WeOnBikes | Story - Warum wir Radfahren lieben")}
        description={t(
          "Mit WeOnBikes - Life by bicycle möchten wir Radfahren als Reisemittel und Verkehrsmittel im Alltag voranbringen. Denn Fahrradfahren macht glücklich, spart Zeit und Geld und schont die Umwelt."
        )}
        release_date="2022-03-15"
        modified_date="2022-03-22"
      />
      <div className="mission-page-wrapper">
        <h1 className="mission-h1">
          <Trans>Story</Trans>
        </h1>
        <h2 className="mission-h2">
          <Trans>Warum wir Radfahren lieben:</Trans>
        </h2>
        <div>
          <ul className="list-1">
            <li>
              <Trans>Radfahren macht glücklich</Trans>
            </li>
            <li>
              <Trans>Radfahren spart Zeit</Trans>
            </li>
            <li>
              <Trans>Radfahren spart Geld</Trans>
            </li>
            <li>
              <Trans>Radfahren schont die Umwelt</Trans>
            </li>
            <li>
              <Trans>Radfahren ist gesund</Trans>
            </li>
            <li>
              <Trans>Fahrrad können wir zusammen fahren</Trans>
            </li>
          </ul>
        </div>

        <h2 className="mission-h2">
          <Trans>Was du auf weonbikes.com findest</Trans>
        </h2>
        <div className="mission-content">
          <p>
            <Trans>
              Alle Infos, die du für einen interessanten, entspannten und
              sicheren Fahrradurlaub in Europa brauchst.
            </Trans>
          </p>
        </div>
        <h2 className="mission-h2">
          <Trans>Wie du das bekommst</Trans>
        </h2>
        <p className="mission-h2">
          <Trans>
            Abonniere unseren Newsletter! Wir werden regelmäßig zu verschiedenen
            Themen posten:
          </Trans>
        </p>
        <ul className="list-2">
          <li>
            <Trans>
              Radrouten - Fernradwege und kürzere Fahrradtouren, GPX-Dateien zum
              Herunterladen
            </Trans>
          </li>
          <li>
            <Trans>Reiseplanung von Radreisen und Fahrradtouren</Trans>
          </li>
          <li>
            <Trans>Packlisten</Trans>
          </li>
          <li>
            <Trans>Training - ist das wichtig vor der Radreise?</Trans>
          </li>
          <li>
            <Trans>Bikepacking Cuisine</Trans>
          </li>
          <li>
            <Trans>Fahrradreparatur und Werkzeug unterwegs</Trans>
          </li>
          <li>
            <Trans>
              Radtypen wie Mountainbikes, Gravel-Bikes, Trekking-Bikes und
              Fahrradtechnik, Geometrie
            </Trans>
          </li>
          <li>
            <Trans>
              Fahrradtaschen - Bikepacking versus klassisches Radwandern
            </Trans>
          </li>
          <li>
            <Trans>Buchtipps</Trans>
          </li>
          <li>
            <Trans>
              Fahrradleben - Fahrrad als Lifestyle, Inspiration und
              Stimmungs-Booster
            </Trans>
          </li>
          <li>
            <Trans>Fahrradwege in verschiedenen Städten</Trans>
          </li>
          <li>
            <Trans>
              Fahrrad-Infrastruktur und Stadtentwicklung für aktive Mobilität
            </Trans>
          </li>
        </ul>

        <h2 className="mission-h2">
          <Trans>Unterstütze uns!</Trans>
        </h2>
        <p className="mission-h2">
          <Trans>Du kannst uns auf verschiedene Arten unterstützen:</Trans>
        </p>

        <ul className="list-3">
          <li>
            <Trans>Fahre Fahrrad!</Trans>
          </li>
          <li>
            <Trans>Erzähle anderen von unserer Website</Trans>
          </li>
          <li>
            <Trans>
              Erzähle uns deine Geschichte oder mach uns Vorschläge zu
              interessanten Themen
            </Trans>
          </li>
          <li>
            <Trans>Kaufe unser Buch</Trans> &quot;
            <Trans>Von Moskau zum Nordkap auf dem Fahrrad</Trans>&quot;{" "}
            <Trans>oder organisiere eine Lesung</Trans>
          </li>
          <li>
            <Trans>
              Schau dir unsere Downloads an und inspiriere andere zu einem Leben
              mit mehr Fahrrad
            </Trans>
          </li>
          {/* <li>
            <Trans>
              Geh auf unsere Fundraising-Page und spende für unser
              Radwander-Projekt &quot;Vom Nordkap zum Capo de São Vincente auf
              dem Fahrrad&quot;
            </Trans>
          </li> */}
        </ul>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($language: String) {
    locales: allLocale(
      filter: {
        ns: { in: ["story", "nav", "subs"] }
        language: { eq: $language }
      }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export default Story;
