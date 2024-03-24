import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import styles from './Back.module.scss'
import {useRouter} from "next/navigation";

const Back = () => {
    const router = useRouter()
    const handleBack = () => router.back()
    return (
        <button onClick={handleBack} className={styles.button}>
            <IoIosArrowBack/>
        </button>
    );
};

export default Back;