import React, {ReactNode} from 'react';
import styles from './Modal.module.scss'
import clsx from "clsx";


interface IProps{
    children: ReactNode
    isOpen: boolean,
    setIsOpen: (v : boolean) => void
    classname: string
}

function ModalContainer({setIsOpen, isOpen, children, classname} : IProps) {

    const handleClose = () => setIsOpen(false)

    const overlayClassName = clsx(styles.overlay, {
        [styles.block]: isOpen,
        [styles.none]: !isOpen,
    })


    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => event.stopPropagation()

    return (
        <div onClick={handleClose} className={overlayClassName}>
            <div onClick={handleOverlayClick} className={clsx(styles.popup, classname)}>
                {children}
            </div>
        </div>
    );
}

export default ModalContainer






