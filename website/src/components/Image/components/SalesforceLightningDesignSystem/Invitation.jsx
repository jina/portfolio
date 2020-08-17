import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const SalesforceLightningDesignSystemInvitation = ({ props }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: {
          eq: "salesforce-lightning-design-system-invitation.png"
        }
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
    <Img
      {...props}
      fluid={data.placeholderImage.childImageSharp.fluid}
      alt="Salesforce Lightning Design System logo"
    />
  );
};

SalesforceLightningDesignSystemInvitation.propTypes = {
  ...Img.propTypes,
};

export { SalesforceLightningDesignSystemInvitation };
