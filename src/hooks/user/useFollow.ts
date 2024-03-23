import {InvalidateQueryFilters, useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {KEYS} from "@/constants/query-keys.constants";
import {toast} from "react-toastify";
import {userService} from "@/services/user.service";
import {IFollowData} from "@/types/user.types";

export function useFollow() {

    const queryClient = useQueryClient()

    const followOrUnfollowMutate = useMutation({
        mutationKey: [KEYS.follow],
        mutationFn: ({id, type} :IFollowData) => userService.followOrUnfollow(id, type),
        async onSuccess(){
            await queryClient.invalidateQueries(KEYS.profile as InvalidateQueryFilters)
        },
        onError(error){
            console.log(error)
            toast.error('Error!')
        }
    });

    return {
        mutate: followOrUnfollowMutate.mutate,
        isLoading: followOrUnfollowMutate.isPending,
        error: followOrUnfollowMutate.error
    };
}


export function useFollowers(id: number, type: string) {
    const { data, isLoading, isSuccess } = useQuery({
        queryKey: [KEYS.followers, id],
        queryFn: () => {
            if (type === "Followers"){
                return  userService.getFollowers(id)
            }
            return userService.getFollowing(id)
        }
    })

    return { data, isLoading, isSuccess }
}

export function useFollowing(id: number) {
    const { data, isLoading, isSuccess } = useQuery({
        queryKey: [KEYS.following, id],
        queryFn: () => userService.getFollowing(id)
    })

    return { data, isLoading, isSuccess }
}


