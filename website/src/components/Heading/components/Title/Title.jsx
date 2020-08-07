import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from '../../Heading.module.scss';

const Title = ({ className, children, ...rest }) => {
  const classes = classNames(
    styles.title,
    `italic text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-none font-serif uppercase tracking-tight`,
    className,
  );

  return (
    <h1 className={classes} {...rest}>
      {children}
    </h1>
  );
};

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Title.defaultProps = {
  className: '',
};

export { Title };
