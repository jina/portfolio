import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Body, Item } from './components';

import styles from './AddOn.module.scss';
import spacingStyles from '../Spacing/Spacing.module.scss';

const AddOn = ({ className, children, ...rest }) => {
  const classes = classNames(
    styles.wrapper,
    spacingStyles.md_x_xl,
    spacingStyles.y_lg,
    spacingStyles.md_y_none,
    className,
  );

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

AddOn.Body = Body;
AddOn.Item = Item;

AddOn.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

AddOn.defaultProps = {
  className: '',
};

export { AddOn };
