import AppLayout from 'layouts/app';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

export const routes = createBrowserRouter(
  [
    {
      path: '/',
      element: React.createElement(AppLayout),
    },
  ],
  {
    basename: '/rest-countries-api-with-color-theme-switcher/',
  },
);
