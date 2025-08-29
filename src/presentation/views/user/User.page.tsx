import { useEffect, useState } from 'react';
import ContainerStats from '../administator/components/containerStats/ContainerStats';
import styles from './style/Style.module.css'
import { InMemoryTicketRepository } from '@/data/repositories/ticket/memory/InMemoryTicketRepository';
import { TicketStatus } from '@/domain/entities/ticket/Ticket';
import CreateTicket from './components/createTicket/createTicket';
import type { User } from '@/domain/entities/user/User';
import InMemoryUserApiRepository from '@/data/repositories/user/memory/InMemoryUserRepository';
const User = () => {
    const [counts, setCounts] = useState({ all: 0, new: 0, inProgress: 0, closed: 0 });
    const [user, setUser] = useState<User | null>(null);
    const ticketRepository = new InMemoryTicketRepository();
    const userRepository = new InMemoryUserApiRepository();

    useEffect(() => {
        userRepository.getMe().then(u => setUser(u));
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

    }, [])

    return <>
        <div className={`${styles.main_container}`}>
            <p className={`${styles.name}`}>Добро пожаловать,<br /> <span className={`${styles.name_gradient}`}> {user?.fullname}!</span></p>
            <p className={`${styles.ticket_status}`}>Создавайте тикеты и отслеживайте их статус</p>
            <ContainerStats counts={counts} />
            {user != null ? <CreateTicket user={user!} /> : ''}
        </div>
    </>
}

export default User;
