import React, {useState} from 'react';
import clsx from "clsx";
import styles from './Select.module.scss'
import SelectItem from "@/components/ui/select/SelectItem";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";
import {UseFormRegister} from "react-hook-form";
import {TypeRecipesCreate} from "@/types/recipes.types";
import {INGREDIENTS_MEASURE} from "@/constants/category.constants";


interface IProps {
    array: string[];
    register: UseFormRegister<TypeRecipesCreate>
}

const Select = ({ array, register} : IProps) => {

    const [select, setSelect] = useState(INGREDIENTS_MEASURE[0])
    const [isOpen, setIsOpen] = useState(false)

        const classNameMenu = clsx({
            [styles.menu]: isOpen,
            [styles.none]: !isOpen,
        })

        const handleMenu = () => setIsOpen(!isOpen)
        const handleClick = (item: string) => {
            setSelect(item)
            setIsOpen(!isOpen)
        }
    const handleMeasureUnitChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setSelect(newValue);
        await register("measureUnit").onChange({ target: { value: newValue } })
    }

    return (
        <>
            <div className={styles.fields}>
                <div className={styles.amount}>
                    <input
                        defaultValue="1"
                        {...register('amount')}
                        className={styles.input}
                        type="text"
                        onKeyDown={event => {
                            if (!/[0-9]/.test(event.key) &&
                                event.key !== 'Backspace' &&
                                event.key !== 'Tab' &&
                                event.key !== 'Enter' &&
                                event.key !== 'ArrowLeft' &&
                                event.key !== 'ArrowRight'
                            ) {
                                event.preventDefault()
                            }
                        }}
                        required
                    />
                </div>
                <div className={styles.measureUnit}>
                    <input
                        {...register("measureUnit")}
                        value={select}
                        className={styles.input} type="text"
                        onChange={handleMeasureUnitChange}
                        required
                    />
                    <span onClick={handleMenu} className={styles.icon}><MdOutlineKeyboardArrowDown/></span>
                </div>
                <ul className={classNameMenu}>
                    {
                        array.map(item => (
                            <SelectItem setSelect={handleClick} key={item} item={item}/>
                        ))
                    }
                </ul>
            </div>

            <div className={styles.plus}>+</div>
        </>
    )



}

export default Select;

