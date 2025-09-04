import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
import {useCities} from "../contexts/CitiesContext.jsx";

function CityItem({ city, onDeleteCity }) {
    const {currentCity} = useCities()
    const { cityName, emoji, date, id, position } = city;

    // Format the date properly (instead of raw parentheses)
    const formatDate = (date) =>
        new Intl.DateTimeFormat("en", {
            day: "numeric",
            month: "long",
            year: "numeric",
        }).format(new Date(date));

    return (
        <li>
            <Link
                className={`${styles.cityItem} ${id === currentCity.id ? styles['cityItem--active'] : ''}`}
                to={`${id}?lat=${position.lat}&lng=${position.lng}`}
            >
                <span className={styles.emoji}>{emoji}</span>
                <h3 className={styles.name}>{cityName}</h3>
                <time className={styles.date}>{formatDate(date)}</time>

                <button
                    onClick={(e) => {
                        e.preventDefault();
                        onDeleteCity(id);
                    }}
                    className={styles.deleteBtn}
                >
                    &times;
                </button>
            </Link>
        </li>
    );
}

export default CityItem;
