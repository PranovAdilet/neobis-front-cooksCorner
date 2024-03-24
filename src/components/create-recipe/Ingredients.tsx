import React, {Dispatch, SetStateAction} from 'react';
import {UseFormReset, UseFormWatch} from "react-hook-form";
import {TypeIngredients, TypeRecipesCreate} from "@/types/recipes.types";
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
    const isDisabled = data && data.ingredient && data.amount && data.measureUnit.length

    const handlePush = () => {
        if (isDisabled){
            setIngredients(prev => [...prev, data])
            reset({
                ingredient: "",
                amount: 1,
                measureUnit: "kg"
            })
        }
    }

    return <button type="button" disabled={!isDisabled} onClick={handlePush} className={styles.plus}>+</button>
};

export default Ingredients;