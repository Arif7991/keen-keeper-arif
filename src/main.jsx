import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import Router from "./router/Router";
import { Toaster } from "react-hot-toast";
import TimelineProvider from "./context/TimelineContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TimelineProvider>
      <RouterProvider router={Router} />
      <Toaster position="top-right" />
    </TimelineProvider>
  </React.StrictMode>
);