import styles from './CityItem.module.css'
import {Link} from "react-router-dom";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    }).format(new Date(date));

function CityItem({ city }) {
  const { cityName, emoji, date, id, position } = city;

  function handleDelete(e) {
    e.preventDefault();
    // Add delete logic here
  }

  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{emoji}</span>
      <Link
        className={styles.cityLink}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
      </Link>
      <button
        className={styles.deleteBtn}
        onClick={handleDelete}
        aria-label="Delete city"
      >
        &times;
      </button>
    </li>
  );
}

export default CityItem;