import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from '../../Heading.module.scss';

const Small = ({ element, className, children, ...rest }) => {
  const Element = element;
  const classes = classNames(styles.small, className);

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

Small.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

Small.defaultProps = {
  element: 'h3',
  className: '',
};

export { Small };
