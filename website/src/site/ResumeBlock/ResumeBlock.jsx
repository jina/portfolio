import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Heading } from '../../components/Heading';

import { Item, NestedList, NestedListItem } from './components';

const ResumeBlock = ({ heading, children, className, ...rest }) => {
  const classes = classNames(`space-y-6`, className);

  return (
    <section className={classes} {...rest}>
      <Heading>{heading}</Heading>

      <ul className="space-y-6">{children}</ul>
    </section>
  );
};

ResumeBlock.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node.isRequired,
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
