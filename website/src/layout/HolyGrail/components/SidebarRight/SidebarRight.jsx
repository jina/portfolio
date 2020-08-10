import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SidebarRight = ({ element, className, children, ...rest }) => {
  const Element = element;
  const classes = classNames(
    `lg:flex-none py-6 space-y-x px-4 md:px-8 w-full lg:w-64`,
    className,
  );

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

SidebarRight.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

SidebarRight.defaultProps = {
  element: 'div',
  className: '',
};

export { SidebarRight };
