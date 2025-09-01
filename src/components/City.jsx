import styles from './City.module.css';
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useCities } from "../contexts/CitiesContext.jsx";
import Spinner from "./Spinner"; // Make sure this path is correct

function formatDate(date) {
    if (!date) return '';
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function City() {
    const { id } = useParams();
    const { getCity, currentCity, isLoading } = useCities();

    useEffect(() => {
        if (id) {
            getCity(id);
        }
    }, [id, getCity]);

    if (isLoading) return <Spinner/>;

    if (!currentCity || Object.keys(currentCity).length === 0) {
        return <div className={styles.city}>City not found</div>;
    }

    const { cityName, emoji, date, notes } = currentCity;

    return (
        <div className={styles.city}>
            <div className={styles.row}>
                <h6>City name</h6>
                <h3>
                    <span>{emoji}</span> {cityName}
                </h3>
            </div>

            <div className={styles.row}>
                <h6>You went to {cityName} on</h6>
                <p>{formatDate(date)}</p>
            </div>

            {notes && (
                <div className={styles.row}>
                    <h6>Your notes</h6>
                    <p>{notes}</p>
                </div>
            )}

            <div className={styles.row}>
                <h6>Learn more</h6>
                <a
                    href={`https://en.wikipedia.org/wiki/${cityName}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    Check out {cityName} on Wikipedia &rarr;
                </a>
            </div>
        </div>
    );
}

export default City;