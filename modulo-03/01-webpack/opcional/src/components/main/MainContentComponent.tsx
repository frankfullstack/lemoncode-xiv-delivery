import React from 'react';

import classes from './MainContentComponent.scss';

export const MainContentComponent = () => {

    const host = `${process.env.API_HOST}:${process.env.API_PORT}/${process.env.API_PREFIX}/${process.env.API_VERSION}`;
    return (
    <section className={classes["main-content"]}>
        <p>Hello World from Lemoncode Learning Platform - Bundling with WebPack in <span className={classes.environment}>{process.env.ENV}</span> env</p>
        <p>Rendering content from {host}</p>
    </section>
    );
}
