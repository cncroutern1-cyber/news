import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import NewsPage from "./NewsPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NewsPage />
  </StrictMode>
);
