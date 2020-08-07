import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'gatsby';

const LinkButton = ({
  element,
  className,
  children,
  primary,
  secondary,
  interactiveBackground,
  caps,
  href,
  to,
  full,
  bold,
  ...rest
}) => {
  const Element = element;
  const variantClasses =
    primary !== true
      ? secondary !== true
        ? `${
            interactiveBackground !== ''
              ? `hover:bg-${interactiveBackground} focus:bg-${interactiveBackground} hover:text-white focus:text-white`
              : `hover:bg-gray-300 focus:bg-gray-300`
          }`
        : `bg-gray-200 hover:bg-gray-400 focus:bg-gray-400 shadow-xs`
      : `hover:bg-gray-900 focus:bg-gray-900 bg-black text-white`;

  const sizeClasses = full !== true ? `md:inline-flex` : `w-full`;

  const baseClasses = classNames(
    `block py-3 px-4`,
    bold && `font-semibold`,
    caps && `uppercase tracking-wider`,
    sizeClasses,
    className,
  );

  const linkClasses = classNames(baseClasses, variantClasses);

  if (to) {
    return (
      <Link
        className={linkClasses}
        activeClassName="bg-black hover:bg-black focus:bg-black text-white cursor-default pointer-events-none"
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

LinkButton.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  interactiveBackground: PropTypes.string,
  full: PropTypes.bool,
  bold: PropTypes.bool,
};

LinkButton.defaultProps = {
  element: 'span',
  className: '',
  to: '',
  href: '',
  primary: false,
  secondary: false,
  interactiveBackground: '',
  full: false,
  bold: false,
};

export { LinkButton };
