import React from 'react';

import DefaultLayout from '../components/DefaultLayout';
import { Heading } from '../components/Heading';
import { ResumeBlock } from '../components/ResumeBlock';

import CVData from '../../content/cv.yml';

const CVPage = () => {
  return (
    <DefaultLayout
      pageTitle="Curriculum Vitae"
      heroSidebarRight={
        <dl className="space-y-6">
          <Heading element="dt">
            Contact <abbr title="Information">Info</abbr>
          </Heading>

          <dd>
            <address className="not-italic">
              Available upon request. (Send an email to:{` `}
              <a href="mailto:&#106;&#105;&#110;&#97;&#64;&#100;&#101;&#115;&#105;&#103;&#110;&#46;&#115;&#121;&#115;&#116;&#101;&#109;&#115;">
                &#106;&#105;&#110;&#97;&#64;&#100;&#101;&#115;&#105;&#103;&#110;&#46;&#115;&#121;&#115;&#116;&#101;&#109;&#115;
              </a>
              )
            </address>
          </dd>
        </dl>
      }
      sidebarLeft={
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
      sidebarLeftWide
      sidebarRight={
        <div className="space-y-6">
          <Heading>Skills</Heading>

          <ul className="space-y-6">
            {CVData.skills.map((item, index) => {
              return (
                <li
                  key={`item__${index}`}
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              );
            })}
          </ul>
        </div>
      }
    >
      <div className="space-y-12">
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
      </div>
    </DefaultLayout>
  );
};

export default CVPage;
