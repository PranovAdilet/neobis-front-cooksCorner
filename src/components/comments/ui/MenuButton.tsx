import React, {useRef} from 'react';
import styles from "@/components/comments/Comments.module.scss";
import clsx from "clsx";
import {useUpdateAndRemoveComment} from "@/hooks/user/useComment";


interface IProps{
    isOpen: boolean
    setIsOpen: (state: boolean) => void
    className: string
    setEdit: (state: boolean) => void
    id: number
    type: string
}
const MenuButton = ({isOpen, setIsOpen, className, id, setEdit, type} : IProps) => {

    const ref= useRef<null | HTMLDivElement>(null)

    const {remove} = useUpdateAndRemoveComment(type)

    const handleRemove = () => {
        setIsOpen(false)
        remove(id)
    }

    const classNameMenu = clsx({
        [styles.menu]: isOpen,
        [styles.none]: !isOpen
    })
    const handleUpdate = () => {
        setEdit(true)
        setIsOpen(false)
    }

    return (
        <div ref={ref} className={clsx(classNameMenu, className)}>
            <button onClick={handleUpdate} type="button" className={styles.menuItem}>Edit</button>
            <button onClick={handleRemove} type="button" className={styles.menuItem}>Delete</button>
        </div>
    );
};

export default MenuButton;