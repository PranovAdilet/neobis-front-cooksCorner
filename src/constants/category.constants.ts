import {TypeCategories} from "@/types/recipes.types";

export const CATEGORIES: TypeCategories[] = [
    {
        view: 'Breakfast',
        post: 'breakfast'
    }, {
        view: 'Beverages',
        post: 'beverages'
    },
    {
        view: 'Pasta',
        post: 'pasta'
    },
    {
        view: 'Desserts',
        post: 'desserts'
    },
    {
        view: 'Soups',
        post: 'soups'
    },
    {
        view: 'Salads',
        post: 'salads'
    },
    {
        view: 'Seafoods',
        post: 'seafoods'
    },
    {
        view: 'Main dishes',
        post: 'main dishes'
    }
]

export const CATEGORIES_ARRAY = ['breakfast', 'main dishes', 'seafoods', 'beverages', 'salads', 'desserts', 'soups', "pasta"]

export const DIFFICULTY = [
    "Easy", "Medium", "Hard"
]

export const INGREDIENTS_MEASURE = ['kg', 'piece', 'tablespoon', 'grams', "em", "px"]