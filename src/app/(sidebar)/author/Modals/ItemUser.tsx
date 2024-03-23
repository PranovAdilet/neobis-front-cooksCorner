import React from 'react';
import {IFollower} from "@/types/auth.types";
import styles from './Modal.module.scss'
import Image from "next/image";
import avatar from '../../../../../public/user.jpg'
import {Button} from "@/components/ui/button/Button";
import clsx from "clsx";
import Link from "next/link";
import {ROUTES} from "@/config/pages-url.config";
import {useRouter} from "next/navigation";

interface IProps{
    item: IFollower
}

const ItemUser = ({item} : IProps) => {

    const {push} = useRouter()

    const handleNavigate = () => push(ROUTES.AUTHOR + `/${item.userId}`)

    return (
        <>
            <div className={styles.item}>
                <Link href={ROUTES.AUTHOR + `/${item.userId}`} className={styles.item__content}>
                    <Image className={styles.image} src={item.imageUrl || avatar} alt="avatar" width={100}
                           height={100}/>
                    <p className={styles.name}>{item.name}</p>
                </Link>
                <Button onClick={handleNavigate} className={clsx(styles.button, "button")}>Follow</Button>
            </div>
        </>
    );
};

export default ItemUser;