export interface IResponseComment{
    content: IComment[]
}

export interface IComment{
    commentId: number
    parentCommentId: number
    authorId: number
    imageUrl: string
    author: string
    createdAt: string
    updatedAd: string
    isUpdated: boolean
    replyCount: number
    likeCount: number
    isLiked: boolean
    text:string
    isDeleted: boolean
}

export interface ICommentReq{
    objectId: number,
    text: string
    isReply: boolean
}