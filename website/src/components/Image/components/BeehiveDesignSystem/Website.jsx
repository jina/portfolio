import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Screenshot } from '../../../Screenshot';

const BeehiveDesignSystemWebsite = ({ props }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "beehive-design-system-website.png" }
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
        alt="Beehive Design System website"
      />
    </Screenshot>
  );
};

BeehiveDesignSystemWebsite.propTypes = {
  ...Img.propTypes,
};

export { BeehiveDesignSystemWebsite };
