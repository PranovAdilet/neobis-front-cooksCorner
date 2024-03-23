import {InvalidateQueryFilters, useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {KEYS} from "@/constants/query-keys.constants";
import {reviewsService} from "@/services/reviews.service";
import {toast} from "react-toastify";



export function useComments (id: number){
    const {data, isLoading, isSuccess} = useQuery({
        queryKey: [KEYS.comments],
        queryFn: () => reviewsService.getCommentsByRecipe(id)
    })


    return {data, isLoading, isSuccess}
}

export function useGetReplies(id: number){
    const {data, isLoading, isSuccess} = useQuery({
        queryKey: [KEYS.getReply],
        queryFn: () => reviewsService.getReplies(id)
    })

    return {data, isLoading, isSuccess}
}



export function useAddReply(
    id: string,
    text: string,
    setText: (text: string) => void,
    type: string) {

    const queryClient = useQueryClient()

    const addComment = useMutation({
        mutationKey: [KEYS.addReply],
        mutationFn: reviewsService.addReply,
        async onSuccess(){
            toast.success('Сomment has been added')
            await queryClient.invalidateQueries(KEYS.comments as InvalidateQueryFilters)
            await queryClient.invalidateQueries(KEYS.getReply as InvalidateQueryFilters)
            queryClient.clear();
            setText('')

        },
        onError(error){
            console.log(error)
            toast.error('Failed!')
        }
    });

    return {
        mutate: () => {
            const newData = {
                isReply: type === "reply",
                text,
                objectId: +id
            }
            return reviewsService.addReply(newData)
        },
        isLoading: addComment.isPending,
        error: addComment.error
    };
}
