// Import necessary dependencies
import styles from "./CityList.module.css"; // Component-specific CSS using CSS Modules
import Spinner from "./Spinner.jsx"; // Loading spinner component
import CityItem from "./CityItem.jsx";
import Message from "./Message.jsx"; // Reusable city item component

// CityList component displays a list of cities with loading state handling
// Props:
// - cities: Array of city objects to display
// - isLoading: Boolean indicating data loading status
function CityList({ cities, isLoading }) {
  // Show loading spinner while data is being fetched
  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message message="No cities found." />
    // Main component render
  return (
    // Unordered list with styling from CSS Module
    <ul className={styles.cityList}>
      {/* Map through cities array to create CityItem components */}
      {cities.map((city) => (
        // Individual city item component
        <CityItem
          city={city} // Pass entire city object as prop
          key={city.id} // Unique key for React's DOM diffing algorithm
        />
      ))}
    </ul>
  );
}

export default CityList;