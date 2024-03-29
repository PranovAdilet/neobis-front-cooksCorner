'use client'

import React, {useState} from 'react';
import Title from "@/components/ui/title/Title";
import styles from './Home.module.scss'
import {useRecipes} from "@/hooks/recipes/useRecipes";
import Card from "@/components/card/Card";
import {CATEGORIES} from "@/constants/category.constants";
import CategoryItem from "@/app/(sidebar)/home/CategoryItem";
import Skeletons from "@/components/ui/skeleton/Skeletons";

const Home = () => {
    const [category, setCategory] = useState('1')
    const {data, isSuccess, isLoading, isError } = useRecipes(category)

    return (
        <section className={styles.home}>
            <div className={styles.container}>
                <h2 className={styles.title}>Hi, Brother. UI Designer & Cook</h2>
                <Title>Category</Title>
                <ul className={styles.list}>
                    {
                        CATEGORIES.map(item => (
                            <CategoryItem key={item.post} item={item} category={category} setCategory={setCategory}/>
                        ))
                    }

                </ul>
                <div className={styles.cards}>
                    {
                        isLoading && <Skeletons className="" count={8}/>
                    }

                    {
                        isSuccess && data?.map(item => (
                            <Card key={item.recipeId} item={item} type="big"/>
                        ))
                    }
                    {
                        isError && <h2>Recipes not found</h2>
                    }
                </div>

            </div>
        </section>
    );
};

export default Home;