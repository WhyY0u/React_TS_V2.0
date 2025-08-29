import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import styles from './style/Style.module.css';
import { FaChartPie } from 'react-icons/fa';

const data = [
    { name: 'Категория A', value: 40 },
    { name: 'Категория B', value: 30 },
    { name: 'Категория C', value: 20 },
    { name: 'Категория D', value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AllCategoryProcent = () => {
    return (
        <div className={styles.all_category_procent_container}>
            <div className={styles.header}>
                <FaChartPie size={24} className={styles.icon} />
                <p>Распределение по типам</p>
            </div>
            <p className={styles.subtitle}>Процентное соотношение категорий</p>

            <div className={styles.chart_wrapper}>
                <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={90}
                            dataKey="value"
                            label
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className={styles.customLegend}>
                {data.map((entry, index) => (
                    <div key={index} className={styles.legendItem}>
                        <span
                            className={styles.legendColor}
                            style={{ backgroundColor: COLORS[index % COLORS.length] }}
                        />
                        <span>{entry.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllCategoryProcent;
