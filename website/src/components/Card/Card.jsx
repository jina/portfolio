import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Heading } from '../Heading';

import styles from './Card.module.scss';
import spacingStyles from '../../layout/Spacing/Spacing.module.scss';

import { List, Item } from './components';

const Card = ({ helement, className, children, heading, ...rest }) => {
  const classes = classNames(styles.wrapper, spacingStyles.y_sm, className);

  return (
    <div className={classes} {...rest}>
      {heading && (
        <Heading.Label
          element={helement}
          dangerouslySetInnerHTML={{ __html: heading }}
        />
      )}

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
  helement: PropTypes.string,
};

Card.defaultProps = {
  heading: '',
  helement: 'h2',
  className: '',
};

export { Card };
