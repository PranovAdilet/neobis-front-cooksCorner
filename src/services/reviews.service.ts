import {axiosClassics, axiosWithAuth} from "@/api/interceptors";
import {IFullRecipe} from "@/types/recipes.types";
import {ICommentReq, IResponseComment} from "@/types/comments.types";

export const reviewsService = {

    BASE_URL : '/comments',

    async getCommentsByRecipe(id: number){
        const response = await axiosWithAuth.get<IResponseComment>(`${this.BASE_URL}/${id}`)
        return response.data.content
    },
    async addReply(data: ICommentReq){
        const response = await axiosWithAuth.post<IResponseComment>(`${this.BASE_URL}`, data)
        return response.data.content
    },
    async getReplies(id: number){
        const response = await axiosWithAuth.get<IResponseComment>(`${this.BASE_URL}/${id}/replies`)
        return response.data.content
    },
}