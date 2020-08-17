import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from '../../HolyGrail.module.scss';

const Header = ({ className, children, ...rest }) => {
  const classes = classNames(styles.header, className);

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  className: '',
};

export { Header };
