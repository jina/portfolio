import React from 'react';
import PropTypes from 'prop-types';

import { Heading } from '../../../../components/Heading';

import styles from '../../ResumeBlock.module.scss';
import spacingStyles from '../../../../layout/Spacing/Spacing.module.scss';

const Item = ({ heading, location, dates, description, children, ...rest }) => {
  return (
    <li {...rest} className={spacingStyles.y_sm}>
      <div>
        <Heading.Small dangerouslySetInnerHTML={{ __html: heading }} />

        {location && <p dangerouslySetInnerHTML={{ __html: location }} />}

        {dates && (
          <p
            className={styles.dates}
            dangerouslySetInnerHTML={{ __html: dates }}
          />
        )}
      </div>

      {children}

      {description && (
        <div
          className={`${styles.description} ${spacingStyles.y_base}`}
          dangerouslySetInnerHTML={{ __html: description }}
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
