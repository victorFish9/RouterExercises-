import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import Error from './components/Error.jsx'

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  errorElement: <Error />,
  children: [{
    element: <Home />,
    index: true,
  },
  {
    path: "contact",
    element: <Contact />
  },
  {
    path: "about",
    element: <About />
  }]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
