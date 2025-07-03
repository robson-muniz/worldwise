// Import CSS module for component-specific styling
import styles from "./Button.module.css";

// Button component definition with props destructuring
function Button({ children, onClick, type }) {
  return (
      // Button element with dynamic class names based on props
      <button
          onClick={onClick}  // Click handler passed as prop
          // Combine base button style with type-specific style using template literals
          className={`${styles.btn} ${styles[type]}`}
      >
        {/* Render children passed between component tags */}
        {children}
      </button>
  );
}

// Export the Button component as default
export default Button;