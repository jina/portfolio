import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Flush.module.scss';

const Flush = ({
  element,
  className,
  x,
  sm_x,
  md_x,
  lg_x,
  xl_x,
  y,
  sm_y,
  md_y,
  lg_y,
  xl_y,
  t,
  sm_t,
  md_t,
  lg_t,
  xl_t,
  children,
  ...rest
}) => {
  const Element = element;
  const classes = classNames(
    x && styles[`x_${x}`],
    sm_x && styles[`sm_x_${sm_x}`],
    md_x && styles[`md_x_${md_x}`],
    lg_x && styles[`lg_x_${lg_x}`],
    xl_x && styles[`xl_x_${xl_x}`],
    y && styles[`y_${y}`],
    sm_y && styles[`sm_y_${sm_y}`],
    md_y && styles[`md_y_${md_y}`],
    lg_y && styles[`lg_y_${lg_y}`],
    xl_y && styles[`xl_y_${xl_y}`],
    t && styles[`r_${t}`],
    sm_t && styles[`sm_t_${sm_t}`],
    md_t && styles[`md_t_${md_t}`],
    lg_t && styles[`lg_t_${lg_t}`],
    xl_t && styles[`xl_t_${xl_t}`],
    className,
  );

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

const Space = ['', 'base', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'none'];

Flush.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  x: PropTypes.oneOf(Space),
  sm_x: PropTypes.oneOf(Space),
  md_x: PropTypes.oneOf(Space),
  lg_x: PropTypes.oneOf(Space),
  xl_x: PropTypes.oneOf(Space),
  y: PropTypes.oneOf(Space),
  sm_y: PropTypes.oneOf(Space),
  md_y: PropTypes.oneOf(Space),
  lg_y: PropTypes.oneOf(Space),
  xl_y: PropTypes.oneOf(Space),
};

Flush.defaultProps = {
  element: 'div',
  className: '',
  x: '',
  sm_x: '',
  md_x: '',
  lg_x: '',
  xl_x: '',
  y: '',
  sm_y: '',
  md_y: '',
  lg_y: '',
  xl_y: '',
};

export { Flush };
