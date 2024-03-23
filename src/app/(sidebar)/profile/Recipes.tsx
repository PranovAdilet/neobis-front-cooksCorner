import React, {useState} from 'react';
import styles from "./Profile.module.scss";
import {useProfileTypeRecipes} from "@/hooks/user/useProfile";
import Card from "@/components/card/Card";
import clsx from "clsx";

const Recipes = ({id} : {id : number | undefined}) => {

    const [type, setType] = useState('my')
    const {data} = useProfileTypeRecipes(type)

    const handleType = (category : string) => {
        setType(category)
    }
    const className = (category: string) => clsx(type === category && styles.category__text_active, styles.category__text)

    return (
        <>
            <div className={styles.category}>
                <button onClick={() => handleType('my')} className={className('my')}>My recipe</button>
                <button onClick={() => handleType('saved')} className={className("saved")}>Saved recipe</button>
            </div>
            <div className={styles.cards}>
                {
                    data?.map((item, idx) => (
                        <Card key={idx} type="big" item={item}/>
                    ))
                }
            </div>
        </>
    )
        ;
};

export default Recipes;