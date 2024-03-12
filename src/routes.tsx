import AppLayout from 'layout/app';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

export const routes = createBrowserRouter([
	{
		path: '/',
		element: React.createElement(AppLayout),
	},
]);
