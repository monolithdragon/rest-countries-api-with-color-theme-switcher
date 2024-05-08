import AppLayout from 'layouts/app';
import HomePage from 'pages/home';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

export const routes = createBrowserRouter(
  [
    {
      path: '/',
      element: React.createElement(AppLayout),
      children: [
        { index: true, element: React.createElement(HomePage) },
        { path: ':id', element: React.createElement(HomePage) },
      ],
    },
  ],
  {
    basename: '/rest-countries-api-with-color-theme-switcher/',
  },
);
