import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import PropTypes from 'prop-types';

import { CodeBlock } from '../components/CodeBlock';
import { Hero } from '../components/Hero';
import { LinkButton } from '../components/LinkButton';

import { AddOn } from '../layout/AddOn';
import { Container } from '../layout/Container';
import { Frame } from '../layout/Frame';
import { HolyGrail } from '../layout/HolyGrail';
import { Horizontal } from '../layout/Horizontal';
import { StickyFooter } from '../layout/StickyFooter';

import { SEO } from './SEO';

import LayoutData from '../../content/layout.yml';

const components = {
  pre: ({ children }) => children,
  code: CodeBlock,
};

const DefaultLayout = ({
  pageTitle,
  pageHTMLTitle,
  pageDescription,
  children,
  header,
  sidebarLeft,
  sidebarLeftWide,
  sidebarRight,
  footer,
  heroElement,
  heroSidebarLeft,
  heroSidebarLeftWide,
  heroSidebarRight,
  heroChildren,
  banner,
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
    <Frame>
      <SEO title={pageTitle} description={pageDescription} />

      <Frame.Body element={Container} className="tracking-wide text-black">
        <StickyFooter>
          <StickyFooter.Body>
            <HolyGrail>
              <HolyGrail.Header>
                <AddOn spacing={4} align="center">
                  <AddOn.Item role="banner">
                    <div className="-mx-4">
                      <LinkButton caps bold>
                        {data.site.siteMetadata.title}
                      </LinkButton>
                    </div>
                  </AddOn.Item>

                  <AddOn.Body role="navigation" element="nav">
                    <Horizontal
                      spacing={2}
                      justifyContent="end"
                      className="-mx-4"
                    >
                      {LayoutData.header.map((data, index) => {
                        return (
                          <Horizontal.Item key={`header_link_${index}`}>
                            <LinkButton caps bold to={data.url}>
                              {data.htmlTitle !== undefined ? (
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: data.htmlTitle,
                                  }}
                                />
                              ) : (
                                data.title
                              )}
                            </LinkButton>
                          </Horizontal.Item>
                        );
                      })}

                      <Horizontal.Item>
                        <address className="not-italic">
                          <LinkButton
                            caps
                            bold
                            href="mailto:&#106;&#105;&#110;&#97;&#64;&#100;&#101;&#115;&#105;&#103;&#110;&#46;&#115;&#121;&#115;&#116;&#101;&#109;&#115;"
                          >
                            &#106;&#105;&#110;&#97;&#64;&#100;&#101;&#115;&#105;&#103;&#110;&#46;&#115;&#121;&#115;&#116;&#101;&#109;&#115;
                          </LinkButton>
                        </address>
                      </Horizontal.Item>
                    </Horizontal>
                  </AddOn.Body>
                </AddOn>
              </HolyGrail.Header>

              <HolyGrail.Body>
                <Hero
                  element={heroElement}
                  heading={
                    pageHTMLTitle !== '' ? (
                      <span
                        dangerouslySetInnerHTML={{ __html: pageHTMLTitle }}
                      />
                    ) : (
                      pageTitle
                    )
                  }
                  description={pageDescription}
                  sidebarLeft={heroSidebarLeft}
                  sidebarLeftWide={heroSidebarLeftWide}
                  sidebarRight={heroSidebarRight}
                  banner={banner}
                >
                  {heroChildren}
                </Hero>
              </HolyGrail.Body>
              <HolyGrail>
                {header && (
                  <HolyGrail.Header className="px-4 md:px-8">
                    {header}
                  </HolyGrail.Header>
                )}

                <HolyGrail.Body>
                  <HolyGrail.Content className="px-4 md:px-8">
                    <MDXProvider components={components}>
                      {children}
                    </MDXProvider>
                  </HolyGrail.Content>

                  {sidebarRight && (
                    <HolyGrail.SidebarRight>
                      {sidebarRight}
                    </HolyGrail.SidebarRight>
                  )}

                  {sidebarLeft && (
                    <HolyGrail.SidebarLeft wide={sidebarLeftWide}>
                      {sidebarLeft}
                    </HolyGrail.SidebarLeft>
                  )}
                </HolyGrail.Body>

                {footer && (
                  <HolyGrail.Footer className="pt-24 px-4 md:px-8">
                    {footer}
                  </HolyGrail.Footer>
                )}
              </HolyGrail>
            </HolyGrail>
          </StickyFooter.Body>

          <StickyFooter.Footer className="text-gray-700">
            <HolyGrail.Footer>
              <AddOn spacing={4} align="center" className="py-6 ">
                <AddOn.Body role="contentinfo">
                  <p>
                    Copyright &copy; 2000&ndash;{new Date().getFullYear()}{' '}
                    {data.site.siteMetadata.title}
                  </p>
                </AddOn.Body>

                <AddOn.Item>
                  <Horizontal
                    spacing={2}
                    justifyContent="end"
                    className="-mx-4"
                  >
                    {LayoutData.footer.map((data, index) => {
                      return (
                        <Horizontal.Item key={`footer_link_${index}`}>
                          <LinkButton href={data.url}>
                            {data.htmlTitle !== undefined ? (
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: data.htmlTitle,
                                }}
                              />
                            ) : (
                              data.title
                            )}
                          </LinkButton>
                        </Horizontal.Item>
                      );
                    })}
                  </Horizontal>
                </AddOn.Item>
              </AddOn>
            </HolyGrail.Footer>
          </StickyFooter.Footer>
        </StickyFooter>
      </Frame.Body>
    </Frame>
  );
};

DefaultLayout.propTypes = {
  pageTitle: PropTypes.string,
  pageHTMLTitle: PropTypes.node,
  children: PropTypes.node.isRequired,
  header: PropTypes.node,
  sidebarLeft: PropTypes.node,
  sidebarLeftWide: PropTypes.bool,
  sidebarRight: PropTypes.node,
  footer: PropTypes.node,
  heroElement: PropTypes.string,
  heroSidebarLeft: PropTypes.node,
  heroSidebarLeftWide: PropTypes.bool,
  heroSidebarRight: PropTypes.node,
  heroChildren: PropTypes.node,
  banner: PropTypes.node,
};

DefaultLayout.defaultProps = {
  pageTitle: '',
  pageHTMLTitle: '',
  sidebarLeftWide: false,
  heroElement: 'div',
  heroSidebarLeftWide: false,
};

export default DefaultLayout;
