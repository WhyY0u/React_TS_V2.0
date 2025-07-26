import styles from './style/Style.module.css';

const Header = ({ position = "top" }: { position?: "top" | "fixed" }) => {
    return (
        <header className={`${styles.header} ${position === "fixed" ? styles.fixed : ""}`}>
            <div className={styles.logo}>Template</div>
        </header>
    );
};

export default Header;
