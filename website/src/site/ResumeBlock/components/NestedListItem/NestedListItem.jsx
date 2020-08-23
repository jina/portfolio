import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Prose } from '../../../../components/Prose';

import { MarkdownContent } from '../../../MarkdownContent';

import styles from '../../ResumeBlock.module.scss';
import spacingStyles from '../../../../layout/Spacing/Spacing.module.scss';

const NestedListItem = ({ className, role, dates, description, ...rest }) => {
  const classes = classNames(spacingStyles.y_sm, className);
  return (
    <li className={classes} {...rest}>
      <div>
        {role && (
          <h4
            className={styles.role_label}
            dangerouslySetInnerHTML={{ __html: role }}
          />
        )}

        {dates && <MarkdownContent content={dates} />}
      </div>

      {description && (
        <Prose>
          <MarkdownContent spacing="sm" content={description} />
        </Prose>
      )}
    </li>
  );
};

NestedListItem.propTypes = {
  role: PropTypes.string,
  dates: PropTypes.string,
  description: PropTypes.string,
};

NestedListItem.defaultProps = {
  role: '',
  dates: '',
  description: '',
};

export { NestedListItem };
