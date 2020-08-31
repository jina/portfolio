import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './TextInput.module.scss';

const TextInput = ({ className, ...rest }) => {
  const classes = classNames(styles.wrapper, className);

  return <input type="text" className={classes} {...rest} />;
};

TextInput.propTypes = {
  className: PropTypes.string,
};

TextInput.defaultProps = {
  className: '',
};

export { TextInput };
