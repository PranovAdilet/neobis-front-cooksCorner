import React from 'react';
import styles from "@/components/ui/select/Select.module.scss";

interface IProps{
    item: string
    setSelect: (state: string) => void
}
const SelectItem = ({item, setSelect} : IProps) => {
    const handleClick = () => setSelect(item)

    return (
        <li
            onClick={handleClick}
            value={item}
            className={styles.item}>
            {item}
        </li>
    );
};

export default SelectItem;