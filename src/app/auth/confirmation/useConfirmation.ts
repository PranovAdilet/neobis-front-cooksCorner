import {useRouter, useSearchParams} from "next/navigation";
import {useMutation} from "@tanstack/react-query";
import {authService} from "@/services/auth.service";
import {toast} from "react-toastify";
import {ROUTES} from "@/config/pages-url.config";
import {KEYS} from "@/constants/query-keys.constants";

export function useConfirmation(){

    const searchParams = useSearchParams()
    const {replace} = useRouter()

    const token = searchParams.get('ct')

    const confirmation = useMutation({
        mutationKey: [KEYS.confirmation],
        mutationFn: authService.confirmation,
        onSuccess(){
            toast.success('Successfully confirmation!')
            replace(ROUTES.CONFIRMED)
        },
        onError(error){
            console.log(error)
            replace(ROUTES.SIGN_IN)
            toast.error('Confirmation is failed')
        }

    })

    return {
        token,
        confirmation: (token: string) => confirmation.mutate(token),
        isLoading: confirmation.isPending

    }

}


