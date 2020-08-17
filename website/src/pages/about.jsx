import React from 'react';

import { Card } from '../components/Card';
import { Heading } from '../components/Heading';
import { Image } from '../components/Image';
import { Prose } from '../components/Prose';

import { Circle } from '../layout/Circle';
import { Container } from '../layout/Container';

import DefaultLayout from '../site/DefaultLayout';

import flushStyles from '../layout/Flush/Flush.module.scss';
import spacingStyles from '../layout/Spacing/Spacing.module.scss';

import AboutData from '../../content/about.yml';
import TimelineData from '../../content/timeline.yml';

const AboutPage = () => {
  return (
    <DefaultLayout
      pageTitle="About Jina Anne"
      pageHTMLTitle="About Jina&nbsp;Anne"
      heroSidebarBefore={(
        <>
          <div className={`${flushStyles.x_xl} ${flushStyles.t_lg}`}>
            <Container mw="md">
              <Circle is_not sm_is lg_is_not>
                <Image />
              </Circle>
            </Container>
          </div>

          <Card heading="Support My Work">
            <Card.List divide>
              {AboutData.support.map((data, index) => {
                return (
                  <Card.Item
                    key={`support_item_${index}`}
                    href={data.url}
                    text={data.name}
                  />
                );
              })}
            </Card.List>
          </Card>
        </>
      )}
      heroSidebarBeforeWide
      heroSidebarAfter={(
        <Card heading="Connect">
          <Card.List>
            {AboutData.connect.map((data, index) => {
              return (
                <Card.Item
                  key={`connext_${index}`}
                  href={data.url}
                  text={data.name}
                />
              );
            })}
          </Card.List>
        </Card>
      )}
      heroChildren={(
        <div className={spacingStyles.y_xxl}>
          <Prose>
            <p
              className="lead"
              dangerouslySetInnerHTML={{ __html: AboutData.bio.lead }}
            />

            <div
              className={spacingStyles.y_lg}
              dangerouslySetInnerHTML={{ __html: AboutData.bio.full }}
            />
          </Prose>
        </div>
      )}
      sidebarBefore={(
        <Card heading="Open Source Projects">
          <Card.List block>
            {AboutData.open_source.map((data, index) => {
              return (
                <Card.Item
                  key={`open_source_${index}`}
                  href={data.url}
                  text={data.name}
                />
              );
            })}
          </Card.List>
        </Card>
      )}
      sidebarBefore2={(
        <Card heading="Other Community Projects">
          <Card.List block>
            {AboutData.community.map((data, index) => {
              return (
                <Card.Item
                  key={`community_${index}`}
                  href={data.url}
                  text={data.name}
                />
              );
            })}
          </Card.List>
        </Card>
      )}
      sidebarAfter={(
        <Card heading="Collaborations">
          <Card.List>
            {AboutData.collaborations.map((data, index) => {
              return (
                <Card.Item
                  key={`collaborator_${index}`}
                  href={data.url}
                  text={data.name}
                />
              );
            })}
          </Card.List>
        </Card>
      )}
    >
      <Heading>Speaking</Heading>

      <div className={spacingStyles.y_xxl}>
        <Card heading="Upcoming">
          <ul>
            {TimelineData.map((data, index) => {
              if (data.event === true) {
                if (data.upcoming === true) {
                  if (data.draft !== true) {
                    const ItemName =
                      data.url !== '' ? (
                        <a href={data.url} target="_blank" rel="noreferrer">
                          {data.name}
                        </a>
                      ) : (
                        data.name
                      );
                    return (
                      <li key={`timeline_item${index}`}>
                        <div className={spacingStyles.y_base}>
                          <h4>
                            <strong>{ItemName}</strong> &mdash; {data.location}
                          </h4>

                          <ul>
                            {data.presentations.map((p, index) => {
                              return <li key={`p_item${index}`}>{p.title}</li>;
                            })}
                          </ul>
                        </div>
                      </li>
                    );
                  }
                  return '';
                }
                return '';
              }
              return '';
            })}
          </ul>
        </Card>

        <Card heading="Invite Me to Speak">
          <Prose
            spacing="lg"
            dangerouslySetInnerHTML={{ __html: AboutData.invite }}
          />
        </Card>
      </div>
    </DefaultLayout>
  );
};

export default AboutPage;
