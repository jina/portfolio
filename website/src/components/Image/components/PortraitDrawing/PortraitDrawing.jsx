import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const PortraitDrawing = ({ props }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "portrait-drawing.png" }) {
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
      alt="Portrait drawn by Jina"
    />
  );
};

PortraitDrawing.propTypes = {
  ...Img.propTypes,
};

export { PortraitDrawing };
