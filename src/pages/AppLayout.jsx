import AppNav from '../components/AppNav';
import Sidebar from "../components/Sidebar.jsx";
import Map from "../components/Map.jsx"; // Add Map import
import styles from "../pages/AppLayout.module.css";

function AppLayout() {
  return (
   <div className={styles.app}>
     <Sidebar />
     <Map />
   </div>
  );
}

export default AppLayout;