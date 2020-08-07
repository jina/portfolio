import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Screenshot } from '../../../Screenshot';

const ClarityWebsite = ({ props }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "clarity-website.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  return (
    <Screenshot>
      <Img
        {...props}
        fluid={data.placeholderImage.childImageSharp.fluid}
        clarity="Clarity 2018"
      />
    </Screenshot>
  );
};

ClarityWebsite.propTypes = {
  ...Img.propTypes,
};

export { ClarityWebsite };
