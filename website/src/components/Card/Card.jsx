import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Heading } from '../Heading';

const Card = ({
  element,
  className,
  children,
  heading,
  headingElement,
  ...rest
}) => {
  const Element = element;
  const classes = classNames(`space-y-3`, className);

  return (
    <Element className={classes} {...rest}>
      {heading && (
        <Heading.Label element={headingElement}>{heading}</Heading.Label>
      )}

      {children}
    </Element>
  );
};

Card.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  heading: PropTypes.string,
  headingElement: PropTypes.string,
};

Card.defaultProps = {
  element: 'div',
  heading: '',
  headingElement: 'h2',
  className: '',
};

export { Card };
