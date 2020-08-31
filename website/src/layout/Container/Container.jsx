import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Container.module.scss';

const Container = ({ mw, logo, form, className, children, ...rest }) => {
  const classes = classNames(
    styles.wrapper,
    mw && styles[mw],
    logo && styles.logo,
    form && styles.form,
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
  form: PropTypes.bool,
};

Container.defaultProps = {
  className: '',
  mw: '',
  logo: false,
  form: false,
};

export { Container };
