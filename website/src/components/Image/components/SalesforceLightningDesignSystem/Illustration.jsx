import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const SalesforceLightningDesignSystemIllustration = ({ props }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: {
          eq: "salesforce-lightning-design-system-illustration.png"
        }
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
      alt="Salesforce logo"
    />
  );
};

SalesforceLightningDesignSystemIllustration.propTypes = {
  ...Img.propTypes,
};

export { SalesforceLightningDesignSystemIllustration };
