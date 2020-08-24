import React from 'react';

import { Card } from '../components/Card';
import { Heading } from '../components/Heading';
import { Prose } from '../components/Prose';

import { Circle } from '../layout/Circle';
import { Container } from '../layout/Container';
import { HolyGrail } from '../layout/HolyGrail';
import { Sticky } from '../layout/Sticky';

import DefaultLayout from '../site/DefaultLayout';
import { MarkdownContent } from '../site/MarkdownContent';

import flushStyles from '../layout/Flush/Flush.module.scss';
import spacingStyles from '../layout/Spacing/Spacing.module.scss';

import Image from '../assets/images/portrait.jpg';

import AboutData from '../../content/about.yml';
import TimelineData from '../../content/timeline.yml';

const AboutPage = () => {
  return (
    <DefaultLayout
      pageTitle="About Jina Anne"
      pageHTMLTitle="About Jina&nbsp;Anne"
      heroSidebarBefore={
        <Sticky className={`${flushStyles.x_xl} ${flushStyles.t_lg}`}>
          <Container mw="md">
            <Circle is_not sm_is lg_is_not>
              <img src={Image} alt="Portrait" />
            </Circle>
          </Container>
        </Sticky>
      }
      heroSidebarBeforeWide
      heroSidebarAfter={
        <>
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

          <Card heading="Support My Work">
            <Card.List>
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
      }
      heroChildren={
        <Prose className={spacingStyles.y_xxl}>
          <MarkdownContent className="lead" content={AboutData.lead} />

          <MarkdownContent content={AboutData.philosophy} />
        </Prose>
      }
      sidebarBefore={
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
      }
      sidebarBefore2={
        <Card heading="Community Projects">
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
      }
      sidebarAfter={
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
      }
      footer={
        <HolyGrail>
          <HolyGrail.Header>
            <Heading>Speaking</Heading>
          </HolyGrail.Header>

          <HolyGrail.Body>
            <HolyGrail.Sidebar wide>
              <Card heading="Upcoming" helement="h3">
                <ul>
                  {TimelineData.map((data, index) => {
                    if (data.event === true) {
                      if (data.upcoming === true) {
                        if (data.draft !== true) {
                          const ItemName =
                            data.url !== '' ? (
                              <a
                                href={data.url}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {data.name}
                              </a>
                            ) : (
                              data.name
                            );
                          return (
                            <li key={`timeline_item${index}`}>
                              <div className={spacingStyles.y_base}>
                                <h4>
                                  <strong>{ItemName}</strong> &mdash;{' '}
                                  {data.location}
                                </h4>

                                <ul>
                                  {data.presentations.map((p, index) => {
                                    return (
                                      <li key={`p_item${index}`}>{p.title}</li>
                                    );
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
            </HolyGrail.Sidebar>

            <HolyGrail.Content>
              <Prose>
                <MarkdownContent content={AboutData.invite} />
              </Prose>
            </HolyGrail.Content>

            <HolyGrail.Sidebar>
              <Card heading="Information">
                <Card.List>
                  {AboutData.speaking.map((s, index) => {
                    return (
                      <Card.Item
                        key={`s-${index}`}
                        href={s.url}
                        text={s.name}
                      />
                    );
                  })}
                </Card.List>
              </Card>
            </HolyGrail.Sidebar>
          </HolyGrail.Body>
        </HolyGrail>
      }
    >
      <div className={spacingStyles.y_lg}>
        <Heading>Experience</Heading>

        <Prose className={spacingStyles.y_lg}>
          <MarkdownContent
            className="lead"
            content={AboutData.experience.lead}
          />

          <MarkdownContent content={AboutData.experience.content} />
        </Prose>
      </div>
    </DefaultLayout>
  );
};

export default AboutPage;
