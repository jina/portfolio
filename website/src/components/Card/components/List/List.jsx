import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from '../../Card.module.scss';
import flushStyles from '../../../../layout/Flush/Flush.module.scss';

const List = ({ className, children, block, divide, columns, ...rest }) => {
  const classes = classNames(
    styles.list,
    flushStyles.x_md,
    block && styles.block,
    divide && styles.divide,
    columns && styles.columns,
    className,
  );

  return (
    <ul className={classes} {...rest}>
      {children}
    </ul>
  );
};

List.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  block: PropTypes.bool,
  divide: PropTypes.bool,
  columns: PropTypes.bool,
};

List.defaultProps = {
  className: '',
  block: false,
  divide: false,
  columns: false,
};

export { List };
