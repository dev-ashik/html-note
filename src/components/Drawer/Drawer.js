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
            <Link className={styles.drawerMenu} to="/">start</Link><br /><br />
            <Link className={styles.drawerMenu} to="/abbreviationsortitle">abbreviations or Title</Link><br /><br />
            <Link className={styles.drawerMenu} to="/address">address for the author/owner</Link><br /><br />
            <Link className={styles.drawerMenu} to="/attributes">Attributes</Link><br /><br />
            <Link className={styles.drawerMenu} to="/break">Break</Link><br /><br />
            <Link className={styles.drawerMenu} to="/blockquote">Blockquote</Link><br /><br />
            <Link className={styles.drawerMenu} to="/style">Style</Link><br /><br />
        </div>
    );
};

export default Drawer;