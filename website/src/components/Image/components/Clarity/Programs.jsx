import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ClarityPrograms = ({ props }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "clarity-programs.png" }) {
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
      alt="Clarity programs"
    />
  );
};

ClarityPrograms.propTypes = {
  ...Img.propTypes,
};

export { ClarityPrograms };
