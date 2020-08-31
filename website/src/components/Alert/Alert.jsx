import React from 'react';
import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Alert.module.scss';

const Alert = ({ className, name, ...rest }) => {
  const classes = classNames(styles.wrapper, className);

  return (
    <p className={classes} {...rest}>
      <ErrorMessage name={name} />
    </p>
  );
};

Alert.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
};

Alert.defaultProps = {
  className: '',
  name: '',
};

export { Alert };
