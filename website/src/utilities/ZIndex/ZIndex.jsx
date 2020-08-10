import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './ZIndex.module.scss';

const ZIndex = ({
  element,
  className,
  zindex,
  sm_zindex,
  md_zindex,
  lg_zindex,
  xl_zindex,
  bf_zindex,
  sm_bf_zindex,
  md_bf_zindex,
  lg_bf_zindex,
  xl_bf_zindex,
  af_zindex,
  sm_af_zindex,
  md_af_zindex,
  lg_af_zindex,
  xl_af_zindex,
  children,
  ...rest
}) => {
  const Element = element;
  const classes = classNames(
    zindex && styles[zindex],
    sm_zindex && styles[`sm_${sm_zindex}`],
    md_zindex && styles[`md_${md_zindex}`],
    lg_zindex && styles[`lg_${lg_zindex}`],
    xl_zindex && styles[`xl_${xl_zindex}`],
    bf_zindex && styles[`bf_${bf_zindex}`],
    sm_bf_zindex && styles[`sm_bf_${sm_bf_zindex}`],
    md_bf_zindex && styles[`md_bf_${md_bf_zindex}`],
    lg_bf_zindex && styles[`lg_bf_${lg_bf_zindex}`],
    xl_bf_zindex && styles[`xl_bf_${xl_bf_zindex}`],
    af_zindex && styles[`af_${af_zindex}`],
    sm_af_zindex && styles[`sm_af_${sm_af_zindex}`],
    md_af_zindex && styles[`md_af_${md_af_zindex}`],
    lg_af_zindex && styles[`lg_af_${lg_af_zindex}`],
    xl_af_zindex && styles[`xl_af_${xl_af_zindex}`],
    className,
  );
  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

const ZIndexes = ['root', 'max'];

ZIndex.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  zindex: PropTypes.oneOf(ZIndexes),
  sm_zindex: PropTypes.oneOf(ZIndexes),
  md_zindex: PropTypes.oneOf(ZIndexes),
  lg_zindex: PropTypes.oneOf(ZIndexes),
  xl_zindex: PropTypes.oneOf(ZIndexes),
  bf_zindex: PropTypes.oneOf(ZIndexes),
  sm_bf_zindex: PropTypes.oneOf(ZIndexes),
  md_bf_zindex: PropTypes.oneOf(ZIndexes),
  lg_bf_zindex: PropTypes.oneOf(ZIndexes),
  xl_bf_zindex: PropTypes.oneOf(ZIndexes),
  af_zindex: PropTypes.oneOf(ZIndexes),
  sm_af_zindex: PropTypes.oneOf(ZIndexes),
  md_af_zindex: PropTypes.oneOf(ZIndexes),
  lg_af_zindex: PropTypes.oneOf(ZIndexes),
  xl_af_zindex: PropTypes.oneOf(ZIndexes),
};

ZIndex.defaultProps = {
  element: 'div',
  className: '',
  zindex: '',
  sm_zindex: '',
  md_zindex: '',
  lg_zindex: '',
  xl_zindex: '',
  bf_zindex: '',
  sm_bf_zindex: '',
  md_bf_zindex: '',
  lg_bf_zindex: '',
  xl_bf_zindex: '',
  af_zindex: '',
  sm_af_zindex: '',
  md_af_zindex: '',
  lg_af_zindex: '',
  xl_af_zindex: '',
};

export { ZIndex };
