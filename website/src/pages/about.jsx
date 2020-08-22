import React from 'react';

import { Card } from '../components/Card';
import { Heading } from '../components/Heading';
import { Prose } from '../components/Prose';

import { Circle } from '../layout/Circle';
import { Container } from '../layout/Container';

import DefaultLayout from '../site/DefaultLayout';

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
        <div className={`${flushStyles.x_xl} ${flushStyles.t_lg}`}>
          <Container mw="md">
            <Circle is_not sm_is lg_is_not>
              <img src={Image} alt="Portrait" />
            </Circle>
          </Container>
        </div>
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
        <div className={spacingStyles.y_xxl}>
          <Prose>
            <p
              className="lead"
              dangerouslySetInnerHTML={{ __html: AboutData.bio.lead }}
            />

            <Heading>My Outlook</Heading>

            {AboutData.bio.philosophy.map((data, index) => {
              return (
                <div className={spacingStyles.y_lg} key={`p_${index}`}>
                  <Heading.Small
                    dangerouslySetInnerHTML={{ __html: data.heading }}
                  />

                  <div dangerouslySetInnerHTML={{ __html: data.description }} />
                </div>
              );
            })}
          </Prose>
        </div>
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
        <Card heading="Invite Me to Speak" helement="h3">
          <Prose
            spacing="lg"
            dangerouslySetInnerHTML={{ __html: AboutData.invite }}
          />
        </Card>
      }
      footerSidebarBefore={
        <Card heading="Upcoming" helement="h3">
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
      }
      footerSidebarBeforeWide
      footerSidebarAfter={
        <Card heading="Information">
          <Card.List>
            <Card.Item
              href="https://github.com/jina/press/tree/master/bio"
              text="Biography"
            />
            <Card.Item href="https://noti.st/jina" text="Past Talks" />
          </Card.List>
        </Card>
      }
    >
      <Heading>Experience</Heading>
      <Prose>
        <p className="lead">
          I&rsquo;ve been designing and developing professionally for{' '}
          <strong>19&nbsp;years</strong> (and&nbsp;longer as a hobby for{' '}
          <strong>23&nbsp;years</strong>). I created my first design system{' '}
          <strong>16&nbsp;years</strong>&nbsp;ago.
        </p>

        <ul>
          <li>
            I&rsquo;ve worked in-house at Amazon, Salesforce, Apple, GitHub,
            etc. as&nbsp;well as some start ups and&nbsp;agencies.
          </li>

          <li>
            Consulting with companies including IBM, Pfizer, JustWorks,
            Spotify,&nbsp;etc.
          </li>

          <li>Start Up Advisory Boards: Haiku&nbsp;and&nbsp;Jobroo</li>

          <li>
            Workshops, Public&nbsp;Speaking (13&nbsp;years), Writing
            (several&nbsp;published articles and co-authored three&nbsp;books)
          </li>

          <li>
            Freelance partnerships with Superfriendly, Group&nbsp;of Humans,
            NineLabs, and&nbsp;Josh&nbsp;Silverman
          </li>
        </ul>
      </Prose>

      <Heading.Small>I call myself a Design Systems Advocate.</Heading.Small>

      <Prose>
        <ul>
          <li>Founder, Clarity</li>

          <li>Core Team Design/Website&nbsp;Lead, Sass</li>

          <li>Co-chair, Design&nbsp;Tokens W3C Community&nbsp;Group.</li>

          <li>Google Developers&nbsp;Expert</li>

          <li>Design.Systems (Coalition/Slack)</li>
        </ul>
      </Prose>

      <Heading>Biography</Heading>

      <div
        className={spacingStyles.y_lg}
        dangerouslySetInnerHTML={{ __html: AboutData.bio.full }}
      />

      <Heading>Speaking</Heading>
    </DefaultLayout>
  );
};

export default AboutPage;
