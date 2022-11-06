// i18next-extract-mark-ns-start home-page

import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Hero from "../components/hero";
import Project from "../components/project";
import About from "../components/about";
import NordcapeToPortugal from "../components/nordcapeToPortugal";
import MoscowToNordcape from "../components/moscowToNordcape";
import TakeAction from "../components/takeAction";

const IndexPage = () => {
  return (
    <Layout>
      {/* <Seo /> */}
      <Hero />
      <Project />
      {/* <About /> */}
      {/* <NordcapeToPortugal /> */}
      {/* <MoscowToNordcape /> */}
      {/* <TakeAction /> */}
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query ($language: String) {
    locales: allLocale(
      filter: {
        ns: { in: ["home", "nav", "subs"] }
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
