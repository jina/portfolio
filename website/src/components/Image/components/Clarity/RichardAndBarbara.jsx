import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ClarityRichardAndBarbara = ({ props }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "clarity-richard-and-barbara.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid_noBase64
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

ClarityRichardAndBarbara.propTypes = {
  ...Img.propTypes,
};

export { ClarityRichardAndBarbara };
