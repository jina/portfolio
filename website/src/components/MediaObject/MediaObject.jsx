import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Figure, Body } from './components';

const MediaObject = ({ element, children, className, alignItems, ...rest }) => {
  const Element = element;
  const classes = classNames(
    `lg:flex lg:items-start`,
    alignItems && `items${alignItems}`,
    className,
  );

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

MediaObject.propTypes = {
  element: PropTypes.string,
  alignItems: PropTypes.oneOf([
    'stretch',
    'start',
    'center',
    'end',
    'baseline',
  ]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

MediaObject.defaultProps = {
  element: 'div',
  className: '',
  alignItems: '',
};

MediaObject.Figure = Figure;
MediaObject.Body = Body;

export { MediaObject };
