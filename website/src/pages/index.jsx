import React from 'react';

import { Card } from '../components/Card';
import DefaultLayout from '../components/DefaultLayout';
import { Heading } from '../components/Heading';
import { Image } from '../components/Image';
import { LinkButton } from '../components/LinkButton';
import { MediaObject } from '../components/MediaObject';

import AboutData from '../../content/about.yml';
import WorkData from '../../content/work.yml';

const IndexPage = () => {
  return (
    <DefaultLayout
      pageTitle="Design Systems, Communities, &amp; Experiences"
      pageDescription="Looking for a community-minded senior design lead who likes to code? Let&rsquo;s talk!"
      heroSidebarLeft={
        <div className="-my-6 -mx-4 md:-mx-8">
          <div className="mx-auto max-w-sm">
            <Image.PortraitDrawing />
          </div>
        </div>
      }
      sidebarLeft={
        <Card heading="Connect">
          <ul className="-mx-4">
            {AboutData.connect.map((data, index) => {
              return (
                <li key={`connect_item_${index}`}>
                  <LinkButton full href={data.url}>
                    {data.name}
                  </LinkButton>
                </li>
              );
            })}
          </ul>
        </Card>
      }
    >
      <ul className="-mx-4 space-y-6">
        {' '}
        {WorkData.filter((data) => data.draft !== true).map((data, index) => {
          const evenOdd = !(index !== -1 && index % 2 === 0);
          const LogoElement = Image[data.logo];
          const ImageElement = Image[data.image];
          return (
            <MediaObject
              element="li"
              className="space-y-3 lg:space-y-0 lg:space-x-8"
              key={`project_${index}`}
            >
              <MediaObject.Body reverse={evenOdd} className="self-center">
                <div className="mx-auto w-24 sm:w-48">
                  <LogoElement />
                </div>
              </MediaObject.Body>

              <MediaObject.Figure
                className="lg:w-3/4 xl:w-3/5"
                spacing={4}
                reverse={evenOdd}
              >
                <LinkButton
                  full
                  to={data.path}
                  interactiveBackground="black"
                  className="space-y-6"
                >
                  <ImageElement />

                  <div className="space-y-6">
                    <div className="space-y-3">
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

                      <div
                        dangerouslySetInnerHTML={{ __html: data.description }}
                      />
                    </div>

                    <dl className="text-gray-700 parent:hover:text-gray-600">
                      <dt className="inline mr-2">Roles:</dt>

                      <dd className="inline">
                        <ul className="inline">
                          {data.roles.map((role, index) => {
                            return (
                              <li
                                className="inline-block mr-2"
                                key={`role_${index}`}
                              >
                                <span
                                  dangerouslySetInnerHTML={{ __html: role }}
                                />
                              </li>
                            );
                          })}
                        </ul>
                      </dd>
                    </dl>
                  </div>
                </LinkButton>
              </MediaObject.Figure>
            </MediaObject>
          );
        })}
      </ul>
    </DefaultLayout>
  );
};

export default IndexPage;
