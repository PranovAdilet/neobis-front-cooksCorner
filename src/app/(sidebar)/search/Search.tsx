'use client'

import React, {useState} from 'react';
import styles from "@/app/(sidebar)/search/Search.module.scss";
import Title from "@/components/ui/title/Title";
import {Button} from "@/components/ui/button/Button";
import ModalContainer from "@/components/modal-container/ModalContainer";
import TypeButtons from "@/app/(sidebar)/search/ui/TypeButtons";
import CreateRecipe from "@/components/create-recipe/CreateRecipe";
import SearchField from "@/app/(sidebar)/search/ui/SearchField";
import {useSearchUsers} from "@/hooks/useSearch";
import {useDebounce} from "@/hooks/useDebounce";
import {IType} from "@/app/(sidebar)/search/types/search.interface";
import {useRecipes, useSearchRecipes} from "@/hooks/recipes/useRecipes";
import Card from "@/components/card/Card";
import Skeletons from "@/components/ui/skeleton/Skeletons";

const Search = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [type, setType] = useState<IType>('medium')
    const [searchInput, setSearchInput] = useState('')
    const debouncedValue = useDebounce(searchInput)

    const {data: dataUsers, isLoading: isLoadingUsers}
        = useSearchUsers(debouncedValue, type)

    const {data : dataRecipes, isLoading: isLoadingRecipes}
        = useSearchRecipes(debouncedValue)


    const handleOpen = () => setIsOpen(true)

    return (
        <>
            <ModalContainer classname={styles.modal} isOpen={isOpen} setIsOpen={setIsOpen}>
                <CreateRecipe setIsOpen={setIsOpen}/>
            </ModalContainer>
            <section className={styles.search}>
                <div className={styles.container}>
                    <Title>What to eat today?</Title>

                    <TypeButtons type={type} setType={setType} />
                    <SearchField
                        searchInput={searchInput}
                        setSearchInput={setSearchInput}
                        placeholder="Search recipes"
                        type={"users"}
                        disabled={isLoadingRecipes || isLoadingUsers}
                    />
                    <p className={styles.text}>Search results</p>


                    <div className={styles.cards}>
                        {
                            isLoadingRecipes && <Skeletons className={styles.skeleton} count={8}/>
                        }
                        {
                            isLoadingUsers && <Skeletons className={styles.skeletonUsers} count={12}/>
                        }

                        {
                            type === "medium" && dataRecipes?.map(item => (
                                <Card key={item.recipeId} type="medium" item={item}/>
                            ))
                        }
                        {
                            type === "small" && dataUsers?.map(item => (
                                <Card key={item.userId} type="small" user={item}/>
                            ))
                        }
                    </div>
                </div>

                <div className="text-center">
                    <Button onClick={handleOpen} className="button">
                        <div className={styles.block}>
                            <span className={styles.plus}>+</span>
                            <p>Add your recipe</p>
                        </div>
                    </Button>
                </div>

            </section>
        </>
    );
};

export default Search;