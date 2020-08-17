import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { LinkButton } from '../LinkButton';

import styles from './Pagination.module.scss';
import spacingStyles from '../../layout/Spacing/Spacing.module.scss';

const Pagination = ({ className, pto, nto, justify, ...rest }) => {
  const classes = classNames(
    styles.wrapper,
    spacingStyles.x_base,
    justify === '' ? styles.center : styles[justify],
    className,
  );

  return (
    <ul className={classes} {...rest}>
      <li>
        <LinkButton center primary to={pto}>
          Previous
        </LinkButton>
      </li>

      <li>
        <LinkButton center primary to={nto}>
          Next
        </LinkButton>
      </li>
    </ul>
  );
};

Pagination.propTypes = {
  className: PropTypes.string,
  justify: PropTypes.oneOf(['', 'center', 'end']),
  pto: PropTypes.string,
  nto: PropTypes.string,
};

Pagination.defaultProps = {
  className: '',
  justify: '',
  pto: '',
  nto: '',
};

export { Pagination };
