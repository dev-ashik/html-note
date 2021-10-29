import React from 'react';
import styles from './Navber.module.css';
import { IoMenu, IoChevronForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navber = ({drawerState}) => {
    const [open, setOpen] = drawerState;
    return (
        <div className={styles.nav}>
            <div className={styles.links}>
                <Link className={styles.navMenu} to="/">Home</Link>
            </div>
            <div className={styles.menuDiv}>
                {
                    open ? <IoChevronForwardOutline className={styles.menuIcon} onClick={()=>setOpen(false)}/> : <IoMenu className={styles.menuIcon} onClick={()=>setOpen(true)}/>
                }
                
            </div>
        </div>
    );
};

export default Navber;