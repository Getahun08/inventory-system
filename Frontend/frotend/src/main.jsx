import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AppContextProvider } from './context/AppContext';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <AppContextProvider>
  <App />
  </AppContextProvider>
   
  </BrowserRouter>
);


