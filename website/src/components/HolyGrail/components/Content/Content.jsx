import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Content = ({ element, className, children, ...rest }) => {
  const Element = element;
  const classes = classNames(
    `lg:flex-1 py-6 space-y-6 px-4 md:px-8 w-full`,
    className,
  );

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

Content.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Content.defaultProps = {
  element: 'div',
  className: '',
};

export { Content };
