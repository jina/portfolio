import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ClarityTatianaAndBrad = ({ props }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "clarity-tatiana-and-brad.png" }
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
      alt="Tatiana Mac and Brad Frost on stage at Clarity"
    />
  );
};

ClarityTatianaAndBrad.propTypes = {
  ...Img.propTypes,
};

export { ClarityTatianaAndBrad };
