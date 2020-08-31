import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TextareaAutosize from 'react-autosize-textarea';

import styles from './Textarea.module.scss';

const Textarea = ({ className, ...rest }) => {
  const classes = classNames(styles.wrapper, className);

  return (
    <Field
      component={TextareaAutosize}
      rows={4}
      onResize={(e) => {}}
      className={classes}
      {...rest}
    />
  );
};

Textarea.propTypes = {
  className: PropTypes.string,
};

Textarea.defaultProps = {
  className: '',
};

export { Textarea };
