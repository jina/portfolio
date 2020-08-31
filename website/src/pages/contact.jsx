import React from 'react';
import { Formik, Form } from 'formik';

import { Alert } from '../components/Alert';
import { Button } from '../components/Button';
import { Label } from '../components/Label';
import { Textarea } from '../components/Textarea';
import { TextInput } from '../components/TextInput';

import { AssistiveText } from '../utilities/AssistiveText';

import DefaultLayout from '../site/DefaultLayout';

import spacingStyles from '../layout/Spacing/Spacing.module.scss';

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
          <Form
            name="contact"
            data-netlify
            data-netlify-recaptcha
            netlify-honeypot="bot-field"
          >
            <fieldset>
              <AssistiveText element="legend">Contact Form</AssistiveText>
              <AssistiveText element="div">
                <label>
                  Don’t fill this out if you're human:{' '}
                  <input name="bot-field" />
                </label>
              </AssistiveText>

              <ol className={spacingStyles.y_lg}>
                <li>
                  <label htmlFor="name">Name</label>

                  <br />

                  <TextInput type="text" id="name" name="name" />

                  <Alert name="name" />
                </li>

                <li>
                  <label htmlFor="email-address">Email Address</label>

                  <br />

                  <TextInput type="email" id="email-address" name="email" />

                  <Alert name="email" />
                </li>

                <li>
                  <label htmlFor="message">Message</label>

                  <br />

                  <Textarea id="message" name="message" />

                  <Alert name="message" />
                </li>

                <li>
                  <div data-netlify-recaptcha="true" />
                </li>

                <li>
                  <Button />
                </li>
              </ol>
            </fieldset>
            ...
          </Form>
        )}
      </Formik>
    </DefaultLayout>
  );
};

export default ContactPage;
