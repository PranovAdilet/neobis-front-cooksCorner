export interface IRecipe{
    recipeId: number
    title: string
    author: string
    imageUrl: string
    likes: number
    bookmarks: number
    isLiked: boolean
    isBookmarked: boolean
}

export interface IFullRecipe extends IRecipe{
    difficulty: string
    description: string
    cookingTimeMinutes: string
    ingredients: IIngredient[]
    authorId: number
}

export interface IRecipesResponse{
    content: IRecipe[]
}

export interface IIngredient{
    ingredient: string
    amount: number
    measureUnit: string
}
export interface TypeRecipesCreate{
    image: string
    title: string
    difficulty: string
    description: string
    cookingTimeMinutes: string
    ingredient: string
    amount: number
    measureUnit: string
    category: string
}



export interface TypeBookmarkAndRecipe{
    actionId: number
    objectId: number
    id: number
}

export interface TypeCategories{
    view: string
    post: string
}


