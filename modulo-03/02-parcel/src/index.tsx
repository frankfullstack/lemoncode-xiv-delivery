import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.scss";
import { HeaderComponent } from "components/header/HeaderComponent.jsx";
import { MainContentComponent } from "components/main/MainContentComponent.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <HeaderComponent />
    <MainContentComponent />
  </>
);
