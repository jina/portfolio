import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from '../../ResumeBlock.module.scss';
import spacingStyles from '../../../../layout/Spacing/Spacing.module.scss';

const NestedList = ({ children, className, ...rest }) => {
  const classes = classNames(styles.list, spacingStyles.y_sm, className);
  return (
    <ul className={classes} {...rest}>
      {children}
    </ul>
  );
};

NestedList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

NestedList.defaultProps = {
  className: '',
};

export { NestedList };
