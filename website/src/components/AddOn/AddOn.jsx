import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Body, Item } from './components';

const AddOn = ({ element, children, spacing, align, className, ...rest }) => {
  const Element = element;
  const classes = classNames(
    `md:flex`,
    spacing && `md:space-x-${spacing}`,
    align && `md:items-${align}`,
    className,
  );

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

AddOn.propTypes = {
  element: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  spacing: PropTypes.oneOf([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    8,
    10,
    12,
    16,
    20,
    24,
    32,
    40,
    48,
    56,
    64,
  ]),
  align: PropTypes.string,
};

AddOn.defaultProps = {
  element: 'div',
  className: '',
  align: '',
};

AddOn.Body = Body;
AddOn.Item = Item;

export { AddOn };
