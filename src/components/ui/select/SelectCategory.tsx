import React, {forwardRef, useEffect, useRef, useState} from 'react';
import clsx from "clsx";
import styles from './Select.module.scss'
import SelectItem from "@/components/ui/select/SelectItem";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";


interface IProps {
    array: string[];
    className?: string;
    select: string
    setSelect: (state: string) => void
}

const SelectCategory = ({ array, className, setSelect, select } : IProps) => {

    const ref = useRef<null | HTMLUListElement>(null)


        const [isOpen, setIsOpen] = useState(false)

        const classNameMenu = clsx({
            [styles.menu]: isOpen,
            [styles.none]: !isOpen,
        })

        const handleMenu = () => setIsOpen(!isOpen)

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen, setIsOpen]);

    return (
        <div onClick={handleMenu} className={styles.category}>
            <p>{select}</p>
            <ul ref={ref} className={classNameMenu}>
                {
                    array.map(item => (
                        <SelectItem setSelect={setSelect} key={item} item={item}/>
                    ))
                }
            </ul>
            <span className={styles.category__icon}><MdOutlineKeyboardArrowDown/></span>
        </div>
    )
}

export default SelectCategory;


SelectCategory.displayName = 'SelectCategory'