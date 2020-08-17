import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from '../../HolyGrail.module.scss';

const Content = ({ className, children, self, ...rest }) => {
  const classes = classNames(styles.content, self && styles[self], className);

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  self: PropTypes.oneOf(['', 'auto', 'start', 'end', 'center', 'stretch']),
};

Content.defaultProps = {
  className: '',
  self: '',
};

export { Content };
