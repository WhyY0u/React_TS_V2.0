import { IoAlarmOutline, IoTicketOutline } from "react-icons/io5";
import TicketStats from "../ticketStats/TicketStats";
import { IoIosCheckmarkCircleOutline, IoIosInformationCircleOutline } from "react-icons/io";
import styles from './style/Style.module.css'

const ContainerStats = () => {
    return <div className={`${styles.container_ticket}`}>

        <TicketStats
            icon={<IoTicketOutline style={{ color: "#6065fa", fontSize: "28px" }} />}
            label="Всего тикетов"
            count={5}
        />
        <TicketStats
            icon={<IoIosInformationCircleOutline style={{ color: "#3b82f6", fontSize: "28px" }} />}
            label="Новые"
            count={1}
        />
        <TicketStats
            icon={<IoAlarmOutline style={{ color: "#f97316", fontSize: "28px" }} />}
            label="В работе"
            count={5}
        />
        <TicketStats
            icon={<IoIosCheckmarkCircleOutline style={{ color: "#22c55e", fontSize: "28px" }} />}
            label="Закрыте"
            count={10}
        />
    </div>
}

export default ContainerStats;