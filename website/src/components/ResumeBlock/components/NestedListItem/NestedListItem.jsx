import React from 'react';
import PropTypes from 'prop-types';

const NestedListItem = ({ key, role, dates, description, ...rest }) => {
  return (
    <li key={key} {...rest} className="space-y-3">
      <div>
        {role && (
          <h4
            className="font-bold"
            dangerouslySetInnerHTML={{ __html: role }}
          />
        )}

        {dates && <p dangerouslySetInnerHTML={{ __html: dates }} />}
      </div>

      {description && (
        <div
          className="prose space-y-2"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </li>
  );
};

NestedListItem.propTypes = {
  key: PropTypes.string,
  role: PropTypes.string,
  dates: PropTypes.string,
  description: PropTypes.string,
};

NestedListItem.defaultProps = {
  key: '',
  role: '',
  dates: '',
  description: '',
};

export { NestedListItem };
