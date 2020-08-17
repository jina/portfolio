import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from '../../Heading.module.scss';

const Label = ({ element, className, children, ...rest }) => {
  const Element = element;
  const classes = classNames(styles.label, className);

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

Label.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

Label.defaultProps = {
  element: 'h4',
  className: '',
};

export { Label };
