import Menu from './components/menu/Menu';
import styles from './style/Style.module.css'
import ContainerAnilition from './widget/containerAnalitic/ContainerAnalitic';



const Owner = () => {
    return <>
        <div className={`${styles.main_container}`}>
            <p className={`${styles.text_one}`}>Панель управление Владельца</p>
            <p className={`${styles.text_two}`}>Полная аналитика и управление системой SOSAitu</p>
            <Menu />
            <ContainerAnilition />
        </div>
    </>
}

export default Owner;