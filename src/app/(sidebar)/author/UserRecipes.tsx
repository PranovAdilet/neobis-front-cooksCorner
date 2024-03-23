import React from 'react';
import styles from "./Author.module.scss";
import Skeletons from "@/components/ui/skeleton/Skeletons";
import Card from "@/components/card/Card";
import {useRecipesUser} from "@/hooks/user/useProfile";

const UserRecipes = ({id} : {id:  string | string[]}) => {

    const {data: recipes, isLoading: isRecipesLoading} = useRecipesUser(+id || 0)

    return (
        <div className={styles.cards}>
            {
                isRecipesLoading && <Skeletons count={8} className=""/>
            }
            {
                recipes?.map(item => (
                    <Card key={item.recipeId} item={item} type="big"/>
                ))
            }
        </div>
    );
};

export default UserRecipes;