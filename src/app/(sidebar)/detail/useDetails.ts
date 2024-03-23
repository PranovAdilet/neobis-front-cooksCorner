import {useQuery} from "@tanstack/react-query";
import {recipesService} from "@/services/recipes.service";
import {KEYS} from "@/constants/query-keys.constants";
import {reviewsService} from "@/services/reviews.service";


export function useDetailsRecipe (id: number){
    const {data, isLoading, isSuccess} = useQuery({
        queryKey: [KEYS.details],
        queryFn: () => recipesService.getRecipeById(id)
    })


    return {data, isLoading, isSuccess}
}
