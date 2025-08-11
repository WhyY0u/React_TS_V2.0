import styles from "./style/Style.module.css";
import SearchComponent from "../search/Search";
import SortedClickContainer from "../sortedClickContainer/SortedClickContainer";

const SortedContainer = () => {

    return (
        <div className={styles.sorted_container}>
            <SearchComponent />
            <SortedClickContainer />
        </div>
    );
};

export default SortedContainer;
