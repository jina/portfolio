import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from '../../Frame.module.scss';

const Body = ({ element, className, children, ...rest }) => {
  const Element = element;
  const classes = classNames(
    styles.body,
    `md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 md:self-stretch md:h-full md:bg-white`,
    className,
  );

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

Body.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Body.defaultProps = {
  element: 'div',
  className: '',
};

export { Body };
