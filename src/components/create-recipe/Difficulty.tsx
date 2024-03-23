import React from 'react';
import styles from "./CreateRecipe.module.scss";
import {DIFFICULTY} from "@/constants/category.constants";
import clsx from "clsx";

interface IProps{
    selected: string
    setSelected: (state: string) => void
}
const Difficulty = ({selected, setSelected}:IProps) => {

    const handleSelect = (item: string) => setSelected(item)


    return (
        <ul className={styles.ingredients}>
            {
                DIFFICULTY.map(item => (
                    <li
                        onClick={() => handleSelect(item)}
                        key={item}
                        value={item}
                        className={clsx(selected === item && styles.difficulty__item_active, styles.difficulty__item)}
                    >
                        {item}
                    </li>
                ))
            }
        </ul>
    );
};

export default Difficulty;