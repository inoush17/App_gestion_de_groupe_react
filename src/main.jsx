import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';
import ForgottenPassword from './Pages/ForgottenPassword/ForgottenPassword.jsx';
import OtpCode from './Pages/OtpCode/OtpCode.jsx';
import NewPassword from './Pages/NewPassword/NewPassword.jsx';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgottenpassword",
    element: <ForgottenPassword />,
  },
  {
    path: "/otpcode/:email/",
    element: <OtpCode />,
  },
  {
    path: "/newpassword",
    element: <NewPassword />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/logout",
    element: <App />,
  }
])





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
