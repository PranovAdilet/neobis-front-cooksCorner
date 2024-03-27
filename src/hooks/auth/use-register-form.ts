'use client'

import {ROUTES} from "@/config/pages-url.config";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import {authService} from "@/services/auth.service";
import {IRegisterForm} from "@/types/auth.types";
import {toast} from "react-toastify";
import {useRouter} from "next/navigation";
import {KEYS} from "@/constants/query-keys.constants";

export function useRegisterForm() {

    const router = useRouter();

    const { register,
        watch,
        handleSubmit,
        reset, formState: { errors, isValid } } = useForm<IRegisterForm>({mode: "onChange"});


    const signUpMutation = useMutation({
        mutationKey: [KEYS.register],
        mutationFn: authService.register,
        onSuccess(){
            toast.success('Successfully register!')
            reset()
            router.push(ROUTES.CONFIRMATION);
        },
        onError(error){
            console.log(error)
            toast.error(`Registration is failed, please try again!`)
        }
    });

    const errorMessage = signUpMutation.error ? "Registration is failed" : undefined;

    return {
        watch,
        register,
        errors,
        isValid,
        errorMessage,
        handleSubmit: handleSubmit((data) => {
            const newData = {
                email: data.email,
                password: data.password,
                url: process.env.ENDPOINT as string + ROUTES.CONFIRMATION,
                name: data.name
            }
            signUpMutation.mutate(newData)
        }),
        isLoading: signUpMutation.isPending,
    };
}
