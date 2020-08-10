import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// import DisplayStyles from '../../../../utilities/Display/Display.module.scss';
// import PositionStyles from '../../../../utilities/Position/Position.module.scss';
// import zIndexStyles from '../../../../utilities/ZIndex/ZIndex.module.scss';
import styles from '../../Frame.module.scss';

const Body = ({ element, className, children, ...rest }) => {
  const Element = element;
  /*
    styles.body,
    DisplayStyles.md_bf_block,
    DisplayStyles.md_af_block,
    PositionStyles.md_bf_fixed,
    PositionStyles.md_af_fixed,
    zIndexStyles.md_bf_max,
    zIndexStyles.md_af_max, */
  const classes = classNames(
    styles.body,
    `md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 md:self-stretch md:h-full md:bg-white`,
    className,
  );

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

Body.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Body.defaultProps = {
  element: 'div',
  className: '',
};

export { Body };
