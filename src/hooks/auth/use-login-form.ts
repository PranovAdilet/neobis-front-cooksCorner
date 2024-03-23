import {ROUTES} from "@/config/pages-url.config";
import {useMutation } from "@tanstack/react-query";
import {useForm } from "react-hook-form";
import {authService} from "@/services/auth.service";
import {ILoginForm} from "@/types/auth.types";
import {toast} from "react-toastify";
import {useRouter} from "next/navigation";
import {KEYS} from "@/constants/query-keys.constants";



export function useLoginForm() {
    const router = useRouter()

    const { register,
        handleSubmit,
        reset, formState: { errors, isValid} } = useForm<ILoginForm>({mode: 'onChange'})


    const signInMutation = useMutation({
        mutationKey: [KEYS.login],
        mutationFn: (data: ILoginForm) => authService.login(data),
        onSuccess(){
            toast.success(`Successfully login!`)
            reset();
            router.push(ROUTES.HOME);
        },
        onError(error){
            console.log(error)
            toast.error("Incorrect data, please try again!")
        }
    });

    const errorMessage = signInMutation.error ? `Login is failed!` : undefined;


    return {
        errors,
        isValid,
        register,
        errorMessage,
        handleSubmit: handleSubmit((data) => signInMutation.mutate(data)),
        isLoading: signInMutation.isPending,
    };
}
