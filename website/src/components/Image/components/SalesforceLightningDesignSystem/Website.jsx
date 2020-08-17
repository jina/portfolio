import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Screenshot } from '../../../Screenshot';

const SalesforceLightningDesignSystemWebsite = ({ props }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "salesforce-lightning-design-system-website.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 960) {
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
        alt="Salesforce Lightning Design System website"
      />
    </Screenshot>
  );
};

SalesforceLightningDesignSystemWebsite.propTypes = {
  ...Img.propTypes,
};

export { SalesforceLightningDesignSystemWebsite };
