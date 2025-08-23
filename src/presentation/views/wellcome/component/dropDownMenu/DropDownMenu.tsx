import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import styles from "./style/Style.module.css";

interface DropDownMenuProps {
    options: string[];
    placeholder?: string;
    multiple?: boolean; // 👈 добавили поддержку multiple
    onSelect: (value: string | string[]) => void;
}

const DropDownMenu = ({
    options,
    placeholder = "Выберите...",
    multiple = false,
    onSelect,
}: DropDownMenuProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<string | string[]>(
        multiple ? [] : ""
    );
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleSelect = (value: string) => {
        if (multiple) {
            setSelected((prev) => {
                const arr = Array.isArray(prev) ? [...prev] : [];
                if (arr.includes(value)) {
                    const newArr = arr.filter((v) => v !== value);
                    onSelect(newArr);
                    return newArr;
                } else {
                    const newArr = [...arr, value];
                    onSelect(newArr);
                    return newArr;
                }
            });
        } else {
            setSelected(value);
            onSelect(value);
            setIsOpen(false);
        }
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const renderLabel = () => {
        if (multiple) {
            return Array.isArray(selected) && selected.length > 0
                ? selected.join(", ")
                : placeholder;
        }
        return typeof selected === "string" && selected
            ? selected
            : placeholder;
    };

    return (
        <div className={styles.dropdown} ref={menuRef}>
            <div
                className={styles.dropdown_header}
                onClick={() => setIsOpen(!isOpen)}
            >
                {renderLabel()}
                <FaChevronDown
                    className={`${styles.icon} ${isOpen ? styles.rotate : ""}`}
                />
            </div>

            {isOpen && (
                <ul className={`${styles.dropdown_list} ${isOpen ? styles.show : ""}`}>
                    {options.map((opt, idx) => (
                        <li
                            key={idx}
                            className={styles.dropdown_item}
                            onClick={() => toggleSelect(opt)}
                        >
                            <span className={styles.item_label}>{opt}</span>
                            {multiple && (
                                <input
                                    type="checkbox"
                                    checked={
                                        Array.isArray(selected)
                                            ? selected.includes(opt)
                                            : false
                                    }
                                    readOnly
                                />
                            )}
                        </li>

                    ))}
                </ul>

            )}
        </div>
    );
};

export default DropDownMenu;
