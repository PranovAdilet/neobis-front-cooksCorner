import Cookies from "js-cookie";
import type {ILoginResponse} from "@/types/auth.types";

export enum EnumTokens {
    'ACCESS_TOKEN' = 'accessToken',
    'REFRESH_TOKEN' = 'refreshToken',
    'USER_ID' = 'userId'
}


export const AuthTokensService = {
    getAccessToken: () => {
        const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)
        return accessToken || null
    },
    getUserId: () => {
        const userId = Cookies.get(EnumTokens.USER_ID)
        if (userId){
            return userId
        }
        return ''
    },
    saveTokenStorage: (data: ILoginResponse) => {
        Cookies.set(EnumTokens.USER_ID, JSON.stringify(data.userId), {
            domain: 'localhost',
            sameSite: 'strict',
            expires: 7,
            secure: true
        })

        Cookies.set(EnumTokens.ACCESS_TOKEN, data.accessToken, {
            domain: 'localhost',
            sameSite: 'strict',
            expires: 7,
            secure: true
        })
        Cookies.set(EnumTokens.REFRESH_TOKEN, data.refreshToken, {
            domain: 'localhost',
            sameSite: 'strict',
            secure: true
        })
    },
    removeFromStorage: () => {
        Cookies.remove(EnumTokens.ACCESS_TOKEN)
        Cookies.remove(EnumTokens.REFRESH_TOKEN)

        localStorage.removeItem('user')
    }
}
