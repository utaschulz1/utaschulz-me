import * as React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next";
import Layout from "../components/layout";

// styles
const pageStyles = {
  color: "white",
  padding: "50px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  backgroundColor: "#8195be",
  textAlign: "center",
};
const headingStyles = {
  margin: "50px auto",
};

const paragraphStyles = {
  marginBottom: 48,
};

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div style={pageStyles}>
        <title>
          <Trans>Seite nicht gefunden</Trans>
        </title>
        <h1 style={headingStyles}>
          <Trans>Seite nicht gefunden</Trans>
        </h1>
        <p style={paragraphStyles}>
          <Trans>Sorry</Trans>{" "}
          <span role="img" aria-label="Pensive emoji">
            😔,
          </span>{" "}
          <Trans>
            die Route hört hier auf, die Seite, die du gesucht hast, gibt es
            nicht.
          </Trans>
        </p>
        <StaticImage
          alt={t(
            "Reisefahrrad steht vor einem überflutetem Weg, wo es nicht mehr weiter geht."
          )}
          src="../images/dead-end.jpg"
          height={300}
        />
        <p />
        <Link to="/">
          <Trans>Zurück zur Homepage</Trans>
        </Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const query = graphql`
  query ($language: String) {
    locales: allLocale(
      filter: {
        ns: { in: ["404", "nav", "subs"] }
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
