import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './TextInput.module.scss';

const TextInput = ({ className, type, id, ...rest }) => {
  const classes = classNames(styles.wrapper, className);

  return (
    <Field
      className={classes}
      name={id}
      id={id}
      type={type}
      required="required"
      {...rest}
    />
  );
};

TextInput.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
};

TextInput.defaultProps = {
  className: '',
  type: 'text',
  id: '',
};

export { TextInput };
