import React from 'react';

import { Button } from '../components/Button';
import { Textarea } from '../components/Textarea';
import { TextInput } from '../components/TextInput';

import { AssistiveText } from '../utilities/AssistiveText';

import DefaultLayout from '../site/DefaultLayout';

import spacingStyles from '../layout/Spacing/Spacing.module.scss';

const ContactPage = () => {
  return (
    <DefaultLayout
      pageTitle="Contact Jina"
      pageHTMLTitle="Contact&nbsp;Jina"
      heroSidebarBefore={<></>}
      sidebarBefore={<></>}
      sidebarAfter={<></>}
    >
      <form
        method="post"
        action="/thanks/"
        name="contact"
        netlify-honeypot="bot-field"
        data-netlify="true"
        data-netlify-recaptcha="true"
      >
        <fieldset>
          <AssistiveText element="legend">Contact Form</AssistiveText>

          <ol className={spacingStyles.y_lg}>
            <AssistiveText element="li">
              <label>
                Don’t fill this out if you're human: <input name="bot-field" />
              </label>
            </AssistiveText>

            <li>
              <label htmlFor="name">Name</label>

              <br />

              <TextInput type="text" id="name" name="name" />
            </li>

            <li>
              <label htmlFor="email-address">Email Address</label>

              <br />

              <TextInput type="email" id="email-address" name="email" />
            </li>

            <li>
              <label htmlFor="message">Message</label>

              <br />

              <Textarea id="message" name="message" />
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
      </form>
    </DefaultLayout>
  );
};

export default ContactPage;
