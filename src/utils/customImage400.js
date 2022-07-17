import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const CustomImage400 = ({ name, alt }) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            gatsbyImageData(
              blurredOptions: { width: 100 }
              height: 400
              quality: 70
              placeholder: BLURRED
              transformOptions: { cropFocus: CENTER, fit: CONTAIN }
            )
            fixed {
              originalName
            }
          }
        }
      }
    }
  `);

  const image = allImageSharp.edges.find(
    (edge) => edge.node.fixed.originalName === name
  );

  if (!image) {
    return null;
  }
  return (
    <GatsbyImage
      image={image.node.gatsbyImageData}
      alt={alt ?? image.node.fixed.originalName.split(".")[0]}
      loading="eager"
    />
  );
};

export default CustomImage400;
