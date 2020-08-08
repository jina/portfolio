import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import {
  AppleOnlineStore,
  AppleOnlineStoreCart,
  AppleOnlineStoreSignIn,
  AppleOnlineStoreWebsite,
  BeehiveApp,
  BeehiveDesignSystem,
  BeehiveDesignSystemIcons,
  BeehiveDesignSystemWebsite,
  Clarity,
  ClarityBox,
  ClarityHenri,
  ClarityPrograms,
  ClarityRichardAndBarbara,
  ClaritySVAMarquee,
  ClarityTatianaAndBrad,
  ClarityWebsite,
  PortraitDrawing,
  Salesforce1StyleGuide,
  SalesforceLightningDesignSystem,
  SalesforceLightningDesignSystemIllustration,
  SalesforceLightningDesignSystemInvitation,
  SalesforceLightningDesignSystemSystem,
  SalesforceLightningDesignSystemWebsite,
  Sass,
  SassGlasses,
  SassStyleTile,
  SassWebsite,
} from './components';

const Image = ({ props }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "portrait.png" }) {
        childImageSharp {
          fluid(maxWidth: 256) {
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
      alt="Portrait"
    />
  );
};

Image.propTypes = {
  ...Img.propTypes,
};

// Also edit templates/Project.jsx to include as well
Image.AppleOnlineStore = AppleOnlineStore;
Image.AppleOnlineStoreCart = AppleOnlineStoreCart;
Image.AppleOnlineStoreSignIn = AppleOnlineStoreSignIn;
Image.AppleOnlineStoreWebsite = AppleOnlineStoreWebsite;
Image.BeehiveApp = BeehiveApp;
Image.BeehiveDesignSystem = BeehiveDesignSystem;
Image.BeehiveDesignSystemIcons = BeehiveDesignSystemIcons;
Image.BeehiveDesignSystemWebsite = BeehiveDesignSystemWebsite;
Image.Clarity = Clarity;
Image.ClarityBox = ClarityBox;
Image.ClarityHenri = ClarityHenri;
Image.ClarityPrograms = ClarityPrograms;
Image.ClarityRichardAndBarbara = ClarityRichardAndBarbara;
Image.ClaritySVAMarquee = ClaritySVAMarquee;
Image.ClarityTatianaAndBrad = ClarityTatianaAndBrad;
Image.ClarityWebsite = ClarityWebsite;
Image.PortraitDrawing = PortraitDrawing;
Image.Salesforce1StyleGuide = Salesforce1StyleGuide;
Image.SalesforceLightningDesignSystem = SalesforceLightningDesignSystem;
Image.SalesforceLightningDesignSystemIllustration = SalesforceLightningDesignSystemIllustration;
Image.SalesforceLightningDesignSystemInvitation = SalesforceLightningDesignSystemInvitation;
Image.SalesforceLightningDesignSystemSystem = SalesforceLightningDesignSystemSystem;
Image.SalesforceLightningDesignSystemWebsite = SalesforceLightningDesignSystemWebsite;
Image.Sass = Sass;
Image.SassGlasses = SassGlasses;
Image.SassStyleTile = SassStyleTile;
Image.SassWebsite = SassWebsite;

export { Image };
