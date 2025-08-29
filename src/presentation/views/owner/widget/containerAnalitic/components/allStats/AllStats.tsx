import { FaClock, FaEnvelopeOpenText, FaUsers, FaUserShield } from 'react-icons/fa';
import Stats from './components/stats/Stats';
import styles from './style/Style.module.css'
const AllStats = () => {
    return <>
        <div className={`${styles.container_all_stats}`}>

            <Stats
                bigText={'631'}
                name='Всего обращений'
                description='за месяц'
                icon={<FaEnvelopeOpenText size={24} />}
            />

            <Stats
                bigText={'6'}
                name='Администраторов'
                description='Активных сотрудников'
                icon={<FaUserShield size={24} />}
            />

            <Stats
                bigText={'2.5ч'}
                name='Среднее время ответа'
                description='за неделю'
                icon={<FaClock size={24} />}
            />

            <Stats
                bigText={'1,488'}
                name='Пользователей'
                description='зарегистрировано'
                icon={<FaUsers size={24} />}
            />

        </div>
    </>
}

export default AllStats;