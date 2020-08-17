import React from 'react';

import { Card } from '../components/Card';
import { Heading } from '../components/Heading';
import { Image } from '../components/Image';
import { LinkButton } from '../components/LinkButton';

import { Circle } from '../layout/Circle';
import { Container } from '../layout/Container';
import { HolyGrail } from '../layout/HolyGrail';

import DefaultLayout from '../site/DefaultLayout';
import { Logo } from '../site/Logo';

import styles from './index.module.scss';
import flushStyles from '../layout/Flush/Flush.module.scss';
import spacingStyles from '../layout/Spacing/Spacing.module.scss';

import AboutData from '../../content/about.yml';
import WorkData from '../../content/work.yml';

const IndexPage = () => {
  return (
    <DefaultLayout
      pageTitle="Design Systems, Communities, &amp;&nbsp;Experiences"
      pageDescription="Looking for a community-minded senior design lead who likes to&nbsp;code? Let&rsquo;s&nbsp;talk!"
      heroSidebarBefore={
        <div className={`${flushStyles.x_xl} ${flushStyles.y_lg}`}>
          <Container mw="xs">
            <Circle lg_is_not>
              <Image.PortraitDrawing />
            </Circle>
          </Container>
        </div>
      }
      sidebarAfter={
        <Card heading="Connect">
          <Card.List>
            {AboutData.connect.map((data, index) => {
              return (
                <li key={`connect_item_${index}`}>
                  <LinkButton full href={data.url}>
                    {data.name}
                  </LinkButton>
                </li>
              );
            })}
          </Card.List>
        </Card>
      }
      sidebarAfterOrder="first"
    >
      <ul className={`${flushStyles.x_xl} ${flushStyles.y_xxl}`}>
        {WorkData.filter((data) => data.draft !== true).map((data, index) => {
          const evenOdd = !(index !== -1 && index % 2 === 0);
          const LogoElement = Image[data.logo];
          const ImageElement = Image[data.image];
          return (
            <li key={`project_${index}`}>
              <HolyGrail>
                <HolyGrail.Body>
                  <HolyGrail.Sidebar
                    wide
                    self="center"
                    order={evenOdd === true ? `last` : `first`}
                  >
                    <Logo>
                      <LogoElement />
                    </Logo>
                  </HolyGrail.Sidebar>

                  <HolyGrail.Content>
                    <div className={`${flushStyles.x_md} ${flushStyles.y_sm}`}>
                      <LinkButton bhover full to={data.path}>
                        <div className={spacingStyles.y_lg}>
                          <Container mw="xl">
                            <ImageElement />
                          </Container>

                          <div className={spacingStyles.y_sm}>
                            <div className={spacingStyles.y_base}>
                              <Heading>
                                {data.htmlTitle !== undefined ? (
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: data.htmlTitle,
                                    }}
                                  />
                                ) : (
                                  data.title
                                )}
                              </Heading>

                              <p
                                dangerouslySetInnerHTML={{
                                  __html: data.description,
                                }}
                              />
                            </div>

                            <LinkButton.Subtle>
                              <ul>
                                {data.roles.map((role, index) => {
                                  return (
                                    <li
                                      className={styles.role}
                                      key={`role_${index}`}
                                    >
                                      <span
                                        dangerouslySetInnerHTML={{
                                          __html: role,
                                        }}
                                      />
                                    </li>
                                  );
                                })}
                              </ul>
                            </LinkButton.Subtle>
                          </div>
                        </div>
                      </LinkButton>
                    </div>
                  </HolyGrail.Content>
                </HolyGrail.Body>
              </HolyGrail>
            </li>
          );
        })}
      </ul>
    </DefaultLayout>
  );
};

export default IndexPage;
