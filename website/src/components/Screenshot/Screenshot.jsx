import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Button } from './components';

const Screenshot = ({ children, element, className, ...rest }) => {
  const Element = element;
  const classes = classNames(`overflow-hidden shadow-xl rounded`, className);

  return (
    <Element className={classes} {...rest}>
      <div className="flex space-x-1 p-2 bg-black">
        <Button />
        <Button />
        <Button />
      </div>

      {children}
    </Element>
  );
};

Screenshot.propTypes = {
  children: PropTypes.node,
  element: PropTypes.string,
  className: PropTypes.string,
};

Screenshot.defaultProps = {
  element: 'div',
  className: '',
};

export { Screenshot };
