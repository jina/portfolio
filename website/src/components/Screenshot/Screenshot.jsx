import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Button } from './components';

import styles from './Screenshot.module.scss';
import spacingStyles from '../../layout/Spacing/Spacing.module.scss';

const Screenshot = ({ children, className, ...rest }) => {
  const classes = classNames(styles.wrapper, className);

  return (
    <div className={classes} {...rest}>
      <div className={`${styles.header} ${spacingStyles.x_base}`}>
        <Button />

        <Button />

        <Button />
      </div>

      {children}
    </div>
  );
};

Screenshot.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Screenshot.defaultProps = {
  className: '',
};

export { Screenshot };
