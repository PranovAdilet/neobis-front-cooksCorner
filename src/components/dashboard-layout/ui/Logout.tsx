import React from 'react';
import ModalContainer from "@/components/modal-container/ModalContainer";
import styles from "@/components/dashboard-layout/dashboard-sidebar/Sidebar.module.scss";
import {LogoutButton} from "@/components/dashboard-layout/LogoutButton";
import Title from "@/components/ui/title/Title";

interface IProps{
    isOpen: boolean
    setIsOpen: (state: boolean) => void
}

const Logout = ({isOpen, setIsOpen} : IProps) => {
    const handleClose = () => setIsOpen(false)

    return (
        <ModalContainer classname={styles.popup} isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className="text-center max-w-72">
                <Title>Are you sure you wanna leave?</Title>
            </div>
            <div className={styles.btns}>
                <LogoutButton setIsOpen={setIsOpen} classname={styles.btn}/>
                <button onClick={handleClose} className={styles.btn}>No</button>
            </div>
        </ModalContainer>
    );
};

export default Logout;