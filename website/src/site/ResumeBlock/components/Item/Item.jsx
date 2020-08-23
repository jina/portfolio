import React from 'react';
import PropTypes from 'prop-types';

import { Heading } from '../../../../components/Heading';
import { MarkdownContent } from '../../../MarkdownContent';

import styles from '../../ResumeBlock.module.scss';
import spacingStyles from '../../../../layout/Spacing/Spacing.module.scss';

const Item = ({ heading, location, dates, description, children, ...rest }) => {
  return (
    <li {...rest} className={spacingStyles.y_sm}>
      <div>
        <Heading.Small dangerouslySetInnerHTML={{ __html: heading }} />

        {location && <MarkdownContent content={location} />}

        {dates && <MarkdownContent className={styles.dates} content={dates} />}
      </div>

      {children}

      {description && (
        <MarkdownContent
          className={styles.description}
          spacing="base"
          content={description}
        />
      )}
    </li>
  );
};

Item.propTypes = {
  heading: PropTypes.string,
  location: PropTypes.string,
  dates: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
};

Item.defaultProps = {
  heading: '',
  location: '',
  dates: '',
  description: '',
};

export { Item };
