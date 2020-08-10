import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Figure = ({
  element,
  className,
  children,
  spacing,
  reverse,
  ...rest
}) => {
  const Element = element;
  const Margin = reverse !== true ? `lg:ml-${spacing}` : `lg:mr-${spacing}`;
  const classes = classNames(reverse && `lg:order-first`, Margin, className);

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

Figure.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  spacing: PropTypes.oneOf([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    8,
    10,
    12,
    16,
    20,
    24,
    32,
    40,
    48,
    56,
    64,
  ]),
  reverse: PropTypes.bool,
};

Figure.defaultProps = {
  element: 'div',
  className: '',
  reverse: false,
};

export { Figure };
