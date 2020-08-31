import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import Recaptcha from 'react-recaptcha';
import { navigate } from 'gatsby';

import { Alert } from '../../components/Alert';
import { Button } from '../../components/Button';
import { Label } from '../../components/Label';
import { Textarea } from '../../components/Textarea';
import { TextInput } from '../../components/TextInput';

import { Spacing } from '../../layout/Spacing';

import { AssistiveText } from '../../utilities/AssistiveText';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
};

const ContactForm = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);
  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validate={(values) => {
        const errors = {};

        if (!values.name) {
          errors.name = 'A name is required';
        }

        if (!values.email) {
          errors.email = 'An email is required';
        } else if (
          !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(
            values.email,
          )
        ) {
          errors.email = 'Invalid email address';
        }

        if (!values.message) {
          errors.message = 'A message is required';
        }

        return errors;
      }}
      onSubmit={(data) => {
        console.log(data);
        if (token !== null) {
          fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
              'form-name': 'contact',
              ...data,
              'g-recaptcha-response': token,
            }),
          })
            .then(() => {
              navigate('/thanks/');
            })
            .catch((error) => alert(error));
        }
      }}
    >
      <Form
        name="contact"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
        action="https://formkeep.com/f/aeab3bd3ea12"
        accept-charset="UTF-8"
        enctype="multipart/form-data"
        method="POST"
      >
        <fieldset>
          <AssistiveText element="legend">Contact Form</AssistiveText>

          <input type="hidden" name="utf8" value="✓" />
          <Field type="hidden" name="form-name" />
          <Field type="hidden" name="bot-field" />

          <Spacing element="ol" y="lg">
            <li>
              <Label title="required" htmlFor="name">
                Name *
              </Label>

              <TextInput id="name" />

              <Alert name="name" />
            </li>

            <li>
              <Label title="required" htmlFor="email">
                Email *
              </Label>

              <TextInput type="email" id="email" />

              <Alert name="email" />
            </li>

            <li>
              <Label title="required" htmlFor="message">
                Message *
              </Label>

              <Textarea id="message" name="message" required="required" />

              <Alert name="message" />
            </li>

            <li>
              <Recaptcha
                sitekey={process.env.SITE_RECAPTCHA_KEY}
                render="explicit"
                theme="light"
                verifyCallback={(response) => {
                  setToken(response);
                }}
                onloadCallback={() => {
                  console.log('done loading!');
                }}
              />
            </li>

            <li>
              <Button>Submit</Button>
            </li>
          </Spacing>
        </fieldset>
      </Form>
    </Formik>
  );
};

export { ContactForm };
