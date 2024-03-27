import React from 'react';
import clsx from "clsx";
import styles from "@/app/(sidebar)/home/Home.module.scss";
import {TypeCategories} from "@/types/recipes.types";

interface IProps{
    item: TypeCategories
    category: string
    setCategory: (state: string) => void
}

const CategoryItem = ({item, category, setCategory} : IProps) => {

    const handleCategory = () => setCategory(item.post)

    return (
        <li>
            <button
                onClick={handleCategory}
                className={clsx(styles.item, category === item.post && styles.item_active)}
            >
                {item.view}
            </button>
        </li>
    );
};

export default CategoryItem;