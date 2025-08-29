import { useState } from 'react';
import { MdOutlineAnalytics } from 'react-icons/md';
import { FaUserShield } from 'react-icons/fa';
import styles from './style/Style.module.css';

type MenuItem = "analytics" | "admin";

const Menu = () => {
    const [active, setActive] = useState<MenuItem>("analytics");

    return (
        <div className={styles.menu_container}>
            <button
                onClick={() => setActive("analytics")}
                className={`${styles.button} ${active === "analytics" ? styles.active : ""}`}
            >
                <MdOutlineAnalytics style={{ marginRight: "8px" }} />
                Аналитика
            </button>

            <button
                onClick={() => setActive("admin")}
                className={`${styles.button} ${active === "admin" ? styles.active : ""}`}
            >
                <FaUserShield style={{ marginRight: "8px" }} />
                Управление Администратором
            </button>
        </div>
    );
};

export default Menu;
