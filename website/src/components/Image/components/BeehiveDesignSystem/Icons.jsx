import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const BeehiveDesignSystemIcons = ({ props }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "beehive-design-system-icons.png" }
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
      alt="Beehive Design System icons"
    />
  );
};

BeehiveDesignSystemIcons.propTypes = {
  ...Img.propTypes,
};

export { BeehiveDesignSystemIcons };
