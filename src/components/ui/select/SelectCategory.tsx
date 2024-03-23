import React, {forwardRef, useEffect, useState} from 'react';
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

const SelectCategory = forwardRef<HTMLUListElement, IProps>(
    (props, ref) => {

        const { array, className, setSelect, select, ...rest } = props;
        const [isOpen, setIsOpen] = useState(false)

        const classNameMenu = clsx({
            [styles.menu]: isOpen,
            [styles.none]: !isOpen,
        })

        const handleMenu = () => setIsOpen(!isOpen)

        useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {
                if (ref && 'current' in ref && ref.current && !ref.current.contains(event.target as Node)) {
                    setIsOpen(false);
                }
            };

            document.addEventListener('click', handleClickOutside);
            return () => {
                document.removeEventListener('click', handleClickOutside);
            };
        }, [ref]);

    return (
        <div onClick={handleMenu} className={styles.category}>
            <p>{select}</p>
            <ul {...rest} ref={ref} className={classNameMenu}>
                {
                    array.map(item => (
                        <SelectItem setSelect={setSelect} key={item} item={item}/>
                    ))
                }
            </ul>
            <span className={styles.category__icon}><MdOutlineKeyboardArrowDown/></span>
        </div>
    );
    })

export default SelectCategory;


SelectCategory.displayName = 'SelectCategory'