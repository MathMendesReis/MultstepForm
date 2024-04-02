import React from 'react'
import ReactDOM from 'react-dom/client'
import './Global.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import StepOne from './steps/step-one';
import FooterStep from './components/footer-step';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <StepOne />,
        children: [{ path: "/", element: <FooterStep /> }]
      },
      {
        path: '/empresa',
        element: <h1>Empresa</h1>,
        children: [{ path: "/empresa", element: <FooterStep /> }]
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
