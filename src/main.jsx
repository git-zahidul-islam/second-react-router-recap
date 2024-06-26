import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Posts from './Components/Posts/Posts.jsx';
import Contact from './Components/Contact/Contact.jsx';
import About from './Components/About/About.jsx';
import PostDetails from './Components/PostDetails/PostDetails.jsx';
import Error from './Components/Error/Error.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts/'),
        element: <Posts></Posts>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/post/:userId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.userId}`),
        element: <PostDetails></PostDetails>
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
