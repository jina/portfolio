import React from 'react';
import { Formik, Form } from 'formik';

import { Alert } from '../components/Alert';
import { Button } from '../components/Button';
import { Label } from '../components/Label';
import { Textarea } from '../components/Textarea';
import { TextInput } from '../components/TextInput';

import { HolyGrail } from '../layout/HolyGrail';

import { AssistiveText } from '../utilities/AssistiveText';

import DefaultLayout from '../site/DefaultLayout';

const ContactPage = () => {
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`,
      )
      .join('&');
  };
  return (
    <DefaultLayout
      pageTitle="Contact Jina"
      pageHTMLTitle="Contact&nbsp;Jina"
      heroSidebarBefore={<></>}
      sidebarBefore={<></>}
      sidebarAfter={<></>}
    >
      <Formik
        initialValues={{
          name: '',
          email: '',
          message: '',
        }}
        onSubmit={(values, actions) => {
          fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact-demo', ...values }),
          })
            .then(() => {
              alert('Success');
              actions.resetForm();
            })
            .catch(() => {
              alert('Error');
            })
            .finally(() => actions.setSubmitting(false));
        }}
        validate={(values) => {
          const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
          const errors = {};
          if (!values.name) {
            errors.name = 'Name Required';
          }
          if (!values.email || !emailRegex.test(values.email)) {
            errors.email = 'Valid Email Required';
          }
          if (!values.message) {
            errors.message = 'Message Required';
          }
          return errors;
        }}
      >
        {() => (
          <Form name="contact" data-netlify netlify-honeypot="bot-field">
            <fieldset>
              <AssistiveText element="legend">Contact Form</AssistiveText>
              <AssistiveText element="div">
                <label>
                  Don’t fill this out if you're human:{' '}
                  <input name="bot-field" />
                </label>
              </AssistiveText>

              <ol>
                <HolyGrail element="li">
                  <HolyGrail.Body>
                    <HolyGrail.Sidebar>
                      <Label htmlFor="name">Name</Label>
                    </HolyGrail.Sidebar>

                    <HolyGrail.Content>
                      <TextInput type="text" id="name" name="name" />

                      <Alert name="name" />
                    </HolyGrail.Content>
                  </HolyGrail.Body>
                </HolyGrail>

                <HolyGrail element="li">
                  <HolyGrail.Body>
                    <HolyGrail.Sidebar>
                      <Label htmlFor="email-address">Email Address</Label>
                    </HolyGrail.Sidebar>

                    <HolyGrail.Content>
                      <TextInput type="email" id="email-address" name="email" />

                      <Alert name="email" />
                    </HolyGrail.Content>
                  </HolyGrail.Body>
                </HolyGrail>

                <HolyGrail element="li">
                  <HolyGrail.Body>
                    <HolyGrail.Sidebar>
                      <Label htmlFor="message">Message</Label>
                    </HolyGrail.Sidebar>

                    <HolyGrail.Content>
                      <Textarea id="message" name="message" />

                      <Alert name="message" />
                    </HolyGrail.Content>
                  </HolyGrail.Body>
                </HolyGrail>

                <HolyGrail element="li">
                  <HolyGrail.Body>
                    <HolyGrail.Sidebar />
                    <HolyGrail.Content>
                      <Button />
                    </HolyGrail.Content>
                  </HolyGrail.Body>
                </HolyGrail>
              </ol>
            </fieldset>
          </Form>
        )}
      </Formik>
    </DefaultLayout>
  );
};

export default ContactPage;
