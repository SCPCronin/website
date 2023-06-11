import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom"
import Homepage from './pages/Homepage';
import Portfolio from './pages/Portfolio';
import Games from './pages/Games';
import Writing from './pages/Writing';
import Library from './pages/Library';

const router = createBrowserRouter([
  {
    path: "/website",
    element: <Homepage />
  },
  {
    path: "/website/portfolio",
    element: <Portfolio />
  },
  {
    path: "/website/games",
    element: <Games />
  },
  {
    path: "/website/writing",
    element: <Writing />
  },
  {
    path: "/website/library",
    element: <Library />
  },
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
