import React, {useState} from 'react';
import styles from "@/app/(sidebar)/author/Author.module.scss";
import {IUser} from "@/types/auth.types";
import ModalContainer from "@/components/modal-container/ModalContainer";
import Followers from "@/app/(sidebar)/author/Modals/Followers";
import clsx from "clsx";

const UserInfo = ({data}: {data: IUser}) => {

    const [isOpenFollower, setIsOpenFollower] = useState(false)
    const [isOpenFollowing, setIsOpenFollowing] = useState(false)

    const handleOpenFollowers = () => setIsOpenFollower(true)
    const handleOpenFollowing = () => setIsOpenFollowing(true)

    const isPointer = (count: number) => count > 0 && 'cursor-pointer'

    return (
        <div className={styles.info}>
            <div>
                <p className={styles.info__count}>{data.recipes}</p>
                <p className={styles.info__text}>recipe</p>
            </div>
            <div>
                <p onClick={handleOpenFollowers}
                    className={clsx(styles.info__count, isPointer(data.followers))}>
                    {data.followers}
                </p>
                <p className={styles.info__text}>Followers</p>
            </div>
            <div>
                <p onClick={handleOpenFollowing}
                   className={clsx(styles.info__count, isPointer(data.following))}>
                    {data.following}
                </p>
                <p className={styles.info__text}>Following</p>
            </div>
            {
                data.following > 0 &&
                <ModalContainer isOpen={isOpenFollowing} setIsOpen={setIsOpenFollowing} classname={styles.modal}>
                    <Followers type="Following" setIsOpen={setIsOpenFollowing} id={data.userId}/>
                </ModalContainer>
            }

            {
                data.followers > 0 &&
                <ModalContainer isOpen={isOpenFollower} setIsOpen={setIsOpenFollower} classname={styles.modal}>
                    <Followers type="Followers" setIsOpen={setIsOpenFollower} id={data.userId}/>
                </ModalContainer>
            }
        </div>
    );
};

export default UserInfo;