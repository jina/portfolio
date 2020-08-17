import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { LinkButton } from '../../../LinkButton';

const Item = ({ className, href, to, text, ...rest }) => {
  const classes = classNames(className);

  return (
    <li className={classes} {...rest}>
      <LinkButton full href={href} to={to}>
        <span dangerouslySetInnerHTML={{ __html: text }} />
      </LinkButton>
    </li>
  );
};

Item.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.node,
};

Item.defaultProps = {
  href: '',
  to: '',
  className: '',
};

export { Item };
