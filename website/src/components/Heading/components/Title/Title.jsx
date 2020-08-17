import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from '../../Heading.module.scss';

const Title = ({ className, children, ...rest }) => {
  const classes = classNames(styles.title, className);

  return (
    <h1 className={classes} {...rest}>
      {children}
    </h1>
  );
};

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Title.defaultProps = {
  className: '',
};

export { Title };
