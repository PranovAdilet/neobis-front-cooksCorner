import React, {Dispatch, SetStateAction} from 'react';
import {useRouter} from "next/navigation";
import {useMutation} from "@tanstack/react-query";
import {authService} from "@/services/auth.service";
import Cookies from "js-cookie";
import {EnumTokens} from "@/services/auth-token.service";
import {ROUTES} from "@/config/pages-url.config";

interface IProps{
    classname: string
    setIsOpen: (state: boolean) => void
}

export function LogoutButton ({classname, setIsOpen}: IProps) {
    const router = useRouter()

    const refreshToken = Cookies.get(EnumTokens.REFRESH_TOKEN) || ''

    const {mutate} = useMutation({
        mutationKey: ['logout'],
        mutationFn: () => authService.logout(refreshToken),
        onSuccess: () => {
            router.push(ROUTES.HOME)
            setIsOpen(false)
        }
    })

    return <button className={classname} onClick={() => mutate()}>Yes</button>
};
