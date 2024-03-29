import { useQuery } from '@tanstack/react-query'
import {recipesService} from "@/services/recipes.service";
import {IType} from "@/app/(sidebar)/search/types/search.interface";
import {KEYS} from "@/constants/query-keys.constants";

export function useRecipes(query: string, page= 0, size= 12) {

    const { data, isLoading, isSuccess, error } = useQuery({
        queryKey: [KEYS.recipes, [query]],
        queryFn: () => recipesService.getRecipes(query, page, size)
    })

    return { data, isLoading, isSuccess, error }
}


export function useSearchRecipes(query: string, page= 0, size= 12) {

    const { data, isLoading, isSuccess, error } = useQuery({
        queryKey: [KEYS.recipes, [query]],
        queryFn: () => recipesService.getAndSearchRecipes(query, page, size)
    })

    return { data, isLoading, isSuccess, error }
}