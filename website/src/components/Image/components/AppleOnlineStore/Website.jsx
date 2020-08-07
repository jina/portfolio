import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Screenshot } from '../../../Screenshot';

const AppleOnlineStoreWebsite = ({ props }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "apple-online-store-website.png" }
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
        alt="Apple website"
      />
    </Screenshot>
  );
};

AppleOnlineStoreWebsite.propTypes = {
  ...Img.propTypes,
};

export { AppleOnlineStoreWebsite };
