import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import ConceptsContent from "../components/conceptsContent";

const Concepts = () => {
  return (
    <Layout>
      <Seo />
      <ConceptsContent />
    </Layout>
  );
};

export default Concepts;

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
