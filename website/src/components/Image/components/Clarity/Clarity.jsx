import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Clarity = ({ props }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "clarity-logo.png" }) {
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
      alt="Clarity logo"
    />
  );
};

Clarity.propTypes = {
  ...Img.propTypes,
};

export { Clarity };
