import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Heading } from '../../components/Heading';

import { Item, NestedList, NestedListItem } from './components';

import spacingStyles from '../../layout/Spacing/Spacing.module.scss';

const ResumeBlock = ({ heading, children, className, ...rest }) => {
  const classes = classNames(spacingStyles.y_lg, className);

  return (
    <section className={classes} {...rest}>
      <Heading>{heading}</Heading>

      <ul className={spacingStyles.y_lg}>{children}</ul>
    </section>
  );
};

ResumeBlock.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

ResumeBlock.defaultProps = {
  heading: '',
  className: '',
};

ResumeBlock.Item = Item;
ResumeBlock.NestedList = NestedList;
ResumeBlock.NestedListItem = NestedListItem;

export { ResumeBlock };
