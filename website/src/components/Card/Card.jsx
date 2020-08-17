import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Heading } from '../Heading';

import styles from './Card.module.scss';
import spacingStyles from '../../layout/Spacing/Spacing.module.scss';

import { List, Item } from './components';

const Card = ({ className, children, heading, ...rest }) => {
  const classes = classNames(styles.wrapper, spacingStyles.y_sm, className);

  return (
    <div className={classes} {...rest}>
      {heading && <Heading.Label>{heading}</Heading.Label>}

      {children}
    </div>
  );
};

Card.List = List;
Card.Item = Item;

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  heading: PropTypes.string,
};

Card.defaultProps = {
  heading: '',
  className: '',
};

export { Card };
