import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '../../layout/Container';

const Logo = ({ children }) => {
  return <Container logo>{children}</Container>;
};

Logo.propTypes = {
  children: PropTypes.node,
};

export { Logo };
