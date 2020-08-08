import React from 'react';

import { Card } from '../components/Card';
import DefaultLayout from '../components/DefaultLayout';
import { Heading } from '../components/Heading';
import { Image } from '../components/Image';
import { LinkButton } from '../components/LinkButton';

import AboutData from '../../content/about.yml';
import TimelineData from '../../content/timeline.yml';

const AboutPage = () => {
  return (
    <DefaultLayout
      pageTitle="About Jina Anne"
      pageHTMLTitle="About Jina Anne" // not sure why this is required
      heroSidebarLeft={
        <div className="space-y-12">
          <div className="-mt-6 -mx-4 md:-mx-8">
            <div className="mx-auto max-w-lg">
              <Image />
            </div>
          </div>

          <Card heading="Other Community Projects">
            <ul className="-mx-4">
              {AboutData.community.map((data, index) => {
                return (
                  <li key={`community_${index}`}>
                    <LinkButton full href={`${data.url}`}>
                      {data.name}
                    </LinkButton>
                  </li>
                );
              })}
            </ul>
          </Card>

          <Card heading="Collaborations">
            <ul className="-mx-4">
              {AboutData.collaborations.map((data, index) => {
                return (
                  <li key={`collaborator_${index}`}>
                    <LinkButton full href={`${data.url}`}>
                      {data.name}
                    </LinkButton>
                  </li>
                );
              })}
            </ul>
          </Card>

          <Card heading="Open Source Projects">
            <ul className="-mx-4">
              {AboutData.open_source.map((data, index) => {
                return (
                  <li key={`open_source_${index}`}>
                    <LinkButton full href={`${data.url}`}>
                      <span dangerouslySetInnerHTML={{ __html: data.name }} />
                    </LinkButton>
                  </li>
                );
              })}
            </ul>
          </Card>
        </div>
      }
      heroSidebarLeftWide
      heroSidebarRight={
        <div className="space-y-12">
          <Card heading="Connect">
            <ul className="-mx-4">
              {AboutData.connect.map((data, index) => {
                return (
                  <li key={`connect_item_${index}`}>
                    <LinkButton full href={`${data.url}`}>
                      {data.name}
                    </LinkButton>
                  </li>
                );
              })}
            </ul>
          </Card>

          <Card heading="Support My Work">
            <ul className="-mx-4">
              {AboutData.support.map((data, index) => {
                return (
                  <li key={`support_item_${index}`}>
                    <LinkButton full href={`${data.url}`}>
                      {data.name}
                    </LinkButton>
                  </li>
                );
              })}
            </ul>
          </Card>
        </div>
      }
      heroChildren={
        <div className="space-y-12">
          <div className="prose space-y-6">
            <p
              className="space-y-6 lead"
              dangerouslySetInnerHTML={{ __html: AboutData.bio.lead }}
            />

            <div
              className="space-y-6"
              dangerouslySetInnerHTML={{ __html: AboutData.bio.full }}
            />
          </div>

          <div className="space-y-6">
            <Heading>Speaking</Heading>

            <div className="space-y-12">
              <Card heading="Upcoming" headingElement="h3">
                <ul className="space-y-3">
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
                            <li
                              key={`timeline_item${index}`}
                              className="space-y-1"
                            >
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

              <Card heading="Invite Me to Speak" headingElement="h3">
                <div
                  className="prose space-y-6"
                  dangerouslySetInnerHTML={{ __html: AboutData.invite }}
                />
              </Card>
            </div>
          </div>
        </div>
      }
      sidebarLeftWide
    />
  );
};

export default AboutPage;
