import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Column } from './components';
import styles from './Grid.module.scss';

const Grid = ({
  element,
  full,
  smallFit,
  mediumFit,
  largeFit,
  xLargeFit,
  xXLargeFit,
  divideBy,
  alignItems,
  spacing,
  children,
  className,
  ...rest
}) => {
  const Element = element;
  const classes = classNames(
    `flex flex-wrap`,
    full && styles.full,
    smallFit && styles.smallFit,
    mediumFit && styles.mediumFit,
    largeFit && styles.largeFit,
    xLargeFit && styles.xLargeFit,
    xXLargeFit && styles.xxLargeFit,
    divideBy && styles[`divide-by-${divideBy}`],
    alignItems && `items-${alignItems}`,
    spacing && `space-x-${spacing}`,
    className,
  );

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

Grid.propTypes = {
  element: PropTypes.string,
  full: PropTypes.bool,
  smallFit: PropTypes.bool,
  mediumFit: PropTypes.bool,
  largeFit: PropTypes.bool,
  xLargeFit: PropTypes.bool,
  xXLargeFit: PropTypes.bool,
  divideBy: PropTypes.oneOf([2, 3, 4]),
  alignItems: PropTypes.oneOf([
    'stretch',
    'start',
    'center',
    'end',
    'baseline',
  ]),
  spacing: PropTypes.oneOf([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    8,
    10,
    12,
    16,
    20,
    24,
    32,
    40,
    48,
    56,
    64,
  ]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Grid.defaultProps = {
  element: 'div',
  className: '',
  full: false,
  smallFit: false,
  mediumFit: false,
  largeFit: false,
  xLargeFit: false,
  xXLargeFit: false,
  divideBy: '',
  alignItems: '',
};

Grid.Column = Column;

export { Grid };
