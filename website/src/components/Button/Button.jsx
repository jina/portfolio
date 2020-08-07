import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({
  className,
  children,
  type,
  primary,
  secondary,
  caps,
  full,
  bold,
  ...rest
}) => {
  const variantClasses =
    primary !== true
      ? secondary !== true
        ? `hover:bg-gray-300 focus:bg-gray-300`
        : `bg-gray-200 hover:bg-gray-400 focus:bg-gray-400 shadow-xs`
      : `bg-gray-800 hover:bg-gray-900 focus:bg-gray-900 text-gray-100`;

  const sizeClasses = full !== true ? `md:inline-flex md:w-auto` : `text-left`;

  const classes = classNames(
    `block w-full py-3 px-4`,
    bold && `font-semibold`,
    caps && `uppercase tracking-wider`,
    sizeClasses,
    variantClasses,
    className,
  );

  return (
    // TODO: re-enable when this issue is fixed https://github.com/yannickcr/eslint-plugin-react/issues/1846
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  caps: PropTypes.bool,
  full: PropTypes.bool,
  bold: PropTypes.bool,
};

Button.defaultProps = {
  className: '',
  type: 'submit',
  primary: false,
  secondary: false,
  caps: false,
  full: false,
  bold: false,
};

export { Button };
