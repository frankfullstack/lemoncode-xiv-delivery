import React from 'react';

import classes from './HeaderComponent.scss';
import lemoncodeLogo from "../../img/lemoncode.png"

export const HeaderComponent = () => {
    return (
    <header className={classes["top-bar"]}>
      <section className={classes["lemoncode-logo"]}>
        <div className={classes["logo-container"]}>
            <img src={lemoncodeLogo} alt="lemoncode logo" />
        </div>
        <h1 className={classes.title}>Lemoncode</h1>
      </section>
      <section className={classes.auth}><a href="#">Login</a></section>
    </header>
    );
}