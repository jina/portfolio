import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import PropTypes from 'prop-types';

import { CodeBlock } from '../components/CodeBlock';
import { Heading } from '../components/Heading';
import { LinkButton } from '../components/LinkButton';
import { Prose } from '../components/Prose';
import { Navigation } from '../components/Navigation';

import { AddOn } from '../layout/AddOn';
import { Container } from '../layout/Container';
import { HolyGrail } from '../layout/HolyGrail';
import { Sticky } from '../layout/Sticky';

import { SEO } from './SEO';

import styles from './DefaultLayout.module.scss';
import flushStyles from '../layout/Flush/Flush.module.scss';
import spacingStyles from '../layout/Spacing/Spacing.module.scss';

import LayoutData from '../../content/layout.yml';

const components = {
  pre: ({ children }) => children,
  code: CodeBlock,
};

const DefaultLayout = ({
  children,
  footer,
  footerSidebarAfter,
  footerSidebarAfter2,
  footerSidebarAfterAlign,
  footerSidebarAfterAlign2,
  footerSidebarAfterWide,
  footerSidebarAfterWide2,
  footerSidebarBefore,
  footerSidebarBefore2,
  footerSidebarBeforeAlign,
  footerSidebarBeforeAlign2,
  footerSidebarBeforeWide,
  footerSidebarBeforeWide2,
  header,
  heroChildren,
  heroSidebarAfter,
  heroSidebarAfter2,
  heroSidebarAfterAlign,
  heroSidebarAfterAlign2,
  heroSidebarAfterWide,
  heroSidebarAfterWide2,
  heroSidebarBefore,
  heroSidebarBefore2,
  heroSidebarBeforeAlign,
  heroSidebarBeforeAlign2,
  heroSidebarBeforeWide,
  heroSidebarBeforeWide2,
  pageHTMLTitle,
  pageDescription,
  pageTitle,
  pagination,
  sidebarAfter,
  sidebarAfter2,
  sidebarAfterAlign,
  sidebarAfterAlign2,
  sidebarAfterOrder,
  sidebarAfterWide,
  sidebarAfterWide2,
  sidebarBefore,
  sidebarBefore2,
  sidebarBeforeAlign,
  sidebarBeforeAlign2,
  sidebarBeforeWide,
  sidebarBeforeWide2,
}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <div className={styles.wrapper}>
      <SEO title={pageTitle} description={pageDescription} />

      <Container className={styles.body}>
        <HolyGrail.Header className={styles.header}>
          <AddOn>
            <AddOn.Item role="banner">
              <div className={flushStyles.x_md}>
                <LinkButton caps bold to="/">
                  {data.site.siteMetadata.title}
                </LinkButton>
              </div>
            </AddOn.Item>

            <AddOn.Body>
              <Navigation>
                {LayoutData.header.map((data, index) => {
                  return (
                    <Navigation.Item
                      key={`header_link_${index}`}
                      caps
                      bold
                      to={data.url}
                    >
                      {data.htmlTitle !== undefined ? (
                        <span
                          dangerouslySetInnerHTML={{
                            __html: data.htmlTitle,
                          }}
                        />
                      ) : (
                        data.title
                      )}
                    </Navigation.Item>
                  );
                })}

                <li>
                  <address>
                    <LinkButton
                      caps
                      bold
                      href="mailto:&#106;&#105;&#110;&#97;&#64;&#100;&#101;&#115;&#105;&#103;&#110;&#46;&#115;&#121;&#115;&#116;&#101;&#109;&#115;"
                    >
                      &#106;&#105;&#110;&#97;&#64;&#100;&#101;&#115;&#105;&#103;&#110;&#46;&#115;&#121;&#115;&#116;&#101;&#109;&#115;
                    </LinkButton>
                  </address>
                </li>
              </Navigation>
            </AddOn.Body>
          </AddOn>
        </HolyGrail.Header>

        <div className={styles.content}>
          <HolyGrail>
            <HolyGrail.Header>
              <HolyGrail>
                <HolyGrail.Body>
                  {heroSidebarBefore && (
                    <HolyGrail.Sidebar
                      wide={heroSidebarBeforeWide}
                      self={heroSidebarBeforeAlign}
                    >
                      <Sticky t="lg" className={spacingStyles.y_lg}>
                        {heroSidebarBefore}
                      </Sticky>
                    </HolyGrail.Sidebar>
                  )}

                  {heroSidebarBefore2 && (
                    <HolyGrail.Sidebar
                      wide={heroSidebarBeforeWide2}
                      self={heroSidebarBeforeAlign2}
                    >
                      <Sticky t="lg" className={spacingStyles.y_lg}>
                        {heroSidebarBefore2}
                      </Sticky>
                    </HolyGrail.Sidebar>
                  )}

                  <HolyGrail.Content>
                    <Sticky t="lg" className={spacingStyles.y_lg}>
                      <Heading.Title>
                        {pageHTMLTitle !== null ? (
                          <span
                            dangerouslySetInnerHTML={{
                              __html: pageHTMLTitle,
                            }}
                          />
                        ) : (
                          pageTitle
                        )}
                      </Heading.Title>

                      <Prose>
                        {pageDescription && (
                          <p
                            dangerouslySetInnerHTML={{
                              __html: pageDescription,
                            }}
                          />
                        )}
                      </Prose>

                      {heroChildren}
                    </Sticky>
                  </HolyGrail.Content>

                  {heroSidebarAfter && (
                    <HolyGrail.Sidebar
                      wide={heroSidebarAfterWide}
                      self={heroSidebarAfterAlign}
                    >
                      <Sticky t="lg" className={spacingStyles.y_lg}>
                        {heroSidebarAfter}
                      </Sticky>
                    </HolyGrail.Sidebar>
                  )}

                  {heroSidebarAfter2 && (
                    <HolyGrail.Sidebar
                      wide={heroSidebarAfterWide2}
                      self={heroSidebarAfterAlign2}
                    >
                      <Sticky t="lg" className={spacingStyles.y_lg}>
                        {heroSidebarAfter2}
                      </Sticky>
                    </HolyGrail.Sidebar>
                  )}
                </HolyGrail.Body>

                {header && <HolyGrail.Footer>{header}</HolyGrail.Footer>}
              </HolyGrail>
            </HolyGrail.Header>

            <HolyGrail.Body>
              {sidebarBefore && (
                <HolyGrail.Sidebar
                  wide={sidebarBeforeWide}
                  self={sidebarBeforeAlign}
                >
                  <Sticky t="lg" className={spacingStyles.y_lg}>
                    {sidebarBefore}
                  </Sticky>
                </HolyGrail.Sidebar>
              )}

              {sidebarBefore2 && (
                <HolyGrail.Sidebar
                  wide={sidebarBeforeWide2}
                  self={sidebarBeforeAlign2}
                >
                  <Sticky t="lg" className={spacingStyles.y_lg}>
                    {sidebarBefore2}
                  </Sticky>
                </HolyGrail.Sidebar>
              )}

              <HolyGrail.Content>
                <Sticky t="lg" className={spacingStyles.y_lg}>
                  <MDXProvider components={components}>{children}</MDXProvider>
                </Sticky>
              </HolyGrail.Content>

              {sidebarAfter && (
                <HolyGrail.Sidebar
                  wide={sidebarAfterWide}
                  self={sidebarAfterAlign}
                  order={sidebarAfterOrder}
                >
                  <Sticky t="lg" className={spacingStyles.y_lg}>
                    {sidebarAfter}
                  </Sticky>
                </HolyGrail.Sidebar>
              )}

              {sidebarAfter2 && (
                <HolyGrail.Sidebar
                  wide={sidebarAfterWide2}
                  self={sidebarAfterAlign2}
                >
                  <Sticky t="lg" className={spacingStyles.y_lg}>
                    {sidebarAfter2}
                  </Sticky>
                </HolyGrail.Sidebar>
              )}
            </HolyGrail.Body>

            {footer && (
              <HolyGrail.Footer>
                <HolyGrail>
                  <HolyGrail.Body>
                    {footerSidebarBefore && (
                      <HolyGrail.Sidebar
                        wide={footerSidebarBeforeWide}
                        self={footerSidebarBeforeAlign}
                      >
                        <Sticky t="lg" className={spacingStyles.y_lg}>
                          {footerSidebarBefore}
                        </Sticky>
                      </HolyGrail.Sidebar>
                    )}

                    {footerSidebarBefore2 && (
                      <HolyGrail.Sidebar
                        wide={footerSidebarBeforeWide2}
                        self={footerSidebarBeforeAlign2}
                      >
                        <Sticky t="lg" className={spacingStyles.y_lg}>
                          {footerSidebarBefore2}
                        </Sticky>
                      </HolyGrail.Sidebar>
                    )}

                    <HolyGrail.Content>
                      <Sticky t="lg" className={spacingStyles.y_lg}>
                        {footer}
                      </Sticky>
                    </HolyGrail.Content>

                    {footerSidebarAfter && (
                      <HolyGrail.Sidebar
                        wide={footerSidebarAfterWide}
                        self={footerSidebarAfterAlign}
                      >
                        <Sticky t="lg" className={spacingStyles.y_lg}>
                          {footerSidebarAfter}
                        </Sticky>
                      </HolyGrail.Sidebar>
                    )}

                    {footerSidebarAfter2 && (
                      <HolyGrail.Sidebar
                        wide={footerSidebarAfterWide2}
                        self={footerSidebarAfterAlign2}
                      >
                        <Sticky t="lg" className={spacingStyles.y_lg}>
                          {footerSidebarAfter2}
                        </Sticky>
                      </HolyGrail.Sidebar>
                    )}
                  </HolyGrail.Body>
                </HolyGrail>
              </HolyGrail.Footer>
            )}

            {pagination && (
              <HolyGrail>
                <HolyGrail.Footer>{pagination}</HolyGrail.Footer>
              </HolyGrail>
            )}
          </HolyGrail>
        </div>

        <HolyGrail.Footer className={styles.footer}>
          <AddOn>
            <AddOn.Body role="contentinfo">
              <p>
                Copyright &copy; 2000&ndash;{new Date().getFullYear()}{' '}
                {data.site.siteMetadata.title}
              </p>
            </AddOn.Body>

            <AddOn.Item>
              <Navigation>
                {LayoutData.footer.map((data, index) => {
                  return (
                    <Navigation.Item
                      key={`footer_link_${index}`}
                      href={data.url}
                    >
                      {data.htmlTitle !== undefined ? (
                        <span
                          dangerouslySetInnerHTML={{
                            __html: data.htmlTitle,
                          }}
                        />
                      ) : (
                        data.title
                      )}
                    </Navigation.Item>
                  );
                })}
              </Navigation>
            </AddOn.Item>
          </AddOn>
        </HolyGrail.Footer>
      </Container>
    </div>
  );
};

const Aligns = ['', 'auto', 'start', 'end', 'center', 'stretch'];

DefaultLayout.propTypes = {
  children: PropTypes.node,
  footer: PropTypes.node,
  footerSidebarAfter: PropTypes.node,
  footerSidebarAfter2: PropTypes.node,
  footerSidebarAfterAlign: PropTypes.oneOf(Aligns),
  footerSidebarAfterAlign2: PropTypes.oneOf(Aligns),
  footerSidebarAfterWide: PropTypes.node,
  footerSidebarAfterWide2: PropTypes.node,
  footerSidebarBefore: PropTypes.node,
  footerSidebarBefore2: PropTypes.node,
  footerSidebarBeforeAlign: PropTypes.oneOf(Aligns),
  footerSidebarBeforeAlign2: PropTypes.oneOf(Aligns),
  footerSidebarBeforeWide: PropTypes.bool,
  footerSidebarBeforeWide2: PropTypes.bool,
  header: PropTypes.node,
  heroChildren: PropTypes.node,
  heroSidebarAfter: PropTypes.node,
  heroSidebarAfter2: PropTypes.node,
  heroSidebarAfterAlign: PropTypes.oneOf(Aligns),
  heroSidebarAfterAlign2: PropTypes.oneOf(Aligns),
  heroSidebarAfterWide: PropTypes.node,
  heroSidebarAfterWide2: PropTypes.node,
  heroSidebarBefore: PropTypes.node,
  heroSidebarBefore2: PropTypes.node,
  heroSidebarBeforeAlign: PropTypes.oneOf(Aligns),
  heroSidebarBeforeAlign2: PropTypes.oneOf(Aligns),
  heroSidebarBeforeWide: PropTypes.bool,
  heroSidebarBeforeWide2: PropTypes.bool,
  pageHTMLTitle: PropTypes.node,
  pageDescription: PropTypes.node,
  pageTitle: PropTypes.string,
  pagination: PropTypes.node,
  sidebarAfter: PropTypes.node,
  sidebarAfter2: PropTypes.node,
  sidebarAfterAlign: PropTypes.oneOf(Aligns),
  sidebarAfterAlign2: PropTypes.oneOf(Aligns),
  sidebarAfterOrder: PropTypes.string,
  sidebarAfterWide: PropTypes.bool,
  sidebarAfterWide2: PropTypes.node,
  sidebarBefore: PropTypes.node,
  sidebarBefore2: PropTypes.node,
  sidebarBeforeAlign: PropTypes.oneOf(Aligns),
  sidebarBeforeAlign2: PropTypes.oneOf(Aligns),
  sidebarBeforeWide: PropTypes.bool,
  sidebarBeforeWide2: PropTypes.bool,
};

DefaultLayout.defaultProps = {
  footerSidebarAfterAlign: '',
  footerSidebarAfterAlign2: '',
  footerSidebarAfterWide: false,
  footerSidebarAfterWide2: false,
  footerSidebarBeforeAlign: '',
  footerSidebarBeforeAlign2: '',
  footerSidebarBeforeWide: false,
  footerSidebarBeforeWide2: false,
  heroSidebarAfterAlign: '',
  heroSidebarAfterAlign2: '',
  heroSidebarAfterWide: false,
  heroSidebarAfterWide2: false,
  heroSidebarBeforeAlign: '',
  heroSidebarBeforeAlign2: '',
  heroSidebarBeforeWide: false,
  heroSidebarBeforeWide2: false,
  pageHTMLTitle: null,
  pageTitle: '',
  sidebarAfterAlign: '',
  sidebarAfterAlign2: '',
  sidebarAfterOrder: '',
  sidebarAfterWide: false,
  sidebarAfterWide2: false,
  sidebarBeforeAlign: '',
  sidebarBeforeAlign2: '',
  sidebarBeforeWide: false,
  sidebarBeforeWide2: false,
};

export default DefaultLayout;
