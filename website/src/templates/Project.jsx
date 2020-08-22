import React from 'react';

import { Card } from '../components/Card';
import { Heading } from '../components/Heading';
import { Pagination } from '../components/Pagination';
import { Prose } from '../components/Prose';
import { Screenshot } from '../components/Screenshot';

import { Container } from '../layout/Container';

import DefaultLayout from '../site/DefaultLayout';
import { Logo } from '../site/Logo';

import styles from './Project.module.scss';
import flushStyles from '../layout/Flush/Flush.module.scss';
import spacingStyles from '../layout/Spacing/Spacing.module.scss';

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
  return (
    <DefaultLayout
      pageTitle={pageTitle}
      pageHTMLTitle={pageHTMLTitle}
      pageDescription={pageDescription}
      heroSidebarAfter={
        <Pagination justify="end" pto={pagePrev} nto={pageNext} />
      }
      header={
        <>
          <div
            className={`${flushStyles.x_xl} ${flushStyles.y_lg} ${styles.header}`}
          >
            <Container mw="xxxl">
              {pageCover.screenshot === true ? (
                <Screenshot>
                  <img
                    src={`/images/${pageCover.src}`}
                    alt={pageCover.alt}
                    className={styles.cover}
                  />
                </Screenshot>
              ) : (
                <img
                  src={`/images/${pageCover.src}`}
                  alt={pageCover.alt}
                  className={styles.cover}
                />
              )}
            </Container>
          </div>
        </>
      }
      sidebarBefore={
        <Logo>
          <img src={`/images/${pageLogo.src}`} alt={pageLogo.alt} />
        </Logo>
      }
      sidebarBeforeWide
      sidebarBeforeAlign="center"
      footerSidebarBefore={
        <Card heading="Roles">
          <ul>
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
      }
      footerSidebarBefore2={
        <Card heading="Deliverables">
          <ul>
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
      }
      footer={
        <>
          {pageImage.src !== pageCover.src &&
            (pageImage.screenshot === true ? (
              <Screenshot>
                <img src={`/images/${pageImage.src}`} alt={pageImage.alt} />
              </Screenshot>
            ) : (
              <img src={`/images/${pageImage.src}`} alt={pageImage.alt} />
            ))}

          <div className={spacingStyles.y_xxl}>
            {pageContent.map((data, index) => {
              return (
                <React.Fragment key={`content__${index}`}>
                  {data.heading.text === 'Overview' ? (
                    ``
                  ) : (
                    <div className={spacingStyles.y_lg}>
                      {data.heading.variant === 'small' ? (
                        <Heading.Small
                          dangerouslySetInnerHTML={{
                            __html: data.heading.text,
                          }}
                        />
                      ) : data.heading.variant === 'label' ? (
                        <Heading.Label
                          dangerouslySetInnerrHTML={{
                            __html: data.heading.text,
                          }}
                        />
                      ) : (
                        <Heading
                          dangerouslySetInnerHTML={{
                            __html: data.heading.text,
                          }}
                        />
                      )}

                      <div className={styles.project}>
                        <div
                          className={`${styles.details} ${spacingStyles.y_lg}`}
                        >
                          <Prose
                            spacing="lg"
                            className={spacingStyles.y_lg}
                            dangerouslySetInnerHTML={{
                              __html: data.description,
                            }}
                          />

                          {data.image &&
                            (data.image.screenshot === true ? (
                              <Screenshot>
                                <img
                                  src={`/images/${data.image.src}`}
                                  alt={data.image.alt}
                                />
                              </Screenshot>
                            ) : (
                              <img
                                src={`/images/${data.image.src}`}
                                alt={data.image.alt}
                              />
                            ))}
                        </div>

                        {data.lists && (
                          <div
                            className={`${styles.lists} ${spacingStyles.y_lg}`}
                          >
                            {data.lists.map((item, index) => {
                              return (
                                <Card
                                  key={`item__${index}`}
                                  heading={item.heading.text}
                                  helement="h3"
                                >
                                  <ul className={spacingStyles.y_sm}>
                                    {item.items.map((i, index) => {
                                      return (
                                        <li
                                          key={`i__${index}`}
                                          dangerouslySetInnerHTML={{
                                            __html: i,
                                          }}
                                        />
                                      );
                                    })}
                                  </ul>
                                </Card>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </>
      }
      pagination={
        <div className={spacingStyles.y_xxl}>
          <Pagination pto={pagePrev} nto={pageNext} />

          <Card heading="View Other Projects">
            <Card.List columns>
              {WorkData.filter((data) => data.draft !== true).map(
                (data, index) => {
                  return (
                    <Card.Item
                      to={data.path}
                      text={
                        data.htmlTitle !== undefined
                          ? data.htmlTitle
                          : data.title
                      }
                      key={`newproject_${index}`}
                    />
                  );
                },
              )}
            </Card.List>
          </Card>
        </div>
      }
    >
      {pageContent.map((data, index) => {
        return (
          <React.Fragment key={`overview__${index}`}>
            {data.heading.text === 'Overview' && (
              <>
                <Heading
                  dangerouslySetInnerHTML={{ __html: data.heading.text }}
                />

                <Prose spacing="xxl">
                  <div
                    className={`${spacingStyles.y_lg} lead`}
                    dangerouslySetInnerHTML={{ __html: data.description }}
                  />

                  {data.image &&
                    (data.image.screenshot === true ? (
                      <Screenshot>
                        <img
                          src={`/images/${data.image.src}`}
                          alt={data.image.alt}
                        />
                      </Screenshot>
                    ) : (
                      <img
                        src={`/images/${data.image.src}`}
                        alt={data.image.alt}
                      />
                    ))}
                </Prose>
              </>
            )}
          </React.Fragment>
        );
      })}
    </DefaultLayout>
  );
};
export default projectTemplate;
