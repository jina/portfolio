import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Body } from './components';
import styles from './Frame.module.scss';

const Frame = ({ element, children, className, ...rest }) => {
  const Element = element;
  const classes = classNames(
    styles.wrapper,
    `md:relative z-0 md:grid md:h-full bg-white md:bg-black`,
    className,
  );

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

Frame.propTypes = {
  element: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Frame.defaultProps = {
  element: 'div',
  className: '',
};

Frame.Body = Body;

export { Frame };
