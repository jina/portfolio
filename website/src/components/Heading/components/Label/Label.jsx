import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Label = ({ level, element, className, children, ...rest }) => {
  const Element = element || `h${level}`;
  const classes = classNames(
    `font-semibold text-base leading-tight uppercase tracking-wider`,
    className,
  );

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

Label.propTypes = {
  level: PropTypes.oneOf([2, 3, 4, 5, 6]),
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Label.defaultProps = {
  element: '',
  className: '',
  level: 4,
};

export { Label };
