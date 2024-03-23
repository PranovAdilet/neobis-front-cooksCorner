import React from 'react';
import styles from "./Modal.module.scss";
import Title from "@/components/ui/title/Title";
import {IoCloseCircleSharp} from "react-icons/io5";
import {useFollowers} from "@/hooks/user/useFollow";
import ItemUser from "@/app/(sidebar)/author/Modals/ItemUser";

interface IProps{
    setIsOpen: (state: boolean) => void
    id: number
    type: "Followers" | "Following"
}

const Followers = ({setIsOpen, id, type} : IProps) => {

    const handleClose = () => setIsOpen(false)

    const {data, isLoading} = useFollowers(id, type)

    return (
        <div className={styles.modal}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <Title>{type}</Title>
                </div>
                <div className={styles.list}>
                    {
                        data && data.map(item => (
                            <ItemUser item={item} key={item.userId}/>
                        ))
                    }
                </div>

            </div>
            <span onClick={handleClose} className={styles.close}><IoCloseCircleSharp/></span>
        </div>
    );
};

export default Followers;