import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css"; 

import App from "./App.jsx";
import { useAppStore } from "./app/store/useAppStore.js";
import { BrowserRouter } from "react-router-dom";

async function bootstrap(params) {
  try {
    await useAppStore.persist.rehydrate();
  } catch (error) {
    console.error("Failed to restore saved app state:", error);
  }
}
// Set the page background before React renders.
const theme = useAppStore.getState().theme;
const background = theme === "dark" ? "#171717" : "#FFFDF7";
document.documentElement.style.backgroundColor = background;
document.body.style.backgroundColor = background;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
bootstrap();
