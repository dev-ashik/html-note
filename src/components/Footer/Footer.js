import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <a href="">FaceBook</a>
            <a href="">mail</a>
            <a href="">github</a>
        </div>
    );
};

export default Footer;