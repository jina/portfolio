import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from '../../HolyGrail.module.scss';

const Sidebar = ({ className, children, self, wide, order, ...rest }) => {
  const classes = classNames(
    styles.sidebar,
    order && styles[order],
    self && styles[self],
    wide && styles.wide,
    className,
  );

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  self: PropTypes.oneOf(['', 'auto', 'start', 'end', 'center', 'stretch']),
  order: PropTypes.oneOf(['', 'first', 'last']),
  wide: PropTypes.bool,
};

Sidebar.defaultProps = {
  className: '',
  self: '',
  order: '',
  wide: false,
};

export { Sidebar };
