import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Field } from 'formik';

import styles from './Textarea.module.scss';

const Textarea = ({ className, id, ...rest }) => {
  const classes = classNames(styles.wrapper, className);

  return (
    <Field
      component="textarea"
      id={id}
      name={id}
      required="required"
      className={classes}
      {...rest}
    />
  );
};

Textarea.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
};

Textarea.defaultProps = {
  className: '',
  id: '',
};

export { Textarea };
