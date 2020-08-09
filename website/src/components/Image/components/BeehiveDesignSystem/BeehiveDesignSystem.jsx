import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const BeehiveDesignSystem = ({ props }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "amazon-honeycode-logo.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img
      {...props}
      fluid={data.placeholderImage.childImageSharp.fluid}
      alt="Amazon Honeycode logo"
    />
  );
};

BeehiveDesignSystem.propTypes = {
  ...Img.propTypes,
};

export { BeehiveDesignSystem };
