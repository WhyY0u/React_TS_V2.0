import type { ReactNode } from "react";
import styles from './style/Style.module.css'

interface StatsProps {
    name: string;
    icon: ReactNode;
    bigText: string;
    description: string;
}

const Stats = ({ name, icon, bigText, description }: StatsProps) => {
    return (
        <div className={styles.stats_container}>
            <div className={styles.header}>
                <div className={styles.icon}>{icon}</div>
                <p className={styles.name}>{name}</p>
            </div>
            <p className={styles.bigText}>{bigText}</p>
            <p className={styles.description}>{description}</p>
        </div>
    )
}

export default Stats;
