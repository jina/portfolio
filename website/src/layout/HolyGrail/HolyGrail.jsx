import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Body, Content, Footer, Header, Sidebar } from './components';

import styles from './HolyGrail.module.scss';

const HolyGrail = ({ element, className, children, ...rest }) => {
  const Element = element;
  const classes = classNames(styles.wrapper, className);

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

HolyGrail.Body = Body;
HolyGrail.Content = Content;
HolyGrail.Footer = Footer;
HolyGrail.Header = Header;
HolyGrail.Sidebar = Sidebar;

HolyGrail.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

HolyGrail.defaultProps = {
  element: 'div',
  className: '',
};

export { HolyGrail };
