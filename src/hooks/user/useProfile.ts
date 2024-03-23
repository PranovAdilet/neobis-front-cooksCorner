import {QueryClient, useQuery, useQueryClient} from '@tanstack/react-query'

import { userService } from '@/services/user.service'
import {recipesService} from "@/services/recipes.service";
import {KEYS} from "@/constants/query-keys.constants";
import {useEffect} from "react";
import {authService} from "@/services/auth.service";

export function useProfile(id: number) {
    const { data, isLoading, isSuccess } = useQuery({
        queryKey: [KEYS.profile],
        queryFn: () => userService.getUserById(id)
    })

    return { data, isLoading, isSuccess }
}


export function useProfileTypeRecipes(type: string) {

    const { data, isLoading, isSuccess } = useQuery({
        queryKey: [KEYS.profile_type_recipes, type],
        queryFn: () => recipesService.getProfileRecipes(type)
    })


    return { data, isLoading, isSuccess }
}


export function useRecipesUser(id: number) {

    const { data, isLoading, isSuccess } = useQuery({
        queryKey: [KEYS.profile_type_recipes],
        queryFn: () => userService.getRecipesByUserId(id)
    })


    return { data, isLoading, isSuccess }
}

