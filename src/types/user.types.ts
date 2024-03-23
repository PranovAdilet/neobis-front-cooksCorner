
export interface TypeUpdateProfile{
    userId: number | string
    name: string
    bio: string
    image: FormData
}


export interface TypeResponseUpdateProfile{
    userId: number
    name: string
    bio: string
    imageUrl: string
}


export interface IFollowData{
    id: number
    type: string
}