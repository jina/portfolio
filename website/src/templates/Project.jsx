import React from 'react';

import { Card } from '../components/Card';
import DefaultLayout from '../components/DefaultLayout';
import { Heading } from '../components/Heading';
import { Horizontal } from '../components/Horizontal';
import { Image } from '../components/Image';
import { LinkButton } from '../components/LinkButton';

import WorkData from '../../content/work.yml';

const projectTemplate = (props) => {
  const { pageContext } = props;
  const {
    pageTitle,
    pageHTMLTitle,
    pageNext,
    pagePrev,
    pageDescription,
    pageImage,
    pageCover,
    pageLogo,
    pageContent,
    pageRoles,
    pageDeliverables,
  } = pageContext;
  const CoverElement = Image[pageCover];
  const ImageElement = Image[pageImage];
  const LogoElement = Image[pageLogo];

  return (
    <DefaultLayout
      pageTitle={pageTitle}
      pageHTMLTitle={pageHTMLTitle}
      pageDescription={pageDescription}
      heroSidebarRight={
        <Horizontal className="space-y-3 sm:space-y-0 justify-end" spacing={4}>
          <Horizontal.Item>
            <LinkButton className="text-center" secondary to={pagePrev}>
              Previous
            </LinkButton>
          </Horizontal.Item>

          <Horizontal.Item>
            <LinkButton className="text-center" secondary to={pageNext}>
              Next
            </LinkButton>
          </Horizontal.Item>
        </Horizontal>
      }
      header={
        <div className="-mx-4 md:-mx-8 bg-black">
          <div className="m-auto lg:max-w-screen-xl">
            <CoverElement className="w-full" />
          </div>
        </div>
      }
      sidebarLeft={
        <div className="space-y-12">
          <Card heading="Roles">
            <ul className="space-y-3">
              {pageRoles.map((data, index) => {
                return (
                  <li
                    key={`responsibility_${index}`}
                    dangerouslySetInnerHTML={{ __html: data }}
                  />
                );
              })}
            </ul>
          </Card>

          <Card heading="Deliverables">
            <ul className="space-y-3">
              {pageDeliverables.map((data, index) => {
                return (
                  <li
                    key={`deliverable_${index}`}
                    dangerouslySetInnerHTML={{ __html: data }}
                  />
                );
              })}
            </ul>
          </Card>

          <div className="mx-auto w-48">
            <LogoElement />
          </div>
        </div>
      }
      sidebarLeftWide
      footer={
        <>
          <Horizontal
            className=" space-y-3 sm:space-y-0 justify-center"
            spacing={4}
          >
            <Horizontal.Item>
              <LinkButton className="text-center" secondary to={pagePrev}>
                Previous
              </LinkButton>
            </Horizontal.Item>

            <Horizontal.Item>
              <LinkButton className="text-center" secondary to={pageNext}>
                Next
              </LinkButton>
            </Horizontal.Item>
          </Horizontal>

          <Card className="pt-24" heading="View Other Projects">
            <div className="-mx-4">
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 row-gap-3 col-gap-4">
                {WorkData.filter((data) => data.draft !== true).map(
                  (data, index) => {
                    return (
                      <li key={`project_${index}`}>
                        <LinkButton full to={data.path}>
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
                      </li>
                    );
                  },
                )}
              </ul>
            </div>
          </Card>
        </>
      }
    >
      <div className="space-y-12">
        {ImageElement !== CoverElement ? <ImageElement /> : ''}

        {pageContent.map((data, index) => {
          return (
            <div key={`content__${index}`} className="space-y-6">
              {data.heading.variant === 'small' ? (
                <Heading.Small
                  dangerouslySetInnerHTML={{ __html: data.heading.text }}
                />
              ) : data.heading.variant === 'label' ? (
                <Heading.Label
                  dangerouslySetInnerrHTML={{ __html: data.heading.text }}
                />
              ) : (
                <Heading
                  dangerouslySetInnerHTML={{ __html: data.heading.text }}
                />
              )}

              <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8">
                <div className="prose space-y-12 w-full">
                  <div
                    className={`space-y-6 ${
                      data.heading.text === 'Overview' ? 'lead' : ''
                    }`}
                    dangerouslySetInnerHTML={{ __html: data.description }}
                  />

                  {data.image && (
                    <div className={data.lists !== '' ? `` : `lg:-mr-8`}>
                      {
                        // Workaround since <Image[data.image] /> doesn't work
                        // Also edit components/Image/Image.jsx to include as well
                        data.image === 'AppleOnlineStoreCart' ? (
                          <Image.AppleOnlineStoreCart />
                        ) : data.image === 'AppleOnlineStoreSignIn' ? (
                          <Image.AppleOnlineStoreSignIn />
                        ) : data.image === 'AppleOnlineStoreWebsite' ? (
                          <Image.AppleOnlineStoreWebsite />
                        ) : data.image === 'BeehiveApp' ? (
                          <Image.BeehiveApp />
                        ) : data.image === 'BeehiveDesignSystemIcons' ? (
                          <Image.BeehiveDesignSystemIcons />
                        ) : data.image === 'BeehiveDesignSystemWebsite' ? (
                          <Image.BeehiveDesignSystemWebsite />
                        ) : data.image === 'ClarityBox' ? (
                          <Image.ClarityBox />
                        ) : data.image === 'ClarityHenri' ? (
                          <Image.ClarityHenri />
                        ) : data.image === 'ClarityPrograms' ? (
                          <Image.ClarityPrograms />
                        ) : data.image === 'ClarityRichardAndBarbara' ? (
                          <Image.ClarityRichardAndBarbara />
                        ) : data.image === 'ClaritySVAMarquee' ? (
                          <Image.ClaritySVAMarquee />
                        ) : data.image === 'ClarityTatianaAndBrad' ? (
                          <Image.ClarityTatianaAndBrad />
                        ) : data.image === 'ClarityWebsite' ? (
                          <Image.ClarityWebsite />
                        ) : data.image === 'Salesforce1StyleGuide' ? (
                          <Image.Salesforce1StyleGuide />
                        ) : data.image ===
                          'SalesforceLightningDesignSystemIllustration' ? (
                            <Image.SalesforceLightningDesignSystemIllustration />
                        ) : data.image ===
                          'SalesforceLightningDesignSystemInvitation' ? (
                            <Image.SalesforceLightningDesignSystemInvitation />
                        ) : data.image ===
                          'SalesforceLightningDesignSystemSystem' ? (
                            <Image.SalesforceLightningDesignSystemSystem />
                        ) : data.image ===
                          'SalesforceLightningDesignSystemWebsite' ? (
                            <Image.SalesforceLightningDesignSystemWebsite />
                        ) : data.image === 'SassGlasses' ? (
                          <Image.SassGlasses />
                        ) : data.image === 'SassStyleTile' ? (
                          <Image.SassStyleTile />
                        ) : data.image === 'SassWebsite' ? (
                          <Image.SassWebsite />
                        ) : (
                          ''
                        )
                      }
                    </div>
                  )}
                </div>

                {data.lists !== '' ? (
                  <div className="flex flex-col sm:flex-row md:flex-col space-y-12 sm:space-y-0 md:space-y-12 sm:space-x-4 md:space-x-0 lg:flex-none lg:w-1/3">
                    {data.lists.map((item, index) => {
                      return (
                        <div
                          key={`item__${index}`}
                          className="space-y-3 sm:flex-none sm:w-1/2 md:flex-1 md:w-auto"
                        >
                          {item.heading.variant === 'small' ? (
                            <Heading.Small
                              dangerouslySetInnerHTML={{
                                __html: item.heading.text,
                              }}
                            />
                          ) : item.heading.variant === 'label' ? (
                            <Heading.Label
                              dangerouslySetInnerHTML={{
                                __html: item.heading.text,
                              }}
                            />
                          ) : (
                            <Heading
                              dangerouslySetInnerHTMTL={{
                                __html: item.heading.text,
                              }}
                            />
                          )}

                          <ul className="space-y-3">
                            {item.items.map((i, index) => {
                              return (
                                <li
                                  key={`i__${index}`}
                                  dangerouslySetInnerHTML={{ __html: i }}
                                />
                              );
                            })}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
          );
        })}
      </div>
    </DefaultLayout>
  );
};
export default projectTemplate;
