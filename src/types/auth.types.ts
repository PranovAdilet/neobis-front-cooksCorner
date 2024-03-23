
export interface ILoginForm{
    email: string
    password: string
}

export interface IRegisterForm extends ILoginForm{
    name: string
    url: string
    rePassword?: string
}

export interface IUser{
    userId: number
    name: string
    bio: string
    imageUrl: string
    recipes: number
    followers: number
    following: number
    isFollowed: null | boolean
    isDeleted: boolean
}

export interface ILoginResponse{
    accessToken: string
    refreshToken: string
    userId: number
}


export type TypeRegisterResponse = {
    response: string
}

export type TypeUserForm = Omit<IUser, 'recipes' | 'following' | 'followers' | 'isFollowed'>

export interface IFollower{
    userId: number
    name: string
    imageUrl: string
}

export interface ISearchUsers{
    content: IFollower[]
}


