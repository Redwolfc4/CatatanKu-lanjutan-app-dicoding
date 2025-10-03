import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import "./styles/style.css";
import "flowbite";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter basename="/CatatanKu-lanjutan-app-dicoding/">
      <App />
    </BrowserRouter>
  </StrictMode>
);
