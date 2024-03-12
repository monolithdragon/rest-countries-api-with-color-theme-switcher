import AppLayout from 'layout/app';
import Home from 'pages/home';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

export const routes = createBrowserRouter([
	{
		path: '/',
		element: React.createElement(AppLayout),
		children: [
			{
				index: true,
				element: React.createElement(Home),
			},
		],
	},
]);
