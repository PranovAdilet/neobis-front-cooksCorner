import React, {Dispatch, SetStateAction} from 'react';
import {UseFormReset, UseFormWatch} from "react-hook-form";
import {IIngredient, TypeIngredients, TypeRecipesCreate} from "@/types/recipes.types";
import {useDebounce} from "@/hooks/useDebounce";
import styles from "@/components/ui/select/Select.module.scss";


interface IProps{
    watch: UseFormWatch<TypeRecipesCreate>
    reset: UseFormReset<TypeRecipesCreate>
    setIngredients: Dispatch<SetStateAction<[] | TypeIngredients[]>>
}
const Ingredients = ({watch, setIngredients, reset} : IProps) => {
    const ingredient = useDebounce(watch('ingredient'))
    const measureUnit = useDebounce(watch('measureUnit'))
    const amount = useDebounce(watch('amount'))

    const data = {
        ingredient,
        measureUnit,
        amount,
        id: Date.now()
    }

    const handlePush = () => {
        setIngredients(prev => [...prev, data])
        reset({
            ingredient: "",
            amount: 1,
            measureUnit: "kg"
        })
    }

    return <div onClick={handlePush} className={styles.plus}>+</div>
};

export default Ingredients;