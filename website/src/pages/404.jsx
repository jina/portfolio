import React from 'react';

import DefaultLayout from '../components/DefaultLayout';

const NotFoundPage = () => {
  return (
    <DefaultLayout title="404: Not Found">
      <h1>Page Not Found</h1>

      <p>Sorry, but the page you were trying to view does not exist.</p>
    </DefaultLayout>
  );
};

export default NotFoundPage;
