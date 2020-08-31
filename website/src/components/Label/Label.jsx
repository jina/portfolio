import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Label.module.scss';

const Label = ({ className, children, ...rest }) => {
  const classes = classNames(styles.wrapper, className);

  return (
    <label className={classes} {...rest}>
      {children}
    </label>
  );
};

Label.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Label.defaultProps = {
  className: '',
};

export { Label };
