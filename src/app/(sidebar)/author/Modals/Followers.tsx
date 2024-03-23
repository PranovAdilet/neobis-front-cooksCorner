import React from 'react';
import styles from "./Modal.module.scss";
import Title from "@/components/ui/title/Title";
import {IoCloseCircleSharp} from "react-icons/io5";
import {useFollowers, useFollowing} from "@/hooks/user/useFollow";
import ItemUser from "@/app/(sidebar)/author/ItemUser";

interface IProps{
    setIsOpen: (state: boolean) => void
    id: number
}

const Followers = ({setIsOpen, id} : IProps) => {

    const handleClose = () => setIsOpen(false)

    const {data, isLoading} = useFollowers(id)
    console.log(data)

    return (
        <div className={styles.modal}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <Title>Followers</Title>
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