import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from '../../LinkButton.module.scss';

const Subtle = ({ element, className, children }) => {
  const Element = element;
  const classes = classNames(styles.subtle, className);

  return <Element className={classes}>{children}</Element>;
};

Subtle.propTypes = {
  element: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

Subtle.defaultProps = {
  element: 'div',
  className: '',
};

export { Subtle };
