import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Example = ({ element, className, text, box, square, stretch }) => {
  const Element = element;
  const classes = classNames(
    className,
    box && 'example-box',
    square && 'example-box--square',
    stretch && 'example-box--stretch',
  );

  return <Element className={classes}>{text}</Element>;
};

Example.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.node,
  box: PropTypes.bool,
  square: PropTypes.bool,
  stretch: PropTypes.bool,
};

Example.defaultProps = {
  element: 'span',
  className: '',
  box: true,
  square: false,
  stretch: false,
};

export { Example };
