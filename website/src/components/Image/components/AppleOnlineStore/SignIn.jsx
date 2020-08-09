import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Screenshot } from '../../../Screenshot';

const AppleOnlineStoreSignIn = ({ props }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "apple-online-store-sign-in.png" }
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
    <Screenshot>
      <Img
        {...props}
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt="Apple overview"
      />
    </Screenshot>
  );
};

AppleOnlineStoreSignIn.propTypes = {
  ...Img.propTypes,
};

export { AppleOnlineStoreSignIn };
