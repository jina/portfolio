import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'gatsby';

import { Label, Small, Title } from './components';

const Heading = ({ level, element, className, children, to, ...rest }) => {
  const Element = element || `h${level}`;
  const classes = classNames(
    `italic text-2xl leading-tight font-serif tracking-tight`,
    className,
  );

  return (
    <Element className={classes} {...rest}>
      {to !== '' ? <Link to={to}>{children}</Link> : children}
    </Element>
  );
};

Heading.propTypes = {
  level: PropTypes.oneOf([2, 3, 4, 5, 6]),
  element: PropTypes.string,
  className: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Heading.defaultProps = {
  element: '',
  className: '',
  level: 2,
  to: '',
};

Heading.Label = Label;
Heading.Small = Small;
Heading.Title = Title;

export { Heading };
