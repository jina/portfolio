import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Container.module.scss';

const Container = ({ mw, logo, className, children, ...rest }) => {
  const classes = classNames(
    styles.wrapper,
    mw && styles[mw],
    logo && styles.logo,
    className,
  );

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  mw: PropTypes.oneOf(['', 'xs', 'md', 'xl', 'xxxl']),
  logo: PropTypes.bool,
};

Container.defaultProps = {
  className: '',
  mw: '',
  logo: false,
};

export { Container };
