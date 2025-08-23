import { useState } from 'react';
import styles from './style/Style.module.css';

const CreateTicket = () => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const isFormValid = title.trim().length > 0 && description.trim().length > 0;

    return (
        <div className={styles.container_create_ticket}>
            <div className={styles.title_container}>
                <p className={styles.plus}>+</p>
                <p className={styles.create_ticket_label}>Создать новый тикет</p>
            </div>

            <label>
                <p>Тема обращения</p>
                <input
                    placeholder="Опишите кратко суть вопроса..."
                    maxLength={30}
                />
                <span className={styles.counter}>
                    {title.length}
                </span>
            </label>

            <label>
                <p>Подробное описание</p>
                <textarea
                    placeholder="Расскажите подробнее о вашем вопросе или проблеме..."
                    maxLength={500}
                />
                <span className={styles.counter}>
                    {description.length}/500
                </span>
            </label>

            <button disabled={!isFormValid}>
                {'Отправить тикет'}
            </button>
        </div>
    );
};

export default CreateTicket;
