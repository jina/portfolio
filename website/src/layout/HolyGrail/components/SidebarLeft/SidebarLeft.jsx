import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SidebarLeft = ({ element, className, children, wide, ...rest }) => {
  const Element = element;
  const sizeClasses = wide === true ? `lg:w-1/4` : `lg:w-64`;
  const classes = classNames(
    `lg:flex-none lg:order-first py-6 space-y-6 px-4 md:px-8 w-full`,
    sizeClasses,
    className,
  );

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

SidebarLeft.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  wide: PropTypes.bool,
};

SidebarLeft.defaultProps = {
  element: 'div',
  className: '',
  wide: false,
};

export { SidebarLeft };
