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
        {
          index: true,
          element: React.createElement(HomePage),
          loader: async () => {
            return (await fetch('https://restcountries.com/v3.1/all')).json();
          },
        },
        {
          path: ':id',
          element: React.createElement(HomePage),
          loader: async ({ params }) => {
            return (
              await fetch(`https://restcountries.com/v3.1/name/${params.id!}`)
            ).json();
          },
        },
        {
          path: 'region/:id',
          element: React.createElement(HomePage),
          loader: async ({ params }) => {
            return (
              await fetch(`https://restcountries.com/v3.1/region/${params.id!}`)
            ).json();
          },
        },
      ],
    },
  ],
  {
    basename: '/rest-countries-api-with-color-theme-switcher/',
  },
);
