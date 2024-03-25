import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {KEYS} from "@/constants/query-keys.constants";
import {reviewsService} from "@/services/reviews.service";
import {toast} from "react-toastify";
import {IComment} from "@/types/comments.types";



export function useComments (id: number){
    const {data, isLoading, isSuccess} = useQuery({
        queryKey: [KEYS.comments],
        queryFn: () => reviewsService.getCommentsByRecipe(id)
    })


    return {data, isLoading, isSuccess}
}

export function useGetReplies(id: number, isReply: boolean){
    const {data, isLoading, isSuccess} = useQuery({
        queryKey: [KEYS.getReply, id],
        queryFn: () => reviewsService.getReplies(id),
        enabled: isReply
    })

    return {data, isLoading, isSuccess}
}



export function useAddReply(
    id: string,
    text: string,
    type: string) {


    const addComment = useMutation({
        mutationKey: [KEYS.addReply],
        mutationFn: reviewsService.addReply,
        async onSuccess(){
            toast.success('Сomment has been added')

        },
        onError(error){
            console.log(error)
            toast.error('Failed!')
        }
    });

    return {
        mutate: () => {
            console.log(type === "reply")
            const newData = {
                isReply: type === "reply",
                text,
                objectId: +id
            }
            return reviewsService.addReply(newData)
        },
        isLoading: addComment.isPending,
        error: addComment.error,
        isSuccess: addComment.isSuccess,
        isError: addComment.isError
    };
}

export const useUpdateAndRemoveComment = (type: string) => {
    const queryClient = useQueryClient()

    const updateComment = useMutation<IComment, Error, {commentId: number, text: string}>({
        mutationKey: [KEYS.updateComment],
        mutationFn: ({ commentId, text }) => reviewsService.updateComment(commentId, text),
        async onSuccess(){
            if (type === "reply"){
                await queryClient.invalidateQueries({queryKey: [KEYS.getReply]})
            }else {
                await queryClient.invalidateQueries({queryKey: [KEYS.comments]})
            }
            toast.success("Successfully updating!")
        },
        onError(){
            toast.error("Failed!")
        }
    })
    const deleteComment = useMutation<string, Error, {commentId: number}>({
        mutationKey: [KEYS.deleteComment],
        mutationFn: ({ commentId }) => reviewsService.deleteComment(commentId),
        async onSuccess(){
            if (type === "reply"){
                await queryClient.invalidateQueries({queryKey: [KEYS.getReply]})
                await queryClient.invalidateQueries({queryKey: [KEYS.comments]})
            }else {
                await queryClient.invalidateQueries({queryKey: [KEYS.comments]})
            }
            toast.success("Successfully deleting!")
        },
        onError(){
            toast.error("Failed!")
        }
    })


    return {
        update: (commentId: number, text: string) => updateComment.mutate({ commentId, text }),
        remove: (commentId: number) => deleteComment.mutate({ commentId }),
        isLoading: updateComment.isPending || deleteComment.isPending
    }
}

