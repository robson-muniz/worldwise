import styles from "./Sidebar.module.css";
import AppNav from "./AppNav.jsx";
import Logo from "./Logo.jsx";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <p>List of Cities</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by Worldwise Inc.
        </p>
      </footer>


    </div>
  );
}

export default Sidebar;