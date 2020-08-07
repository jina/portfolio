import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Heading } from '../Heading';
import { HolyGrail } from '../HolyGrail';

const Hero = ({
  element,
  className,
  children,
  heading,
  description,
  sidebarLeft,
  sidebarLeftWide,
  sidebarRight,
  banner,
  ...rest
}) => {
  const classes = classNames(className);

  return (
    <HolyGrail element={element} className={classes} {...rest}>
      {banner && <HolyGrail.Header>{banner}</HolyGrail.Header>}

      <HolyGrail.Body>
        {sidebarLeft && (
          <HolyGrail.SidebarLeft wide={sidebarLeftWide}>
            {sidebarLeft}
          </HolyGrail.SidebarLeft>
        )}

        <HolyGrail.Content>
          <div className="space-y-12">
            <div className="space-y-6">
              {heading && <Heading.Title>{heading}</Heading.Title>}

              {description && (
                <p dangerouslySetInnerHTML={{ __html: description }} />
              )}
            </div>

            {children && <>{children}</>}
          </div>
        </HolyGrail.Content>

        {sidebarRight && (
          <HolyGrail.SidebarRight>{sidebarRight}</HolyGrail.SidebarRight>
        )}
      </HolyGrail.Body>
    </HolyGrail>
  );
};

Hero.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  heading: PropTypes.node,
  description: PropTypes.string,
  sidebarLeft: PropTypes.node,
  sidebarRight: PropTypes.node,
  sidebarLeftWide: PropTypes.bool,
  banner: PropTypes.node,
};

Hero.defaultProps = {
  element: 'div',
  description: '',
  className: '',
  sidebarLeftWide: false,
};

export { Hero };
