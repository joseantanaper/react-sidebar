import React from 'react'
import ReactDOM from 'react-dom/client'

import Index from './routes/index';
import ErrorPage from "./routes/error";

import Root from './routes/root';

import Quote_Generator, { loader as QuoteGeneratorLoader } from './routes/quote/generator';
import Pokedex_List, { loader as PokedexListLoader } from './routes/pokedex/list';

import Admin_Page1, { loader } from './routes/admin/page1';
import Admin_Page2 from './routes/admin/page2';
import Admin_Error from './routes/admin/error';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import 'bootstrap/dist/js/bootstrap.min'
import './style/main.scss';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      {
        errorElement: <ErrorPage />,
        children: [
          {
            path: "admin/page1",
            element: <Admin_Page1 />,
            loader: loader
          },
          {
            path: "admin/page2",
            element: <Admin_Page2 />
          },
          {
            path: "admin/error",
            element: <Admin_Error />
          },
          {
            path: "quote/generator",
            element: <Quote_Generator />,
            loader: QuoteGeneratorLoader
          },
          {
            path: "pokedex/list",
            element: <Pokedex_List />,
            loader: PokedexListLoader
          },

        ]
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
