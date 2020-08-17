import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from '../../Heading.module.scss';

const Label = ({ className, children, ...rest }) => {
  const classes = classNames(styles.label, className);

  return (
    <h4 className={classes} {...rest}>
      {children}
    </h4>
  );
};

Label.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Label.defaultProps = {
  className: '',
};

export { Label };
