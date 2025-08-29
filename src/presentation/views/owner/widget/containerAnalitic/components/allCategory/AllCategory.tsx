import { FaChartPie } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import styles from './style/Style.module.css'

const data = [
  { name: 'Категория A', value: 400 },
  { name: 'Категория B', value: 300 },
  { name: 'Категория C', value: 200 },
  { name: 'Категория D', value: 100 },
];

// отсортируем по убыванию
const sortedData = [...data].sort((a, b) => b.value - a.value);

const colors = ['#4F46E5', '#6366F1', '#818CF8', '#A5B4FC'];

const AllCategory = () => {
  return (
    <div className={styles.all_category}>
      <div className={styles.category_header}>
        <FaChartPie className={styles.icon} />
        <p>Обращения по категориям</p>
      </div>
      <p className={styles.subtitle}>Распределение обращений по направлениям</p>

      <div className={styles.chartWrapper}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={sortedData} margin={{ top: 10, right: 20, left: 0, bottom: 30 }}>
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Bar dataKey="value" radius={[10, 10, 0, 0]}>
              {sortedData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default AllCategory;
