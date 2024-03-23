import React, {ChangeEvent} from 'react';
import styles from "../Search.module.scss";
import {CiSearch} from "react-icons/ci";
import { IoCloseCircleOutline } from "react-icons/io5";

interface IProps{
    placeholder: string
    type: 'users' | 'recipes'
    disabled: boolean
    searchInput: string
    setSearchInput: (state: string) => void
}

const SearchField = ({disabled, placeholder, searchInput, setSearchInput} : IProps) => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value)

    const handleClearSearch = () => setSearchInput('')

    return (
        <label className={styles.label}>
            <input
                disabled={disabled}
                type="search"
                placeholder={placeholder}
                className={styles.search__input}
                value={searchInput}
                onChange={handleChange}

            />
            {
                searchInput.length ?
                    <span onClick={handleClearSearch} className={styles.icon}><IoCloseCircleOutline/></span>
                    :
                    <span className={styles.icon}><CiSearch/></span>
            }
        </label>
    );
};

export default SearchField;