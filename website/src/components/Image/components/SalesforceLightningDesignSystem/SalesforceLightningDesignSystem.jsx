import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const SalesforceLightningDesignSystem = ({ props }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "salesforce-lightning-design-system-logo.png" }
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
      alt="Salesforce Lightning Design System logo"
    />
  );
};

SalesforceLightningDesignSystem.propTypes = {
  ...Img.propTypes,
};

export { SalesforceLightningDesignSystem };
