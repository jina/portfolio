import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Position.module.scss';

const Position = ({
  element,
  className,
  position,
  sm_position,
  md_position,
  lg_position,
  xl_position,
  before_position,
  sm_bf_position,
  md_bf_position,
  lg_bf_position,
  xl_bf_position,
  after_position,
  sm_af_position,
  md_af_position,
  lg_af_position,
  xl_af_position,
  top,
  right,
  bottom,
  left,
  sm_top,
  sm_right,
  sm_bottom,
  sm_left,
  md_top,
  md_right,
  md_bottom,
  md_left,
  lg_top,
  lg_right,
  lg_bottom,
  lg_left,
  xl_top,
  xl_right,
  xl_bottom,
  xl_left,
  bf_top,
  bf_right,
  bf_bottom,
  bf_left,
  sm_bf_top,
  sm_bf_right,
  sm_bf_bottom,
  sm_bf_left,
  md_bf_top,
  md_bf_right,
  md_bf_bottom,
  md_bf_left,
  lg_bf_top,
  lg_bf_right,
  lg_bf_bottom,
  lg_bf_left,
  xl_bf_top,
  xl_bf_right,
  xl_bf_bottom,
  xl_bf_left,
  af_top,
  af_right,
  af_bottom,
  af_left,
  sm_af_top,
  sm_af_right,
  sm_af_bottom,
  sm_af_left,
  md_af_top,
  md_af_right,
  md_af_bottom,
  md_af_left,
  lg_af_top,
  lg_af_right,
  lg_af_bottom,
  lg_af_left,
  xl_af_top,
  xl_af_right,
  xl_af_bottom,
  xl_af_left,
  children,
  ...rest
}) => {
  const Element = element;
  const classes = classNames(
    position && styles.position,
    sm_position && styles[`sm_${sm_position}`],
    md_position && styles[`md_${md_position}`],
    lg_position && styles[`lg_${lg_position}`],
    xl_position && styles[`xl_${xl_position}`],
    bf_position && styles[`before_${bf_position}`],
    sm_bf_position && styles[`sm_bf_${sm_bf_position}`],
    md_bf_position && styles[`md_bf_${md_bf_position}`],
    lg_bf_position && styles[`lg_bf_${lg_bf_position}`],
    xl_bf_position && styles[`xl_bf_${xl_bf_position}`],
    af_position && styles[`af_${af_positioposition}`],
    sm_af_position && styles[`sm_af_${sm_af_position}`],
    md_af_position && styles[`md_af_${md_af_position}`],
    lg_af_position && styles[`lg_af_${lg_af_position}`],
    xl_af_position && styles[`xl_af_${xl_af_position}`],
    top && styles[`top-${top}`],
    right && styles[`right-${right}`],
    bottom && styles[`bottom-${bottom}`],
    left && styles[`left-${left}`],
    sm_top && styles[`sm_top-${sm_top}`],
    sm_right && styles[`sm_right-${sm_right}`],
    sm_bottom && styles[`sm_bottom-${sm_bottom}`],
    sm_left && styles[`sm_left-${sm_left}`],
    md_top && styles[`md_top-${md_top}`],
    md_right && styles[`md_right-${md_right}`],
    md_bottom && styles[`md_bottom-${md_bottom}`],
    md_left && styles[`md_left-${md_left}`],
    lg_top && styles[`lg_top-${lg_top}`],
    lg_right && styles[`lg_right-${lg_right}`],
    lg_bottom && styles[`lg_bottom-${lg_bottom}`],
    lg_left && styles[`lg_left-${lg_left}`],
    xl_top && styles[`xl_top-${xl_top}`],
    xl_right && styles[`xl_right-${xl_right}`],
    xl_bottom && styles[`xl_bottom-${xl_bottom}`],
    xl_left && styles[`xl_left-${xl_left}`],
    bf_top && styles[`bf_top-${bf_top}`],
    bf_right && styles[`bf_right-${bf_right}`],
    bf_bottom && styles[`bf_bottom-${bf_bottom}`],
    bf_left && styles[`bf_left-${bf_left}`],
    sm_bf_top && styles[`sm_bf_top-${sm_bf_top}`],
    sm_bf_right && styles[`sm_bf_right-${sm_bf_right}`],
    sm_bf_bottom && styles[`sm_bf_bottom-${sm_bf_bottom}`],
    sm_bf_left && styles[`sm_bf_left-${sm_bf_left}`],
    md_bf_top && styles[`md_bf_top-${md_bf_top}`],
    md_bf_right && styles[`md_bf_right-${md_bf_right}`],
    md_bf_bottom && styles[`md_bf_bottom-${md_bf_bottom}`],
    md_bf_left && styles[`md_bf_left-${md_bf_left}`],
    lg_bf_top && styles[`lg_bf_top-${lg_bf_top}`],
    lg_bf_right && styles[`lg_bf_right-${lg_bf_right}`],
    lg_bf_bottom && styles[`lg_bf_bottom-${lg_bf_bottom}`],
    lg_bf_left && styles[`lg_bf_left-${lg_bf_left}`],
    xl_bf_top && styles[`xl_bf_top-${xl_bf_top}`],
    xl_bf_right && styles[`xl_bf_right-${xl_bf_right}`],
    xl_bf_bottom && styles[`xl_bf_bottom-${xl_bf_bottom}`],
    xl_bf_left && styles[`xl_bf_left-${xl_bf_left}`],
    af_top && styles[`af_top-${af_top}`],
    af_right && styles[`af_right-${af_right}`],
    af_bottom && styles[`af_bottom-${af_bottom}`],
    af_left && styles[`af_left-${af_left}`],
    sm_afr_top && styles[`sm_af_top-${sm_af_top}`],
    sm_afr_right && styles[`sm_af_right-${sm_af_right}`],
    sm_afr_bottom && styles[`sm_af_bottom-${sm_af_bottom}`],
    sm_afr_left && styles[`sm_af_left-${sm_af_left}`],
    md_afr_top && styles[`md_af_top-${md_af_top}`],
    md_afr_right && styles[`md_af_right-${md_af_right}`],
    md_afr_bottom && styles[`md_af_bottom-${md_af_bottom}`],
    md_afr_left && styles[`md_af_left-${md_af_left}`],
    lg_afr_top && styles[`lg_af_top-${lg_af_top}`],
    lg_afr_right && styles[`lg_af_right-${lg_af_right}`],
    lg_afr_bottom && styles[`lg_af_bottom-${lg_af_bottom}`],
    lg_afr_left && styles[`lg_af_left-${lg_af_left}`],
    xl_afr_top && styles[`xl_af_top-${xl_af_top}`],
    xl_afr_right && styles[`xl_af_right-${xl_af_right}`],
    xl_afr_bottom && styles[`xl_af_bottom-${xl_af_bottom}`],
    xl_afr_left && styles[`xl_af_left-${xl_af_left}`],
    className,
  );
  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

const Positions = [
  'base',
  'horizontal-small',
  'vertical-small',
  'horizontal-medium',
  'vertical-medium',
  'horizontal-large',
  'vertical-large',
  'none',
  'auto',
];

Position.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf(Positions),
  sm_position: PropTypes.oneOf(Positions),
  md_position: PropTypes.oneOf(Positions),
  lg_position: PropTypes.oneOf(Positions),
  xl_position: PropTypes.oneOf(Positions),
  bf_position: PropTypes.oneOf(Positions),
  sm_bf_position: PropTypes.oneOf(Positions),
  md_bf_position: PropTypes.oneOf(Positions),
  lg_bf_position: PropTypes.oneOf(Positions),
  xl_bf_position: PropTypes.oneOf(Positions),
  af_position: PropTypes.oneOf(Positions),
  sm_af_position: PropTypes.oneOf(Positions),
  md_af_position: PropTypes.oneOf(Positions),
  lg_af_position: PropTypes.oneOf(Positions),
  xl_af_position: PropTypes.oneOf(Positions),
  top: PropTypes.oneOf(Positions),
  right: PropTypes.oneOf(Positions),
  bottom: PropTypes.oneOf(Positions),
  left: PropTypes.oneOf(Positions),
  sm_top: PropTypes.oneOf(Positions),
  sm_right: PropTypes.oneOf(Positions),
  sm_bottom: PropTypes.oneOf(Positions),
  sm_left: PropTypes.oneOf(Positions),
  md_top: PropTypes.oneOf(Positions),
  md_right: PropTypes.oneOf(Positions),
  md_bottom: PropTypes.oneOf(Positions),
  md_left: PropTypes.oneOf(Positions),
  lg_top: PropTypes.oneOf(Positions),
  lg_right: PropTypes.oneOf(Positions),
  lg_bottom: PropTypes.oneOf(Positions),
  lg_left: PropTypes.oneOf(Positions),
  xl_top: PropTypes.oneOf(Positions),
  xl_right: PropTypes.oneOf(Positions),
  xl_bottom: PropTypes.oneOf(Positions),
  xl_left: PropTypes.oneOf(Positions),
  bf_top: PropTypes.oneOf(Positions),
  bf_right: PropTypes.oneOf(Positions),
  bf_bottom: PropTypes.oneOf(Positions),
  bf_left: PropTypes.oneOf(Positions),
  sm_bf_top: PropTypes.oneOf(Positions),
  sm_bf_right: PropTypes.oneOf(Positions),
  sm_bf_bottom: PropTypes.oneOf(Positions),
  sm_bf_left: PropTypes.oneOf(Positions),
  md_bf_top: PropTypes.oneOf(Positions),
  md_bf_right: PropTypes.oneOf(Positions),
  md_bf_bottom: PropTypes.oneOf(Positions),
  md_bf_left: PropTypes.oneOf(Positions),
  lg_bf_top: PropTypes.oneOf(Positions),
  lg_bf_right: PropTypes.oneOf(Positions),
  lg_bf_bottom: PropTypes.oneOf(Positions),
  lg_bf_left: PropTypes.oneOf(Positions),
  xl_bf_top: PropTypes.oneOf(Positions),
  xl_bf_right: PropTypes.oneOf(Positions),
  xl_bf_bottom: PropTypes.oneOf(Positions),
  xl_bf_left: PropTypes.oneOf(Positions),
  af_top: PropTypes.oneOf(Positions),
  af_right: PropTypes.oneOf(Positions),
  af_bottom: PropTypes.oneOf(Positions),
  af_left: PropTypes.oneOf(Positions),
  sm_af_top: PropTypes.oneOf(Positions),
  sm_af_right: PropTypes.oneOf(Positions),
  sm_af_bottom: PropTypes.oneOf(Positions),
  sm_af_left: PropTypes.oneOf(Positions),
  md_af_top: PropTypes.oneOf(Positions),
  md_af_right: PropTypes.oneOf(Positions),
  md_af_bottom: PropTypes.oneOf(Positions),
  md_af_left: PropTypes.oneOf(Positions),
  lg_af_top: PropTypes.oneOf(Positions),
  lg_af_right: PropTypes.oneOf(Positions),
  lg_af_bottom: PropTypes.oneOf(Positions),
  lg_af_left: PropTypes.oneOf(Positions),
  xl_af_top: PropTypes.oneOf(Positions),
  xl_af_right: PropTypes.oneOf(Positions),
  xl_af_bottom: PropTypes.oneOf(Positions),
  xl_af_left: PropTypes.oneOf(Positions),
};

Position.defaultProps = {
  element: 'div',
  className: '',
  position: '',
  sm_position: '',
  md_position: '',
  lg_position: '',
  xl_position: '',
  bf_position: '',
  sm_bf_position: '',
  md_bf_position: '',
  lg_bf_position: '',
  xl_bf_position: '',
  af_position: '',
  sm_af_position: '',
  md_af_position: '',
  lg_af_position: '',
  xl_af_position: '',
  top: '',
  right: '',
  bottom: '',
  left: '',
  sm_top: '',
  sm_right: '',
  sm_bottom: '',
  sm_left: '',
  md_top: '',
  md_right: '',
  md_bottom: '',
  md_left: '',
  lg_top: '',
  lg_right: '',
  lg_bottom: '',
  lg_left: '',
  xl_top: '',
  xl_right: '',
  xl_bottom: '',
  xl_left: '',
  bf_top: '',
  bf_right: '',
  bf_bottom: '',
  bf_left: '',
  sm_bf_top: '',
  sm_bf_right: '',
  sm_bf_bottom: '',
  sm_bf_left: '',
  md_bf_top: '',
  md_bf_right: '',
  md_bf_bottom: '',
  md_bf_left: '',
  lg_bf_top: '',
  lg_bf_right: '',
  lg_bf_bottom: '',
  lg_bf_left: '',
  xl_bf_top: '',
  xl_bf_right: '',
  xl_bf_bottom: '',
  xl_bf_left: '',
  af_top: '',
  af_right: '',
  af_bottom: '',
  af_left: '',
  sm_af_top: '',
  sm_af_right: '',
  sm_af_bottom: '',
  sm_af_left: '',
  md_af_top: '',
  md_af_right: '',
  md_af_bottom: '',
  md_af_left: '',
  lg_af_top: '',
  lg_af_right: '',
  lg_af_bottom: '',
  lg_af_left: '',
  xl_af_top: '',
  xl_af_right: '',
  xl_af_bottom: '',
  xl_af_left: '',
};

export { Position };
