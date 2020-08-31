import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './AssistiveText.module.scss';

const AssistiveText = ({ element, children, className, ...rest }) => {
  const Element = element;
  const classes = classNames(styles.wrapper, className);

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

AssistiveText.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

AssistiveText.defaultProps = {
  element: 'span',
  className: '',
};

export { AssistiveText };
