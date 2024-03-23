import React, {Dispatch, SetStateAction} from 'react';
import styles from "./CreateRecipe.module.scss";
import {IIngredient, TypeIngredients} from "@/types/recipes.types";
import {IoCloseCircleSharp} from "react-icons/io5";

interface IProps{
    item: TypeIngredients
    setIngredients: Dispatch<SetStateAction<[] | TypeIngredients[]>>
}

const IngredientItem = ({item, setIngredients} : IProps) => {
    const handleRemove = () => setIngredients(prev =>
        prev.filter(el => el.id !== item.id))

    return (
        <li className={styles.item}>
            <div className={styles.item__content}>
                <p className={styles.ingredient}>{item.ingredient} </p>
                <div className={styles.item__block}>
                    <p className={styles.amount}>{item.amount}</p>
                    <p className={styles.measureUnit}>{item.measureUnit}</p>
                </div>
            </div>
            <span onClick={handleRemove} className={styles.remove}><IoCloseCircleSharp/></span>
        </li>
    );
};

export default IngredientItem;