import * as React from "react";
import { graphql } from "gatsby";
// import { useI18next } from "gatsby-plugin-react-i18next";

import Layout from "../components/layout";
import Uta from "../components/uta";
import Seo from "../components/seo";

const IndexPage = () => {
  // const { language } = useI18next();
  return (
    <Layout>
      <Seo />
      <Uta />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query ($language: String) {
    locales: allLocale(
      filter: { ns: { in: ["home", "nav"] }, language: { eq: $language } }
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
