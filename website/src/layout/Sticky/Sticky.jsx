import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Sticky.module.scss';

const Sticky = ({
  t,
  sm_t,
  md_t,
  lg_t,
  xl_t,
  children,
  className,
  ...rest
}) => {
  const classes = classNames(
    styles.wrapper,
    t && styles[`t_${t}`],
    sm_t && styles[`sm_t_${sm_t}`],
    md_t && styles[`md_t_${md_t}`],
    lg_t && styles[`lg_t_${lg_t}`],
    xl_t && styles[`xl_t_${xl_t}`],
    className,
  );

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

const Space = ['', 'base', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'none'];

Sticky.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  t: PropTypes.oneOf(Space),
  sm_t: PropTypes.oneOf(Space),
  md_t: PropTypes.oneOf(Space),
  lg_t: PropTypes.oneOf(Space),
  xl_t: PropTypes.oneOf(Space),
};

Sticky.defaultProps = {
  className: '',
  t: '',
  sm_t: '',
  md_t: '',
  lg_t: '',
  xl_t: '',
};

export { Sticky };
