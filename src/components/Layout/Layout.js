import React, { useState } from "react";
import Drawer from "../Drawer/Drawer";
import Footer from "../Footer/Footer";
import Navber from "../Navber/Navber";
import RightDrawer from "../RightDrawer/RightDrawer";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  const [open, setClose] = useState(false);

  return (
    <div className={styles.layout}>
      <span className={styles.navber}>
        <Navber drawerState={[open, setClose]} />
      </span>
      <section className={styles.contant}>
        <div className={styles.children}>{children}</div>
        <div className={styles.drawer}>{open && <Drawer />}</div>
      </section>
      <Footer />
    </div>
  );
};

export default Layout;
