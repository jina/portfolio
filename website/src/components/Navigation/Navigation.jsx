import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Item } from './components';

import styles from './Navigation.module.scss';
import flushStyles from '../../layout/Flush/Flush.module.scss';
import spacingStyles from '../../layout/Spacing/Spacing.module.scss';

const Navigation = ({ children, className, ...rest }) => {
  const classes = classNames(
    styles.wrapper,
    flushStyles.x_md,
    spacingStyles.sm_x_base,
    className,
  );

  return (
    <ul className={classes} {...rest}>
      {children}
    </ul>
  );
};

Navigation.Item = Item;

Navigation.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Navigation.defaultProps = {
  className: '',
};

export { Navigation };
