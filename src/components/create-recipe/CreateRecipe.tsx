import React, {FormEvent, useState} from 'react';
import Title from "@/components/ui/title/Title";
import FileInput from "@/components/ui/file-input/FileInput";
import {Field} from "@/components/ui/field/Field";
import styles from './CreateRecipe.module.scss'
import {Button} from "@/components/ui/button/Button";
import { IoCloseCircleSharp } from "react-icons/io5";
import Select from "@/components/ui/select/Select";
import {useCreateRecipe} from "@/hooks/recipes/useCreateRecipe";
import {CATEGORIES_ARRAY, DIFFICULTY, INGREDIENTS_MEASURE} from "@/constants/category.constants";
import Difficulty from "@/components/create-recipe/Difficulty";
import clsx from "clsx";
import SelectCategory from "@/components/ui/select/SelectCategory";
import Ingredients from "@/components/create-recipe/Ingredients";
import {TypeIngredients} from "@/types/recipes.types";
import IngredientItem from "@/components/create-recipe/IngredientItem";

const CreateRecipe = ({setIsOpen} : {setIsOpen : (state: boolean) => void}) => {

    const handleClose = () => setIsOpen(false)

    const [image, setImage] = useState<null | File>(null)
    const [difficulty, setDifficulty] = useState(DIFFICULTY[0])
    const [category, setCategory] = useState(CATEGORIES_ARRAY[1])
    const [ingredients, setIngredients] = useState<TypeIngredients[] | []>([])


    const {handleSubmit,
        isLoading, register ,
        watch,
        reset,
        isValid}
        = useCreateRecipe({image,
        difficulty, category, ingredients})


    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        setIngredients([])
        setCategory(CATEGORIES_ARRAY[1])
        setDifficulty(DIFFICULTY[0])
        setImage(null)

        return handleSubmit(e)
    }


    return (
        <div className={styles.recipe}>
            <form onSubmit={onSubmit} className={styles.content}>
                <div className={styles.title}>
                    <Title>Create recipe</Title>
                </div>
                <div>
                    <p className={styles.subtitle}>Add a recipe photo</p>
                    <FileInput
                        register={register}
                        selectedFile={image}
                        setSelectedFile={setImage}
                    />
                </div>
                <div>
                    <p className={styles.subtitle}>Name your recipe</p>
                    <Field  {...register('title', {
                        required: 'Name is required!',
                        minLength: {value: 3, message: 'Minimum length is 3'},
                        maxLength: {
                            value: 30,
                            message: 'Name should not exceed 30 characters',
                        }
                    })} placeholder="Name"
                    />
                </div>
                <div>
                    <p className={styles.subtitle}>Add a description</p>
                    <Field
                        {...register('description', {
                            required: 'Description is required!',
                            minLength: {value: 3, message: 'Minimum length is 3'},
                            maxLength: {
                                value: 1000,
                                message: 'Description should not exceed 1000 characters',
                            }
                        })}
                        placeholder="Description"
                    />
                </div>
                <div>
                    <p className={styles.subtitle}>Add an ingredient</p>
                    <div className={styles.ingredients}>
                        <div className={styles.field}>
                            <Field
                                {...register('ingredient')}
                                placeholder="Ingredients name"
                            />
                        </div>
                        <Select
                            register={register}
                            array={INGREDIENTS_MEASURE}
                        />
                        <Ingredients setIngredients={setIngredients} reset={reset} watch={watch}/>
                    </div>
                </div>
                <ul className={styles.list}>
                    {!!ingredients.length && ingredients.map((item, idx) => (
                        <IngredientItem setIngredients={setIngredients} key={idx} item={item}/>
                    ))}
                </ul>
                <div>
                    <p className={styles.subtitle}>Difficulty</p>
                    <Difficulty selected={difficulty} setSelected={setDifficulty}/>
                </div>

                <div className=" relative ">
                    <p className={styles.subtitle}>Category of meal</p>
                    <SelectCategory
                        {...register('category')}
                        select={category}
                        setSelect={setCategory}
                        array={CATEGORIES_ARRAY}
                    />
                </div>
                <div>
                    <p className={styles.subtitle}>Preparation time</p>
                    <Field
                        isNumber={true}
                        {...register('cookingTimeMinutes', {required: 'This field is required!',})}
                        placeholder="How much time does it need?(minutes)"
                    />
                </div>

                <Button disabled={isLoading || !isValid || !image || !ingredients.length} type="submit" className={clsx(styles.button, "button")}>
                    Create a recipe
                </Button>


            </form>
            <span onClick={handleClose} className={styles.close}><IoCloseCircleSharp/></span>
        </div>
    );
};

export default CreateRecipe;