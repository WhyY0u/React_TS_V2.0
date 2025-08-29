import { useState } from 'react';
import styles from './style/Style.module.css';
import CustomDropdown from '../customDropDown/CustomDropdown';
import type { User } from '@/domain/entities/user/User';

interface CreateTIcketProps {
    user: User;
};

const CreateTicket = ({ user }: CreateTIcketProps) => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const isFormValid = title.trim().length > 0 && description.trim().length > 0;

    return (
        <div className={styles.container_create_ticket}>
            <div className={styles.title_container}>
                <p className={styles.plus}>+</p>
                <p className={styles.create_ticket_label}>Создать новый тикет</p>
            </div>

            <label className={styles.label}>
                <p className={styles.label_text}>Тема обращения</p>
                <input
                    className={styles.input}
                    placeholder="Опишите кратко суть вопроса..."
                    maxLength={30}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <span className={styles.counter}>
                    {title.length}/30
                </span>
            </label>

            <label className={styles.label}>
                <p className={styles.label_text}>Подробное описание</p>
                <textarea
                    className={styles.textarea}
                    placeholder="Расскажите подробнее о вашем вопросе или проблеме..."
                    maxLength={1000}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <span className={styles.counter}>
                    {description.length}/1000
                </span>
            </label>

            <label className={styles.label}>
                <p className={styles.label_text}>Категория обращения</p>
                <CustomDropdown
                    options={user.groupsId}
                    placeholder="Выберите категорию..."
                    onSelect={setCategory}
                />
            </label>

            <button className={styles.button} disabled={!isFormValid}>
                {'Отправить тикет'}
            </button>

        </div>
    );
};

export default CreateTicket;
