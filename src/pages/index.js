import * as React from "react";
import { graphql } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";

import Layout from "../components/layout";
import Hero from "../components/hero";
import Project from "../components/project";
import About from "../components/about";
import Content from "../components/content";
import Uta from "../components/uta";

const IndexPage = () => {
  const { language } = useI18next();

  let urlProducers =
    language === "en"
      ? "https://forms.clickup.com/24337696/f/q6q90-3800/3FPLWDGZVYAAN1V5BL"
      : "https://forms.clickup.com/24337696/f/q6q90-3840/E51UNWBGNAFLVSVME6";

  let urlUsers =
    language === "en"
      ? "https://forms.clickup.com/24337696/f/q6q90-3860/BLTT0VIO6FACJWBGKW"
      : "https://forms.clickup.com/24337696/f/q6q90-3880/2ULJB8C3DE2CO5MODJ";
  return (
    <Layout>
      <Hero url={urlProducers} />
      <Project url={urlProducers} />
      <About url={urlProducers} />
      <Content url={urlUsers} />
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
