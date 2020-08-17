import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Link } from 'gatsby';

import { Subtle } from './components';

import styles from './LinkButton.module.scss';

const LinkButton = ({
  element,
  className,
  children,
  primary,
  caps,
  href,
  to,
  full,
  bold,
  center,
  bhover,
  ...rest
}) => {
  const Element = element;

  const sizeClasses = full === true ? styles.full : styles.not_full;

  const baseClasses = classNames(
    styles.wrapper,
    bold && styles.bold,
    caps && styles.caps,
    center && styles.center,
    sizeClasses,
    className,
  );

  const linkClasses = classNames(
    baseClasses,
    primary && styles.primary,
    bhover && styles.bhover,
  );

  if (to) {
    return (
      <Link
        className={linkClasses}
        activeClassName={styles.active}
        to={to}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        className={linkClasses}
        href={href}
        target="_blank"
        rel="noreferrer"
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Element className={baseClasses} {...rest}>
      {children}
    </Element>
  );
};

LinkButton.Subtle = Subtle;

LinkButton.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  full: PropTypes.bool,
  center: PropTypes.bool,
  bold: PropTypes.bool,
  bhover: PropTypes.bool,
  caps: PropTypes.bool,
};

LinkButton.defaultProps = {
  element: 'span',
  className: '',
  to: '',
  href: '',
  primary: false,
  center: false,
  full: false,
  bold: false,
  bhover: false,
  caps: false,
};

export { LinkButton };
