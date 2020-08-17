import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from '../../AddOn.module.scss';

const Item = ({ className, children, ...rest }) => {
  const classes = classNames(styles.item, className);

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

Item.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Item.defaultProps = {
  className: '',
};

export { Item };
