import React from 'react';
import PropTypes from 'prop-types';

import { LinkButton } from '../../../LinkButton';

import styles from '../../Navigation.module.scss';

const Item = ({ children, to, href, caps, bold }) => {
  return (
    <li className={styles.item}>
      <LinkButton to={to} href={href} caps={caps} bold={bold}>
        {children}
      </LinkButton>
    </li>
  );
};

Item.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  href: PropTypes.string,
  caps: PropTypes.bool,
  bold: PropTypes.bool,
};

Item.defaultProps = {
  to: '',
  href: '',
  caps: false,
  bold: false,
};

export { Item };
