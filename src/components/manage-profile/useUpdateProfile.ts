'use client'

import {InvalidateQueryFilters, useMutation, useQueryClient} from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import {toast} from "react-toastify";
import {useRouter} from "next/navigation";
import {userService} from "@/services/user.service";
import {TypeUpdateProfile} from "@/types/user.types";
import {KEYS} from "@/constants/query-keys.constants";

export function useUpdateProfile(userId : number, image: File | null) {

    const queryClient = useQueryClient()

    const { register,
        watch,
        handleSubmit,
        reset, formState: { errors, isValid } } = useForm<TypeUpdateProfile>({mode: "onChange"});


    const signInMutation = useMutation({
        mutationKey: [KEYS.updateProfile],
        mutationFn: userService.updateProfile,
        onSuccess(){
            queryClient.invalidateQueries(KEYS.profile as InvalidateQueryFilters)
            toast.success('Successfully updating!')
            reset()

        },
        onError(error){
            reset()
            console.log(error)
            toast.error('Updating is failed')
        }
    });

    const errorMessage = signInMutation.error ? "Updating is failed" : undefined;


    return {
        watch,
        register,
        errors,
        isValid,
        errorMessage,
        handleSubmit: handleSubmit((data) => {
            const formData = new FormData();

            formData.append('dto', JSON.stringify({...data, userId}))
            if (image) {
                formData.append('image', image);
            }
            signInMutation.mutate(formData)
        }),
        isLoading: signInMutation.isPending,
    };
}
