// Import the CSS module for styling the AppNav component
import styles from "./AppNav.module.css";
// Import the NavLink component from react-router-dom for navigation
import { NavLink } from "react-router-dom";

// Define the AppNav functional component
function AppNav() {
    return (
        // Use the nav element for semantic HTML, applying styles from the CSS module
        <nav className={styles.nav}>
            {/* Create an unordered list for navigation items */}
            <ul>
                {/* First navigation item - links to the "cities" route */}
                <li>
                    <NavLink to="cities">Cities</NavLink>
                </li>
                {/* Second navigation item - links to the "countries" route */}
                <li>
                    <NavLink to="countries">Countries</NavLink>
                </li>
            </ul>
        </nav>
    );
}

// Export the AppNav component as the default export
export default AppNav;