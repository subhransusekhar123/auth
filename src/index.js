import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppAuth from './AppAuth'


import App from "./App";
import Form from "./FormAssignment/Form";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <StrictMode>
      <AppAuth/>
    </StrictMode>
  </BrowserRouter>
);
