import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Height.module.scss';

const Height = ({
  element,
  className,
  height,
  sm_height,
  md_height,
  lg_height,
  xl_height,
  before_height,
  sm_before_height,
  md_before_height,
  lg_before_height,
  xl_before_height,
  after_height,
  sm_after_height,
  md_after_height,
  lg_after_height,
  xl_after_height,
  children,
  ...rest
}) => {
  const Element = element;
  const classes = classNames(
    height && styles.height,
    sm_height && styles[`sm_${sm_height}`],
    md_height && styles[`md_${md_height}`],
    lg_height && styles[`lg_${lg_height}`],
    xl_height && styles[`xl_${xl_height}`],
    before_heighty && styles[`before_${before_height}`],
    sm_before_height && styles[`sm_before_${sm_before_height}`],
    md_before_height && styles[`md_before_${md_before_height}`],
    lg_before_height && styles[`lg_before_${lg_before_height}`],
    xl_before_height && styles[`xl_before_${xl_before_height}`],
    after_height && styles[`after_${after_height}`],
    sm_after_height && styles[`sm_after_${sm_after_height}`],
    md_after_height && styles[`md_after_${md_after_height}`],
    lg_after_height && styles[`lg_after_${lg_after_height}`],
    xl_after_height && styles[`xl_after_${xl_after_height}`],
    className,
  );
  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

const Heights = [
  'full',
  'ui-small',
  'ui-medium',
  'ui-large',
  'container-xx-small',
  'container-x-small',
  'container-small',
  'container-medium',
  'container-large',
  'container-x-large',
  'container-xx-large',
];

Height.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  height: PropTypes.oneOf(Heights),
  sm_height: PropTypes.oneOf(Heights),
  md_height: PropTypes.oneOf(Heights),
  lg_height: PropTypes.oneOf(Heights),
  xl_height: PropTypes.oneOf(Heights),
  before_height: PropTypes.oneOf(Heights),
  sm_before_height: PropTypes.oneOf(Heights),
  md_before_height: PropTypes.oneOf(Heights),
  lg_before_height: PropTypes.oneOf(Heights),
  xl_before_height: PropTypes.oneOf(Heights),
  after_height: PropTypes.oneOf(Heights),
  sm_after_height: PropTypes.oneOf(Heights),
  md_after_height: PropTypes.oneOf(Heights),
  lg_after_height: PropTypes.oneOf(Heights),
  xl_after_height: PropTypes.oneOf(Heights),
};

Height.defaultProps = {
  element: 'div',
  className: '',
  height: '',
  sm_height: '',
  md_height: '',
  lg_height: '',
  xl_height: '',
  before_height: '',
  sm_before_height: '',
  md_before_height: '',
  lg_before_height: '',
  xl_before_height: '',
  after_height: '',
  sm_after_height: '',
  md_after_height: '',
  lg_after_height: '',
  xl_after_height: '',
};

export { Height };
