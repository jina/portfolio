import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from '../../Grid.module.scss';

const Column = ({ element, className, children, autoSize, ...rest }) => {
  const Element = element;
  const classes = classNames(
    styles.column,
    `flex-1`,
    autoSize && `flex-none`,
    className,
  );

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

Column.propTypes = {
  element: PropTypes.string,
  autoSize: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Column.defaultProps = {
  element: 'div',
  className: '',
  autoSize: false,
};

export { Column };
