import React from 'react';

import { LinkButton } from '../components/LinkButton';

import { Container } from '../layout/Container';

import DefaultLayout from '../site/DefaultLayout';

const ContactPage = () => {
  return (
    <DefaultLayout
      pageTitle="Contact Jina"
      pageHTMLTitle="Contact&nbsp;Jina"
      heroContentForm
    >
      <Container form>
        <noscript>
          <LinkButton href="https://formkeep.com/p/e3e692620a2d91f68ca5dd4a298130ed">
            Send an email
          </LinkButton>
        </noscript>

        <div
          id="formkeep-embed"
          data-formkeep-url="https://formkeep.com/p/e3e692620a2d91f68ca5dd4a298130ed?embedded=1"
        />
      </Container>
    </DefaultLayout>
  );
};

export default ContactPage;
