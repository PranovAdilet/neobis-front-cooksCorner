'use client'

import Image from "next/image";
import check from '@/../public/check.svg'
import styles from './Author.module.scss'
import avatar from '@/../public/user.jpg'
import {useProfile} from "@/hooks/user/useProfile";
import {useParams, useRouter} from "next/navigation";
import {useFollow} from "@/hooks/user/useFollow";
import {Button} from "@/components/ui/button/Button";
import {IFollowData} from "@/types/user.types";
import {AuthTokensService} from "@/services/auth-token.service";
import {DASHBOARD_PAGES} from "@/config/pages-url.config";
import clsx from "clsx";
import {useEffect, useState} from "react";
import UserInfo from "@/app/(sidebar)/author/UserInfo";
import UserRecipes from "@/app/(sidebar)/author/UserRecipes";
import Back from "@/components/ui/back/Back";
import AuthorSkeleton from "@/components/ui/skeleton/AuthorSkeleton";


const Author = () => {
    const {id} = useParams()

    const {data, isLoading : isLoadingProfile} = useProfile(+id || 0)

    const {mutate, isLoading} = useFollow()

    const userId = AuthTokensService.getUserId()
    const {push} = useRouter()

    const [isFollow, setIsFollow] = useState(data?.isFollowed)

    useEffect(() => {
        setIsFollow(data?.isFollowed)
    }, [data?.isFollowed]);

    const handleFollow = () => {
        if (+userId === data?.userId){
            push(DASHBOARD_PAGES.PROFILE)
            return
        }

        const isFollowed = data?.isFollowed ? "unfollow" : "follow"
        const newData: IFollowData = {
            id: +data!.userId,
            type: isFollowed
        }
        mutate(newData)
        setIsFollow(prev => !prev)
    }

    const isProfileId = () => {
        if (+userId === data?.userId){
            return 'Go to profile'
        }
       return "Follow"
    }

    return (
        <>
            {
                isLoadingProfile && <AuthorSkeleton/>
            }
            <section className={styles.author}>
                <Back/>
                <div className={styles.container}>
                    {
                        data && <div className={styles.content}>
                            <Image src={data.imageUrl || avatar} width={160} height={160} className={styles.image} priority={true} alt="avatar"/>
                            <h4 className={styles.name}>{data.name}</h4>

                            <UserInfo data={data}/>

                            <p className={styles.text}>{data.bio}</p>
                            {
                                !isFollow &&

                                <Button onClick={handleFollow}
                                        disabled={isLoading}
                                        className={styles.btn}>
                                    {isProfileId()}
                                </Button>}
                            {
                                isFollow &&

                                <Button
                                    onClick={handleFollow}
                                    disabled={isLoading}
                                    className={clsx(styles.btn_active, styles.btn)}
                                >
                                    Followed
                                    <Image src={check} width={25} height={25} alt="icon_check"/>
                                </Button>
                            }
                        </div>
                    }

                    <UserRecipes id={id}/>
                </div>
            </section>
        </>
    );
};

export default Author;