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
    const [category, setCategory] = useState('breakfast')
    const {data, isSuccess, isLoading} = useRecipes(category)

    return (
        <section className={styles.home}>
            <div className="container">
                <h2 className={styles.title}>Hi, Sarthak. UI Designer & Cook</h2>
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
                </div>

            </div>
        </section>
    );
};

export default Home;