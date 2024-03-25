import {InvalidateQueryFilters, useMutation, useQueryClient} from "@tanstack/react-query";
import {recipesService} from "@/services/recipes.service";
import {TypeBookmarkAndRecipe} from "@/types/recipes.types";
import {KEYS} from "@/constants/query-keys.constants";

export function useToggleActions(type: string) {

    const queryClient = useQueryClient()

    const {mutate, isPending, isError} = useMutation({
        mutationKey: [KEYS.toggle_buttons],
        mutationFn: (data: TypeBookmarkAndRecipe) => recipesService.toggleLikeDislikeBookmark(data),
        onSuccess:  async () => {
            if (type === "recipes"){
                //await queryClient.invalidateQueries({queryKey: [KEYS.details]})
            }else{
                //await queryClient.invalidateQueries(KEYS.comments as InvalidateQueryFilters)
            }
        },
        onError(error){
            console.log(error)
        }
    });


    return {
        mutate,
        isLoading: isPending,
        isError
    };
}
