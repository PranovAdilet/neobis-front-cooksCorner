'use client'

import React, {useState} from 'react';
import styles from "./Profile.module.scss";
import Title from "@/components/ui/title/Title";
import Image from "next/image";
import avatar from "@/../public/user.jpg";
import ModalContainer from "@/components/modal-container/ModalContainer";
import ManageProfile from "@/components/manage-profile/ManageProfile";
import {useProfile} from "@/hooks/user/useProfile";
import {useParams} from "next/navigation";
import Recipes from "@/app/(sidebar)/profile/Recipes";
import Loader from "@/components/ui/loader/Loader";

const Profile = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => setIsOpen(true)
    const {id} = useParams()

    const {data, isLoading , isSuccess} = useProfile(+id || 0)


    return (
        <section className={styles.profile}>
            {
                isLoading && <Loader/>
            }
            <ModalContainer classname={styles.modal} isOpen={isOpen} setIsOpen={setIsOpen}>
                <ManageProfile userId={data?.userId} setIsOpen={setIsOpen}/>
            </ModalContainer>
            {
                data && isSuccess && <div className="container">
                    <div className="text-center mb-8">
                        <Title>Profile</Title>
                    </div>
                    <div className={styles.content}>

                        <Image width={160} height={160} className={styles.image} src={data.imageUrl || avatar}
                               priority={true} alt="avatar"/>
                        <div className={styles.content__info}>
                            <div className={styles.info}>
                                <div>
                                    <p className={styles.info__count}>{data.recipes}</p>
                                    <p className={styles.info__text}>recipe</p>
                                </div>
                                <div>
                                    <p className={styles.info__count}>{data.followers}</p>
                                    <p className={styles.info__text}>Followers</p>
                                </div>
                                <div>
                                    <p className={styles.info__count}>{data.following}</p>
                                    <p className={styles.info__text}>Following</p>
                                </div>
                            </div>
                            <h4 className={styles.name}>{data.name}</h4>

                            <p className={styles.text}>{data.bio}</p>
                            <button onClick={handleOpen} className={styles.btn}>Manage Profile</button>
                        </div>
                    </div>
                    <Recipes id={data.userId}/>
                </div>
            }
        </section>
    );
};

export default Profile;