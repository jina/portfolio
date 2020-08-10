import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Body } from './components';

// import DisplayStyles from '../../utilities/Display/Display.module.scss';
// import PositionStyles from '../../utilities/Position/Position.module.scss';
// import zIndexStyles from '../../utilities/ZIndex/ZIndex.module.scss';

import styles from './Frame.module.scss';

const Frame = ({ element, children, className, ...rest }) => {
  const Element = element;
  /*
    DisplayStyles.md_grid,
    DisplayStyles.md_bf_block,
    DisplayStyles.md_af_block,
    PositionStyles.md_bf_fixed,
    PositionStyles.md_af_fixed,
    zIndexStyles.md_bf_max,
    zIndexStyles.md_af_max, */
  const classes = classNames(
    styles.wrapper,
    `md:relative z-0 md:grid md:h-full bg-white md:bg-black`,
    className,
  );

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

Frame.propTypes = {
  element: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Frame.defaultProps = {
  element: 'div',
  className: '',
};

Frame.Body = Body;

export { Frame };
