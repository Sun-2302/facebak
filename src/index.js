import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Twitter } from './pages/Twitter';
import { HomePage } from './pages/Home';
import PostPage from './pages/PostPage';
import ProfilePage from './pages/ProfilePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Twitter />,
  },
  {
    path: "/users/:usersId",
    element: <ProfilePage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/posts/:postId",
    element: <PostPage />,
  },
  {
    path: "/test",
    element: <PostPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
