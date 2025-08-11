import styles from './styles/Style.module.css'
import ContainerStats from './components/containerStats/ContainerStats';
import SortedContainer from './components/sortedContainer/SortedContainer';

const Home = () => {

    return (
        <div className={`${styles.main_container}`}>
            <p className={`${styles.name}`}>Добро пожаловать,<br /> <span className={`${styles.name_gradient}`}> {localStorage.getItem('name')}!</span></p>
            <p className={`${styles.ticket_status}`}>Создавайте тикеты и отслеживайте их статус</p>
            <ContainerStats />
            <div className={`${styles.ticket_list_name}`}>
                <p className={`${styles.ticket_name}`}>Тикеты <span className={`${styles.color_grey}`}>• В работе</span></p>
                <p className={`${styles.ticket_count}`}>1 из 3</p>
            </div>
        </div>
    );
};

export default Home;