import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Body = ({ element, className, children, reverse, ...rest }) => {
  const Element = element;
  const classes = classNames(`lg:flex-1`, reverse && `order-last`, className);

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

Body.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

Body.defaultProps = {
  element: 'div',
  className: '',
  reverse: false,
};

export { Body };
