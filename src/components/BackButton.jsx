import { useNavigate } from "react-router-dom";
import styles from "./BackButton.module.css";

function BackButton() {
    const navigate = useNavigate();

    return (
        <button
            className={styles.backButton}
            onClick={(event) => {
                event.preventDefault();
                navigate(-1);
            }}
        >
            &larr; Back
        </button>
    );
}

export default BackButton;
