import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from '../../Heading.module.scss';

const Small = ({ className, children, ...rest }) => {
  const classes = classNames(styles.small, className);

  return (
    <h3 className={classes} {...rest}>
      {children}
    </h3>
  );
};

Small.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Small.defaultProps = {
  className: '',
};

export { Small };
