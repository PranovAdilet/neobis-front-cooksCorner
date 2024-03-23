import React, {Dispatch, SetStateAction, useState} from 'react';
import styles from "@/app/(sidebar)/search/Search.module.scss";
import {Button} from "@/components/ui/button/Button";
import {IType} from "@/app/(sidebar)/search/search.interface";
import clsx from "clsx";

interface IProps{
    type: 'big' | 'small' | 'medium'
    setType: Dispatch<SetStateAction<IType>>
}

const TypeButtons = ({type, setType}: IProps) => {


    const handleType = (value: IType) => setType(value)
    const classname = (value: IType) => clsx(type === value && styles.btn_active, styles.btn)

    return (
        <div className={styles.content}>
            <div className={styles.btns}>

                <Button
                    className={classname('small')}
                    onClick={() => handleType('small')}
                >Chefs
                </Button>

                <Button
                    className={classname('medium')}
                    onClick={() => handleType('medium')}
                >Recipes
                </Button>

            </div>
        </div>
    );
};

export default TypeButtons;