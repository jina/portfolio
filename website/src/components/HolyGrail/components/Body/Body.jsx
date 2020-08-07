import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Body = ({ element, className, children, ...rest }) => {
  const Element = element;
  const classes = classNames(`flex flex-col lg:flex-row lg:flex-1`, className);

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
};

Body.defaultProps = {
  element: 'div',
  className: '',
};

export { Body };
