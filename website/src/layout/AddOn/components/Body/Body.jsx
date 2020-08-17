import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from '../../AddOn.module.scss';

const Body = ({ className, children, ...rest }) => {
  const classes = classNames(styles.body, className);

  return (
    <nav className={classes} {...rest}>
      {children}
    </nav>
  );
};

Body.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Body.defaultProps = {
  className: '',
};

export { Body };
