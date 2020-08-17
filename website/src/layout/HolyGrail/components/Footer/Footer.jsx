import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from '../../HolyGrail.module.scss';

const Footer = ({ className, children, ...rest }) => {
  const classes = classNames(styles.footer, className);

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Footer.defaultProps = {
  className: '',
};

export { Footer };
