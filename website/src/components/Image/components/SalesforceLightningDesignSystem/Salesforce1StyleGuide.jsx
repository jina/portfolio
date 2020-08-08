import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Screenshot } from '../../../Screenshot';

const Salesforce1StyleGuide = ({ props }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "salesforce1-styleguide.png" }
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
    <Screenshot>
      <Img
        {...props}
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt="Salesforce1 Style Guide"
      />
    </Screenshot>
  );
};

Salesforce1StyleGuide.propTypes = {
  ...Img.propTypes,
};

export { Salesforce1StyleGuide };
