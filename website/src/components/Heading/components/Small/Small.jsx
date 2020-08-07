import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Small = ({ level, element, className, children, ...rest }) => {
  const Element = element || `h${level}`;
  const classes = classNames(
    `text-xl leading-tight font-serif tracking-tight`,
    className,
  );

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

Small.propTypes = {
  level: PropTypes.oneOf([2, 3, 4, 5, 6]),
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Small.defaultProps = {
  element: '',
  className: '',
  level: 3,
};

export { Small };
