'use client'

import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import {toast} from "react-toastify";
import {useRouter} from "next/navigation";
import {recipesService} from "@/services/recipes.service";
import {TypeIngredients, TypeRecipesCreate} from "@/types/recipes.types";
import {KEYS} from "@/constants/query-keys.constants";

interface ICreateRecipeProps{
    image: File | null
    difficulty: string
    category: string
    ingredients: TypeIngredients[]
}

export function useCreateRecipe({image,difficulty, category, ingredients }: ICreateRecipeProps) {

    const { register,
        watch,
        handleSubmit,
        control,
        reset, formState: { errors, isValid } } = useForm<TypeRecipesCreate>({mode: "onChange"});


    const createRecipe = useMutation({
        mutationKey: [KEYS.create_recipe],
        mutationFn: recipesService.createRecipe,
        onSuccess(){
            toast.success('Successfully creating!')
            reset();
        },
        onError(error){
            reset()
            console.log(error)
            toast.error('Creating is failed')
        }
    });

    return {
        control,
        watch,
        register,
        errors,
        isValid,
        handleSubmit: handleSubmit((data) => {
            const formData = new FormData()


            const newData = {
                title: data.title,
                category,
                difficulty,
                description: data.description,
                cookingTimeMinutes: data.cookingTimeMinutes,
                ingredients
            }

            formData.append('dto', JSON.stringify(newData))
            if (image) {
                formData.append('image', image);
            }
            createRecipe.mutate(formData)

        }),
        isLoading: createRecipe.isPending,
        reset
    };
}
