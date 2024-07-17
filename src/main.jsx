import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { RouterProvider } from "react-router-dom";
import AuthProvider from './Provider/AuthProvider';
import router from './Route/MainRoute';


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthProvider>
)
