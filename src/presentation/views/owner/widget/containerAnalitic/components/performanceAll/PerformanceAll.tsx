import styles from './style/Style.module.css'

const admins = [
    { name: "Иванов", category: "Поддержка", solved: 54, inProgress: 3, avgTime: "12 мин", status: "Активен" },
    { name: "Петров", category: "Техподдержка", solved: 37, inProgress: 5, avgTime: "18 мин", status: "Оффлайн" },
    { name: "Сидоров", category: "Модерация", solved: 62, inProgress: 2, avgTime: "9 мин", status: "Активен" }
];

const PerformanceAll = () => {
    return (
        <div className={styles.performance_container_all}>
            <p className={styles.title}>Производительность администраторов</p>
            <p className={styles.subtitle}>Статистика работы каждого администратора</p>

            <div className={styles.table_wrapper}>
                <div className={`${styles.table_row} ${styles.table_header}`}>
                    <p>Администратор</p>
                    <p>Категория</p>
                    <p>Решено</p>
                    <p>В работе</p>
                    <p>Среднее время</p>
                    <p>Статус</p>
                </div>

                {admins.map((admin, i) => (
                    <div key={i} className={styles.table_row}>
                        <p>{admin.name}</p>
                        <p>{admin.category}</p>
                        <p>{admin.solved}</p>
                        <p>{admin.inProgress}</p>
                        <p>{admin.avgTime}</p>
                        <p>{admin.status}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PerformanceAll;
