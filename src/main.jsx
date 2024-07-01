import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
import './index.css';
import Home from './pages/Home.jsx';
import Story from './pages/Story.jsx';
import Accommodation from './pages/Accommodation.jsx';
import Schedule from './pages/Schedule.jsx';
import Gallery from './pages/Gallery.jsx';
import Registry from './pages/Registry.jsx';

import Navbar from './components/Navbar.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'story',
        element: <Story />,
      },
      {
        path: 'accomodation',
        element: <Accommodation />,
      },
      {
        path: 'schedule',
        element: <Schedule />,
      },
      {
        path: 'Gallery',
        element: <Gallery />,
      },
      {
        path: 'Registry',
        element: <Registry />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
