'use client'

import React, {useState} from 'react';
import styles from "@/app/search/Search.module.scss";
import Title from "@/components/ui/title/Title";
import {Field} from "@/components/ui/field/Field";
import {CiSearch} from "react-icons/ci";
import { IoCloseCircleOutline } from "react-icons/io5";
import {Button} from "@/components/ui/button/Button";
import ModalContainer from "@/components/modal-container/ModalContainer";
import ManageProfile from "@/components/manage-profile/ManageProfile";
import TypeButtons from "@/app/search/TypeButtons";

const Search = () => {

    const [isOpen, setIsOpen] = useState(false)

    const exportFunction = () => {
        return 12
    }

    const handleOpen = () => setIsOpen(true)

    return (
        <>
            <ModalContainer classname={styles.modal} isOpen={isOpen} setIsOpen={setIsOpen}>
                <ManageProfile setIsOpen={setIsOpen}/>
            </ModalContainer>
            <section className={styles.search}>
                <div className={styles.container}>
                    <Title>What to eat today?</Title>

                    <TypeButtons/>
                    <Field
                        onclick={exportFunction}
                        placeholder="Search recipes"
                        Icon={CiSearch}
                        HideIcon={IoCloseCircleOutline}
                        classname={styles.icon}
                    />
                    <p className={styles.text}>Search results</p>


                    <div className={styles.cards}>

                    </div>
                </div>

                <div className="text-center">
                    <Button onClick={handleOpen} className={styles.button}>
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