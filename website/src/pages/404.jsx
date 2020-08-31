import React from 'react';

import DefaultLayout from '../site/DefaultLayout';

const NotFoundPage = () => {
  return (
    <DefaultLayout pageTitle="Page Not Found">
      <p>Sorry, but the page you were trying to view does not exist.</p>
    </DefaultLayout>
  );
};

export default NotFoundPage;
