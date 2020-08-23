import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import showdown from 'showdown';

import { Spacing } from '../../layout/Spacing';

const converter = new showdown.Converter({
  omitExtraWLInCodeBlocks: true,
  simplifiedAutoLink: true,
  excludeTrailingPunctuationFromURLs: true,
  openLinksInNewWindow: true,
  emoji: true,
});

const MarkdownContent = ({ className, spacing, content, ...rest }) => {
  const classes = classNames(className);

  return (
    <Spacing
      y={spacing}
      className={classes}
      {...rest}
      dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }}
    />
  );
};

MarkdownContent.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string,
  spacing: PropTypes.string,
};

MarkdownContent.defaultProps = {
  className: '',
  content: '',
  spacing: 'lg',
};

export { MarkdownContent };
