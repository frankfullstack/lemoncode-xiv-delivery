import React from 'react';
import { createRoot } from 'react-dom/client';
import { HeaderComponent } from './components/header';
import { MainContentComponent } from './components/main';
import "./styles/main.scss";

const root = createRoot(document.getElementById("root"));

root.render(
    <>
        <HeaderComponent/>
        <MainContentComponent/>
    </>
);