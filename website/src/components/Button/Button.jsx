import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Button.module.scss';

const Button = ({ className, ...rest }) => {
  const classes = classNames(styles.wrapper, className);

  return (
    <button type="submit" className={classes} {...rest}>
      Submit
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
};

export { Button };
