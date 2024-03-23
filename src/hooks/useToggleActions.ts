import {InvalidateQueryFilters, useMutation, useQueryClient} from "@tanstack/react-query";
import {toast} from "react-toastify";
import {recipesService} from "@/services/recipes.service";
import {TypeBookmarkAndRecipe} from "@/types/recipes.types";
import {KEYS} from "@/constants/query-keys.constants";

export function useToggleActions(type: string) {

    const queryClient = useQueryClient()

    const {mutate, isPending} = useMutation({
        mutationKey: [KEYS.toggle_buttons],
        mutationFn: (data: TypeBookmarkAndRecipe) => recipesService.toggleLikeDislikeBookmark(data),
        onSuccess:  async () => {
            queryClient.clear()
        },
        onError(error){
            console.log(error)
            toast.error('Please authorizate!')
        }
    });


    return {
        mutate: mutate,
        isLoading: isPending
    };
}
