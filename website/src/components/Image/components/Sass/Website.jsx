import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Screenshot } from '../../../Screenshot';

const SassWebsite = ({ props }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "sass-website.png" }) {
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
        alt="Sass website"
      />
    </Screenshot>
  );
};

SassWebsite.propTypes = {
  ...Img.propTypes,
};

export { SassWebsite };
