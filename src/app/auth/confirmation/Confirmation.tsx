'use client'

import styles from './Confirmation.module.scss'
import {useEffect, useState} from "react";
import ModalContainer from "@/components/modal-container/ModalContainer";
import ConfirmationModal from "@/app/auth/confirmation/ConfirmationModal";
import clsx from "clsx";
import {useConfirmation} from "@/app/auth/confirmation/useConfirmation";

const Confirmation = () => {

    const [isOpen, setIsOpen] = useState(false)

    const {token, confirmation, isLoading} = useConfirmation()

    useEffect(() => {
        if (token){
            confirmation(token)

        }
    }, [token])

    const handleOpen = () => setIsOpen(!isOpen)

    if (isLoading){
        return <div>Loading...</div>
    }

    return (
        <section className={styles.confirmation}>
            <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen} classname={styles.modal}>
                <ConfirmationModal isOpen={isOpen} setIsOpen={setIsOpen}/>
            </ModalContainer>
            <div className={styles.content}>

                <h2 className={styles.title}>Email Sent Successfully !</h2>
                <p className={styles.subtitle}>
                    Thank you for contacting us. We have sent an email to your inbox. Please check your email for further instructions.
                    <br/>
                    <br/>
                    (´｡• ω •｡`)
                </p>

                <h4 onClick={handleOpen} className={clsx(styles.text, 'cursor-pointer hover:text-primary')}>Email not received</h4>
            </div>
        </section>
    )
        ;
};

export default Confirmation;