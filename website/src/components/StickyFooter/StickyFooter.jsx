import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Body, Footer } from './components';

const StickyFooter = ({ element, className, children, ...rest }) => {
  const Element = element;
  const classes = classNames(`flex flex-col h-full`, className);

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

StickyFooter.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

StickyFooter.defaultProps = {
  element: 'div',
  className: '',
};

StickyFooter.Body = Body;
StickyFooter.Footer = Footer;

export { StickyFooter };
