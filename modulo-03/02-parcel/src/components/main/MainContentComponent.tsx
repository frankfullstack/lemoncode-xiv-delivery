import React from 'react';
import * as classes from './MainContentComponent.module.scss';

export const MainContentComponent: React.FC = () => {

    return (
    <section className={classes["main-content"]}>
        <p>Hello World from Lemoncode Learning Platform - Bundling with Parcel</p>
    </section>
    );
}
