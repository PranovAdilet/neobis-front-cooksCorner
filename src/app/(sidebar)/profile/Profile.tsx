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
import UserInfo from "@/app/(sidebar)/author/UserInfo";
import LogoutProfile from "@/app/(sidebar)/profile/LogoutProfile";
import ProfileSkeleton from "@/components/ui/skeleton/ProfileSkeleton";

const Profile = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => setIsOpen(true)
    const {id} = useParams()

    const {data , isSuccess, isLoading} = useProfile(+id || 0)


    return (
        <section className={styles.profile}>

            <ModalContainer classname={styles.modal} isOpen={isOpen} setIsOpen={setIsOpen}>
                <ManageProfile user={data} setIsOpen={setIsOpen}/>
            </ModalContainer>

            {
                isLoading && <ProfileSkeleton/>
            }
            {
                data && isSuccess && <div className={styles.row}>
                    <div className={styles.title}>
                        <Title>Profile</Title>
                    </div>
                    <div className={styles.content}>

                        <Image width={160} height={160} className={styles.image} src={data.imageUrl || avatar}
                               priority={true} alt="avatar"/>
                        <div className={styles.content__info}>
                            <div className={styles.info}>
                                <UserInfo data={data}/>
                            </div>
                            <h4 className={styles.name}>{data.name}</h4>

                            <p className={styles.text}>{data.bio}</p>
                            <button onClick={handleOpen} className={styles.btn}>Manage Profile</button>
                        </div>
                    </div>
                    <Recipes/>
                </div>
            }

           <LogoutProfile/>
        </section>
    );
};

export default Profile;