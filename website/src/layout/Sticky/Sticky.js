import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Sticky.module.scss';

const Sticky = ({ children, className, ...rest }) => {
  const classes = classNames(styles.wrapper, className);

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

Sticky.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Sticky.defaultProps = {
  className: '',
};

export { Sticky };
