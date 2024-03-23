import type {ILoginForm, ILoginResponse, IRegisterForm, TypeRegisterResponse} from "@/types/auth.types";
import {axiosClassics, axiosWithAuth} from "@/api/interceptors";
import {AuthTokensService, EnumTokens} from "@/services/auth-token.service";
import Cookies from "js-cookie";


export const authService = {

    async login(data: ILoginForm){
        const response = await axiosClassics.post<ILoginResponse >(
            `/auth/login`, data
        )

        if (response.data) AuthTokensService.saveTokenStorage(response.data)

        return response
    },
    async register(data: IRegisterForm){
        const response = await axiosClassics.post<TypeRegisterResponse>(
            `/auth/registration`, data
        )

        return response.data
    },

    async getNewTokens(){
        const refreshToken = Cookies.get(EnumTokens.REFRESH_TOKEN)


        const response = await axiosClassics.post<ILoginResponse>(
            `/auth/refresh-token`, `Bearer ${refreshToken}`,{
                headers: {
                    'Content-Type': 'text/plain'
                }
            }
        )

        if (response.data.accessToken) AuthTokensService.saveTokenStorage(response.data)

        return response.data
    },

    async logout(refreshToken: string){
        const response = await axiosWithAuth.post<string>(
            '/auth/logout', `Bearer ${refreshToken}`, {
                headers: {
                    'Content-Type': 'text/plain'
                }
            })


        if (response.data) AuthTokensService.removeFromStorage()

        return response
    },

    async confirmation(token: string){
        const response = await axiosWithAuth.put<string>(
            `/auth/confirmation?ct=${token}`)

        return response.data
    }

}