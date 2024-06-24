import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  HomeLayout,
  About,
  Landing,
  Error,
  Newsletter,
  Cocktail,
  SinglePageError,
} from './pages';
import { loader as landingLoader } from './pages/Landing';
import { loader as singleCocktailLoader } from './pages/Cocktail';
import { action as newsletterAction } from './pages/Newsletter';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: landingLoader,
        element: <Landing />,
        errorElement: <SinglePageError />,
      },
      {
        path: 'cocktail/:id',
        loader: singleCocktailLoader,
        element: <Cocktail />,
        errorElement: <SinglePageError />,
      },
      {
        path: 'newsletter',
        action: newsletterAction,
        errorElement: <SinglePageError />,
        element: <Newsletter />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
    <ToastContainer position='top-center' autoClose={2000} />
  </React.StrictMode>
);
