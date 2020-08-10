import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Item } from './components';

// import displayStyles from '../../utilities/Display/Display.module.scss';

const Horizontal = ({
  element,
  className,
  children,
  spacing,
  justifyContent,
  ...rest
}) => {
  const Element = element;
  /* displayStyles.sm_flex, */
  const classes = classNames(
    `sm:flex`,
    spacing && `sm:space-x-${spacing}`,
    justifyContent && `sm:justify-${justifyContent}`,
    className,
  );

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

Horizontal.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
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
  justifyContent: PropTypes.string,
};

Horizontal.defaultProps = {
  element: 'ul',
  className: '',
};

Horizontal.Item = Item;

export { Horizontal };
