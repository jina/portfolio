import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  Header,
  Body,
  SidebarLeft,
  Content,
  SidebarRight,
  Footer,
} from './components';

const HolyGrail = ({ element, className, children, ...rest }) => {
  const Element = element;
  const classes = classNames(`flex flex-col w-full`, className);

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

HolyGrail.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

HolyGrail.defaultProps = {
  element: 'div',
  className: '',
};

HolyGrail.Header = Header;
HolyGrail.Body = Body;
HolyGrail.SidebarLeft = SidebarLeft;
HolyGrail.Content = Content;
HolyGrail.SidebarRight = SidebarRight;
HolyGrail.Footer = Footer;

export { HolyGrail };
