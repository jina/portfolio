import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Display.module.scss';

const Display = ({
  element,
  className,
  display,
  sm_display,
  md_display,
  lg_display,
  xl_display,
  before_display,
  sm_before_display,
  md_before_display,
  lg_before_display,
  xl_before_display,
  after_display,
  sm_after_display,
  md_after_display,
  lg_after_display,
  xl_after_display,
  children,
  ...rest
}) => {
  const Element = element;
  const classes = classNames(
    display && styles.display,
    sm_display && styles[`sm_${sm_display}`],
    md_display && styles[`md_${md_display}`],
    lg_display && styles[`lg_${lg_display}`],
    xl_display && styles[`xl_${xl_display}`],
    before_display && styles[`before_${before_display}`],
    sm_before_display && styles[`sm_before_${sm_before_display}`],
    md_before_display && styles[`md_before_${md_before_display}`],
    lg_before_display && styles[`lg_before_${lg_before_display}`],
    xl_before_display && styles[`xl_before_${xl_before_display}`],
    after_display && styles[`after_${after_display}`],
    sm_after_display && styles[`sm_after_${sm_after_display}`],
    md_after_display && styles[`md_after_${md_after_display}`],
    lg_after_display && styles[`lg_after_${lg_after_display}`],
    xl_after_display && styles[`xl_after_${xl_after_display}`],
    className,
  );
  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

const Displays = [
  'none',
  'block',
  'flowroot',
  'inlineblock',
  'inline',
  'flex',
  'inlineflex',
  'grid',
  'inlinegrid',
  'table',
  'tablecaption',
  'tablecell',
  'tablecolumn',
  'tablecolumngroup',
  'tablefootergroup',
  'tableheadergroup',
  'tablerowgroup',
  'tablerow',
];

Display.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  display: PropTypes.oneOf(Displays),
  sm_display: PropTypes.oneOf(Displays),
  md_display: PropTypes.oneOf(Displays),
  lg_display: PropTypes.oneOf(Displays),
  xl_display: PropTypes.oneOf(Displays),
  before_display: PropTypes.oneOf(Displays),
  sm_before_display: PropTypes.oneOf(Displays),
  md_before_display: PropTypes.oneOf(Displays),
  lg_before_display: PropTypes.oneOf(Displays),
  xl_before_display: PropTypes.oneOf(Displays),
  after_display: PropTypes.oneOf(Displays),
  sm_after_display: PropTypes.oneOf(Displays),
  md_after_display: PropTypes.oneOf(Displays),
  lg_after_display: PropTypes.oneOf(Displays),
  xl_after_display: PropTypes.oneOf(Displays),
};

Display.defaultProps = {
  element: 'div',
  className: '',
  display: '',
  sm_display: '',
  md_display: '',
  lg_display: '',
  xl_display: '',
  before_display: '',
  sm_before_display: '',
  md_before_display: '',
  lg_before_display: '',
  xl_before_display: '',
  after_display: '',
  sm_after_display: '',
  md_after_display: '',
  lg_after_display: '',
  xl_after_display: '',
};

export { Display };
