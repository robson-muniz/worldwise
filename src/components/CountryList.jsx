// Import necessary dependencies
import styles from "./CountryList.module.css"; // Component-specific CSS using CSS Modules
import Spinner from "./Spinner.jsx"; // Loading spinner component
import Message from "./Message.jsx";
import CountryItem from "./CountryItem.jsx";
import City from "./City.jsx"; // Reusable country item component

// CityList component displays a list of cities with loading state handling
// Props:
// - cities: Array of country objects to display
// - isLoading: Boolean indicating data loading status
function CountryList({ cities, isLoading }) {
  // Show loading spinner while data is being fetched
  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message message="No cities found." />

  const countries = cities.reduce((arr, city) => {
    if (!arr.some(el => el.country === city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    }
    return arr;
  }, []);
  // Main component render
  return (
    // Unordered list with styling from CSS Module
    <ul className={styles.countryList}>
      {/* Map through cities array to create CityItem components */}
      {countries.map((country) => (
        // Individual country item component
        <CountryItem key={country.country} country={country} />
      ))}
    </ul>
  );
}

export default CountryList;