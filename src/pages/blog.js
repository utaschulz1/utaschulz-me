import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { useTranslation, Link, Trans } from "gatsby-plugin-react-i18next";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "../styles/blog.css";
import Seo from "../components/seo";
const getLocalizedRoute = require("../i18n/getLocalizedRoute");

const title =
  "WeOnBikes | Blog, Erfahrungen zu Radwandern, Radrouten und Fahrradreiseplanung";
const description =
  "Blog zum Radwandern auf Fernradwegen und Fahrradtouren über Stadt und Land, Fahrradurlaub mit Reiserad: praktische Tipps zu Routen und Reiseplanung, Bikepacking, Trekking-Bikes und Reparatur";

const BlogPage = ({ data }) => {
  const language = data.locales.edges[0].node.language;
  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const { t } = useTranslation();

  const lastDate = data.allMdx.nodes[0].frontmatter.date;

  return (
    <Layout>
      <Seo
        position={2}
        title={t(title)}
        description={t(description)}
        modified_date={lastDate}
      />
      <div className="blog-container">
        {data.allMdx.nodes.map((node, i) => (
          <div className="article-wrapper" key={i}>
            <article className="blogpost" key={node.id}>
              <h2 className="post-title">
                <Link
                  to={getLocalizedRoute(
                    `/blog/${node.frontmatter.path}/`,
                    language
                  )}
                >
                  {node.frontmatter.title_post}
                </Link>
              </h2>
              <p className="post-date">
                {new Date(node.frontmatter.date).toLocaleDateString(
                  language,
                  dateOptions
                )}
              </p>
              <p className="description">{node.frontmatter.description}</p>
              <Link
                className="to-post"
                to={getLocalizedRoute(
                  `/blog/${node.frontmatter.path}/`,
                  language
                )}
              >
                <Trans>Weiterlesen</Trans>
              </Link>
            </article>
            <GatsbyImage
              image={getImage(node.frontmatter.hero_image)}
              alt={node.frontmatter.hero_image_alt}
              className={"img-small"}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($language: String) {
    locales: allLocale(
      filter: {
        ns: { in: ["blog", "nav", "subs"] }
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
    allMdx(
      filter: { frontmatter: { lang: { eq: $language } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          date
          lang
          path
          title_post
          description
          hero_image_alt
          hero_image {
            childImageSharp {
              gatsbyImageData(
                width: 800
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
          }
        }
        id
      }
    }
  }
`;

export default BlogPage;
