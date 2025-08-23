import { useEffect, useState } from 'react';
import ContainerStats from '../home/components/containerStats/ContainerStats';
import styles from './style/Style.module.css'
import { InMemoryTicketRepository } from '@/data/repositories/ticket/memory/InMemoryTicketRepository';
import { TicketStatus } from '@/domain/entities/ticket/Ticket';
import CreateTicket from './components/createTicket/createTicket';
const User = () => {
    const [counts, setCounts] = useState({ all: 0, new: 0, inProgress: 0, closed: 0 });
    const ticketRepository = new InMemoryTicketRepository();

    useEffect(() => {
        ticketRepository.getTickets({ sortBy: 'date', status: 'Все' }).then(data => {
            const newCounts = data.items.reduce(
                (acc, ticket) => {
                    switch (ticket.ticketStatus) {
                        case TicketStatus.New:
                            console.log(ticket.ticketStatus)
                            acc.new += 1;
                            break;
                        case TicketStatus.In_Progress:
                            acc.inProgress += 1;
                            break;
                        case TicketStatus.Closed:
                            acc.closed += 1;
                            break;
                    }
                    acc.all += 1;
                    return acc;
                },
                { all: 0, new: 0, inProgress: 0, closed: 0 }
            );
            setCounts(newCounts);
        });

    },)

    return <>
        <div className={`${styles.main_container}`}>
            <p className={`${styles.name}`}>Добро пожаловать,<br /> <span className={`${styles.name_gradient}`}> {localStorage.getItem('name')}!</span></p>
            <p className={`${styles.ticket_status}`}>Создавайте тикеты и отслеживайте их статус</p>
            <ContainerStats counts={counts} />
            <CreateTicket />
        </div>
    </>
}

export default User;
