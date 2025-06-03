import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";

function Map() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    // Set default values if params are missing
    const lat = searchParams.get('lat') ?? '23';  // Fallback to '23' if null
    const lng = searchParams.get('lng') ?? '50';  // Fallback to '50' if null

    const handleContainerClick = () => {
        navigate('form');
    };

    const handleChangePosition = (e) => {
        e.stopPropagation(); // Prevent triggering container's onClick
        setSearchParams({ lat: '23', lng: '50' }); // Force update URL params
    };

    return (
        <div className={styles.mapContainer} onClick={handleContainerClick}>
            <h1>Map</h1>
            <h1>Position: {lat}, {lng}</h1>
            <button onClick={handleChangePosition}>Change Position</button>
        </div>
    );
}

export default Map;