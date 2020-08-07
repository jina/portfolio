import React from 'react';
import PropTypes from 'prop-types';

const NestedList = ({ children, ...rest }) => {
  return (
    <ul className="pl-8 space-y-3 text-gray-700" {...rest}>
      {children}
    </ul>
  );
};

NestedList.propTypes = {
  children: PropTypes.node.isRequired,
};

export { NestedList };
