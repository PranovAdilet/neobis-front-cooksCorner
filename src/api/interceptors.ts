import axios, {CreateAxiosDefaults} from "axios";
import {errorCatch} from "@/api/error";
import {authService} from "@/services/auth.service";
import {AuthTokensService} from "@/services/auth-token.service";


const SERVER_URL = process.env.SERVER_URL

const options : CreateAxiosDefaults = {
    baseURL: SERVER_URL,
    headers: {
        "Content-Type": 'application/json'
    },
    withCredentials: true
}

const axiosClassics = axios.create(options)

const axiosWithAuth = axios.create(options)

axiosWithAuth.interceptors.request.use(config => {
    const accessToken = AuthTokensService.getAccessToken()

    if (config?.headers && accessToken){
        config.headers.Authorization = `Bearer ${accessToken}`
    }



    return config
})

axiosWithAuth.interceptors.response.use(
    config => config,
    async error => {
        const originalRequest = error.config

        if (
            (error?.response?.status === 401 ||
                errorCatch(error) === 'jwt expired' ||
                errorCatch(error) === 'jwt must be provided') &&
            error.config &&
            !error.config._isRetry
        ){
            originalRequest._isRetry = true

            try {
                await authService.getNewTokens()
                return axiosWithAuth.request(originalRequest)
            }catch (err){
                //errorCatch(error) === 'jwt expired' в идеале должна быть такая проверка, но так не работает
                if (errorCatch(error) === 'jwt expired') AuthTokensService.removeFromStorage()
            }
        }

        throw error

    }
)


export {axiosClassics, axiosWithAuth}