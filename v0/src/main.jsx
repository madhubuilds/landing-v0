import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
// import "./app/styles/animations.css";
// import "./app/styles/borders.css";
// import "./app/styles/buttons.css";
// import "./app/styles/colors.css";
// import "./app/styles/flex-grid.css";
// import "./app/styles/position.css";
// import "./app/styles/responsive.css";
// import "./app/styles/shadows.css";
// import "./app/styles/typography.css";
// import "./app/styles/variables.css";
// import "./app/styles/z-index.css";

import App from "./App.jsx";
import { useAppStore } from "./app/store/useAppStore.js";

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
    <App />
  </StrictMode>,
);
bootstrap();