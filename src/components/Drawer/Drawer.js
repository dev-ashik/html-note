import React from 'react';
import styles from './Drawer.module.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Drawer = () => {
    return (
        <div className={styles.drawer}>
            <Link className={styles.drawerMenu} to="/">start</Link><br />
            <Link className={styles.drawerMenu} to="/abbreviationsortitle">abbreviations or Title</Link><br />
            <Link className={styles.drawerMenu} to="address">address for the author/owner</Link><br />
            <Link className={styles.drawerMenu} to="">Home 4</Link><br />
            <Link className={styles.drawerMenu} to="">Home 5</Link><br />
        </div>
    );
};

export default Drawer;