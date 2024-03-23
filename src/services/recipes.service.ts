import {axiosClassics, axiosWithAuth} from "@/api/interceptors";
import {IFullRecipe, IRecipesResponse, TypeBookmarkAndRecipe, TypeRecipesCreate} from "@/types/recipes.types";


export const recipesService = {

    BASE_URL: '/recipes',

    async getAndSearchRecipes(query: string, page = 0, size = 12){

        const parameters = `/recipes?query=${query}&page=${page}&size=${size}`
        const response = await axiosWithAuth.get<IRecipesResponse>(parameters, {
            headers: {
                "Content-Type": "text/plain"
            }
        })
        return response.data.content
    },

    async createRecipe(data: FormData){
        const response = await axiosWithAuth.post<string>("/recipes", data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        return response.data
    },
    async getRecipeById(id: number){
        const response = await axiosWithAuth.get<IFullRecipe>(`/recipes/${id}`)
        return response.data
    },

    async toggleLikeDislikeBookmark(data: TypeBookmarkAndRecipe){
        const parameters = `/actions/${data.actionId}/${data.objectId}/${data.id}`
        const response = await axiosWithAuth.put<string>(parameters)
        return response.data
    },
    async getProfileRecipes(type: string,  page = 0 , size = 12){
        const parameters = `?query=${type}&page=${page}&size=${size}`
        const response = await axiosWithAuth.get<IRecipesResponse>("/recipes" + parameters)
        return response.data.content
    }


}

