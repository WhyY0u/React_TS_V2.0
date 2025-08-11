import { useState } from 'react';
import styles from './style/Style.module.css'


const SortedClickContainer = () => {


    const [active, setActive] = useState('date');
    const handleActive = (value: string) => {
        setActive(value);
    };
    return <div>
        <div className={styles.sorted_click_container}>
            <button
                className={`${styles.sort_option} `}
                onClick={() => handleActive("date")}

            >
                По дате
            </button>
            <button
                className={`${styles.sort_option} `}
                onClick={() => handleActive("status")}

            >
                По статусу
            </button>
        </div>
    </div>
}

export default SortedClickContainer;