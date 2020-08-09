import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const SalesforceLightningDesignSystemSystem = ({ props }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "salesforce-lightning-design-system-system.png" }
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
      alt="Salesforce overview"
    />
  );
};

SalesforceLightningDesignSystemSystem.propTypes = {
  ...Img.propTypes,
};

export { SalesforceLightningDesignSystemSystem };
