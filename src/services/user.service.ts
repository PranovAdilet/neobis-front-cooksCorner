import {IFollower, ISearchUsers, IUser, TypeUserForm} from "@/types/auth.types";
import {axiosClassics, axiosWithAuth} from "@/api/interceptors";
import {IRecipesResponse, TypeRecipesCreate} from "@/types/recipes.types";
import {TypeResponseUpdateProfile, TypeUpdateProfile} from "@/types/user.types";


class UserService{
    private BASE_URL = '/users'

    async getUsers(query: string,  page = 0 , size = 12){
        const parameters = `/search?query=${query}&page=${page}/size=${size}`
        const response = await axiosClassics.get<IUser>(this.BASE_URL + parameters)
        return response.data
    }

    async getRecipesByUserId(id: number,  page = 0 , size = 12){
        const parameters = `/recipes/${id}`
        const response = await axiosClassics.get<IRecipesResponse>(this.BASE_URL + parameters)
        return response.data.content
    }
    async updateProfile(data: FormData){
        const response = await axiosWithAuth.put<TypeResponseUpdateProfile>("/users", data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        return response.data
    }
    async getUserById(id: number){
        const response = await axiosWithAuth.get<IUser>(`${this.BASE_URL}/${id}`)
        return response.data
    }
    async followOrUnfollow(id: number, type: string){
        const response = await axiosWithAuth.post<string>(`${this.BASE_URL}/${type}/${id}`)
        return response.data
    }
    async getFollowing(id: number,  page = 0 , size = 12){
        const response = await axiosWithAuth.get<ISearchUsers>(`${this.BASE_URL}/${id}/following`)
        return response.data.content
    }
    async getFollowers(id: number, page = 0 , size = 12){
        const response = await axiosWithAuth.get<ISearchUsers>(`${this.BASE_URL}/${id}/followers`)
        return response.data.content
    }
    async searchUsers(query: string,  page = 0 , size = 12){
        const parameters = `/search?query=${query}&page=${page}&size=${size}`
        const response = await axiosClassics.get<ISearchUsers>(this.BASE_URL + parameters)
        return response.data.content
    }

}

export const userService = new UserService()