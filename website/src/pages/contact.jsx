import React from 'react';

import { Container } from '../layout/Container';

import DefaultLayout from '../site/DefaultLayout';
import { ContactForm } from '../site/ContactForm';

const ContactPage = () => {
  return (
    <DefaultLayout
      pageTitle="Contact Jina"
      pageHTMLTitle="Contact&nbsp;Jina"
      heroContentForm
    >
      <Container form>
        <ContactForm />
      </Container>
    </DefaultLayout>
  );
};

export default ContactPage;
