import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Prose.module.scss';
import spacingStyles from '../../layout/Spacing/Spacing.module.scss';

const Prose = ({ children, spacing, className, ...rest }) => {
  const classes = classNames(
    styles.wrapper,
    spacing === '' ? spacingStyles.y_lg : spacingStyles[`y_${spacing}`],
    className,
  );

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

Prose.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  spacing: PropTypes.string,
};

Prose.defaultProps = {
  className: '',
  spacing: '',
};

export { Prose };
