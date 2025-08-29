import AllCategory from './components/allCategory/AllCategory';
import AllCategoryProcent from './components/allCategoryProcent/AllCategoryProcent';
import AllStats from './components/allStats/AllStats';
import PerformanceAll from './components/performanceAll/PerformanceAll';
import styles from './style/Style.module.css'

const ContainerAnilition = () => {
    return <>
        <div className={`${styles.container_analitic}`}>
            <AllStats />
            <AllCategory />
            <AllCategoryProcent />
            <PerformanceAll />
        </div>
    </>
}

export default ContainerAnilition;