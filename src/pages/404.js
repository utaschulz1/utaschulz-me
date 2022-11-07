import * as React from "react";
import { graphql } from "gatsby";
import { Link, Trans } from "gatsby-plugin-react-i18next";
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
          <Trans>die Seite, die du gesucht hast, gibt es nicht.</Trans>
        </p>
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
