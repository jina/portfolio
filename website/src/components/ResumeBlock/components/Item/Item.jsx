import React from 'react';
import PropTypes from 'prop-types';

import { Heading } from '../../../Heading';

const Item = ({
  key,
  heading,
  location,
  dates,
  description,
  children,
  ...rest
}) => {
  return (
    <li key={key} className="space-y-3" {...rest}>
      <div>
        <Heading.Small dangerouslySetInnerHTML={{ __html: heading }} />

        {location && <p>{location}</p>}

        {dates && (
          <p
            className="text-gray-700"
            dangerouslySetInnerHTML={{ __html: dates }}
          />
        )}
      </div>

      {children}

      {description && (
        <div
          className="pl-8 space-y-1 text-gray-700"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </li>
  );
};

Item.propTypes = {
  key: PropTypes.string,
  heading: PropTypes.string,
  location: PropTypes.string,
  dates: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Item.defaultProps = {
  key: '',
  heading: '',
  location: '',
  dates: '',
  description: '',
};

export { Item };
