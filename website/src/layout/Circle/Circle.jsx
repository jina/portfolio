import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Circle.module.scss';

const Circle = ({
  element,
  is,
  sm_is,
  md_is,
  lg_is,
  xl_is,
  is_not,
  sm_is_not,
  md_is_not,
  lg_is_not,
  xl_is_not,
  className,
  children,
  ...rest
}) => {
  const Element = element;
  const classes = classNames(
    styles.wrapper,
    is && styles.is,
    sm_is && styles.sm_is,
    md_is && styles.md_is,
    lg_is && styles.lg_is,
    xl_is && styles.xl_is,
    is_not && styles.is_not,
    sm_is_not && styles.sm_is_not,
    md_is_not && styles.md_is_not,
    lg_is_not && styles.lg_is_not,
    xl_is_not && styles.xl_is_not,
    className,
  );

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

Circle.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  is: PropTypes.bool,
  sm_is: PropTypes.bool,
  md_is: PropTypes.bool,
  lg_is: PropTypes.bool,
  xl_is: PropTypes.bool,
  is_not: PropTypes.bool,
  sm_is_not: PropTypes.bool,
  md_is_not: PropTypes.bool,
  lg_is_not: PropTypes.bool,
  xl_is_not: PropTypes.bool,
};

Circle.defaultProps = {
  element: 'div',
  className: '',
  is: false,
  sm_is: false,
  md_is: false,
  lg_is: false,
  xl_is: false,
  is_not: false,
  sm_is_not: false,
  md_is_not: false,
  lg_is_not: false,
  xl_is_not: false,
};

export { Circle };
