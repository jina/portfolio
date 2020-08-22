import React from 'react';

import { Card } from '../components/Card';
import { Heading } from '../components/Heading';
import { LinkButton } from '../components/LinkButton';

import DefaultLayout from '../site/DefaultLayout';
import { ResumeBlock } from '../site/ResumeBlock';

import spacingStyles from '../layout/Spacing/Spacing.module.scss';

import CVData from '../../content/cv.yml';

const CVPage = () => {
  return (
    <DefaultLayout
      pageTitle="Curriculum Vitae"
      heroSidebarAfter={
        <div className={spacingStyles.y_lg}>
          <Heading>
            Contact <abbr title="Information">Info</abbr>
          </Heading>

          <address>
            Available upon request. (Send an email to:{` `}
            <a href="mailto:&#106;&#105;&#110;&#97;&#64;&#100;&#101;&#115;&#105;&#103;&#110;&#46;&#115;&#121;&#115;&#116;&#101;&#109;&#115;">
              &#106;&#105;&#110;&#97;&#64;&#100;&#101;&#115;&#105;&#103;&#110;&#46;&#115;&#121;&#115;&#116;&#101;&#109;&#115;
            </a>
            )
          </address>
        </div>
      }
      sidebarAfter={
        <ResumeBlock heading="Publications">
          {/* &amp; Presentations */}
          {CVData.publications_and_presentations.map((item, index) => {
            return (
              <ResumeBlock.Item
                key={`item__${index}`}
                heading={item.name}
                location={item.location}
                dates={item.dates}
                description={item.description}
              >
                {item.roles && (
                  <ResumeBlock.NestedList>
                    {item.roles.map((role, index) => {
                      return (
                        <ResumeBlock.NestedListItem
                          key={`role_${index}`}
                          role={role.role}
                          description={role.description}
                          dates={role.dates}
                        />
                      );
                    })}
                  </ResumeBlock.NestedList>
                )}
              </ResumeBlock.Item>
            );
          })}
        </ResumeBlock>
      }
      sidebarAfterWide
      sidebarAfterOrder="first"
      sidebarAfter2={
        <Card>
          <Heading>Skills</Heading>

          <Card.List>
            {CVData.skills.map((item, index) => {
              return (
                <li key={`item__${index}`}>
                  <LinkButton
                    dangerouslySetInnerHTML={{ __html: item.skill }}
                  />
                </li>
              );
            })}
          </Card.List>
        </Card>
      }
      footerSidebarBefore={
        <div className={spacingStyles.y_xxl}>
          <ResumeBlock heading="Awards &amp; Honors">
            {CVData.awards_and_honors.map((item, index) => {
              return (
                <ResumeBlock.Item
                  key={`item__${index}`}
                  heading={item.name}
                  location={item.location}
                  dates={item.dates}
                  description={item.description}
                >
                  {item.roles && (
                    <ResumeBlock.NestedList>
                      {item.roles.map((role, index) => {
                        return (
                          <ResumeBlock.NestedListItem
                            key={`role_${index}`}
                            role={role.role}
                            description={role.description}
                            dates={role.dates}
                          />
                        );
                      })}
                    </ResumeBlock.NestedList>
                  )}
                </ResumeBlock.Item>
              );
            })}
          </ResumeBlock>

          <ResumeBlock heading="Professional Associations">
            {CVData.professional_associations.map((item, index) => {
              return (
                <ResumeBlock.Item
                  key={`item__${index}`}
                  heading={item.name}
                  location={item.location}
                  dates={item.dates}
                  description={item.description}
                >
                  {item.roles && (
                    <ResumeBlock.NestedList>
                      {item.roles.map((role, index) => {
                        return (
                          <ResumeBlock.NestedListItem
                            key={`role_${index}`}
                            role={role.role}
                            description={role.description}
                            dates={role.dates}
                          />
                        );
                      })}
                    </ResumeBlock.NestedList>
                  )}
                </ResumeBlock.Item>
              );
            })}
          </ResumeBlock>
        </div>
      }
      footerSidebarBeforeWide
      footer={
        <div className={spacingStyles.y_xxl}>
          <ResumeBlock heading="Experience">
            {CVData.experience.map((item, index) => {
              return (
                <ResumeBlock.Item
                  key={`item__${index}`}
                  heading={item.name}
                  location={item.location}
                  dates={item.dates}
                  description={item.description}
                >
                  {item.roles && (
                    <ResumeBlock.NestedList>
                      {item.roles.map((role, index) => {
                        return (
                          <ResumeBlock.NestedListItem
                            key={`role_${index}`}
                            role={role.role}
                            description={role.description}
                            dates={role.dates}
                          />
                        );
                      })}
                    </ResumeBlock.NestedList>
                  )}
                </ResumeBlock.Item>
              );
            })}
          </ResumeBlock>

          <ResumeBlock heading="Advisory Boards">
            {CVData.advisor.map((item, index) => {
              return (
                <ResumeBlock.Item
                  key={`item__${index}`}
                  heading={item.name}
                  location={item.location}
                  dates={item.dates}
                  description={item.description}
                >
                  {item.roles && (
                    <ResumeBlock.NestedList>
                      {item.roles.map((role, index) => {
                        return (
                          <ResumeBlock.NestedListItem
                            key={`role_${index}`}
                            role={role.role}
                            description={role.description}
                            dates={role.dates}
                          />
                        );
                      })}
                    </ResumeBlock.NestedList>
                  )}
                </ResumeBlock.Item>
              );
            })}
          </ResumeBlock>
        </div>
      }
    >
      <ResumeBlock heading="Education">
        {CVData.education.map((item, index) => {
          return (
            <ResumeBlock.Item
              key={`item__${index}`}
              heading={item.name}
              location={item.location}
              dates={item.dates}
              description={item.description}
            >
              {item.roles && (
                <ResumeBlock.NestedList>
                  {item.roles.map((role, index) => {
                    return (
                      <ResumeBlock.NestedListItem
                        key={`role_${index}`}
                        role={role.role}
                        description={role.description}
                        dates={role.dates}
                      />
                    );
                  })}
                </ResumeBlock.NestedList>
              )}
            </ResumeBlock.Item>
          );
        })}
      </ResumeBlock>
    </DefaultLayout>
  );
};

export default CVPage;
