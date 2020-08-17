import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'gatsby';

import { Label, Small, Title } from './components';

import styles from './Heading.module.scss';

const Heading = ({ className, children, to, ...rest }) => {
  const classes = classNames(styles.wrapper, className);

  return (
    <h2 className={classes} {...rest}>
      {to !== '' ? <Link to={to}>{children}</Link> : children}
    </h2>
  );
};

Heading.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.node,
};

Heading.defaultProps = {
  className: '',
  to: '',
};

Heading.Label = Label;
Heading.Small = Small;
Heading.Title = Title;

export { Heading };
