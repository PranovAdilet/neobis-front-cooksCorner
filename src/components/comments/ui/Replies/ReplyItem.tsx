import React, {useState} from 'react';
import styles from "@/components/comments/Comments.module.scss";
import {IComment} from "@/types/comments.types";
import Image from "next/image";
import avatar from "../../../../../public/user.jpg";
import LikeButtons from "@/components/comments/ui/LikeButtons";
import {formatElapsedTime} from "@/utils/date";
import AddComment from "@/components/comments/ui/AddComment";
import { HiOutlineDotsVertical } from "react-icons/hi";
import MenuButton from "@/components/comments/ui/MenuButton";
import clsx from "clsx";
import EditForm from "@/components/comments/ui/Replies/EditForm";
import {AuthTokensService} from "@/services/auth-token.service";


const ReplyItem = ({item} : {item: IComment}) => {
    const [isReply, setIsReply] = useState(false)
    const [menu, setMenu] = useState(false)
    const [edit, setEdit] = useState(false)
    const userId = AuthTokensService.getUserId()

    const date = formatElapsedTime(item.createdAt)
    const handleOpen = () => setIsReply(true)
    const handleMenu = () => setMenu(!menu)

    return (
        <div className="flex justify-between w-full gap-2 relative">
            <div className={styles.reply}>
                <div className={styles.reply__left}>
                    <Image className={styles.image} src={item.imageUrl || avatar} alt="avatar" width={200}
                           height={200}/>
                </div>
                <div className={styles.content}>
                    <div className={styles.content__top}>
                        <h4 className={styles.replyAuthor}>{item.author}</h4>
                        <p className={styles.replyTime}>{date}</p>
                    </div>
                    {
                        !edit ? <p className={styles.replyText}>{item.text}</p>
                            : <EditForm
                                type="reply"
                                edit={edit}
                                setEdit={setEdit}
                                item={item}
                            />
                    }
                    {
                        !edit && <div className={styles.content__bottom}>
                            <LikeButtons isLiked={item.isLiked} likes={item.likeCount} commentId={item.commentId}/>
                            <button onClick={handleOpen} type="button" className={styles.button}>Reply</button>
                        </div>
                    }
                    <AddComment

                        recipeId={3}
                        type="reply"
                        placeholder="Enter a reply"
                        id={item.commentId}
                        isReply={isReply}
                        setIsReply={setIsReply}
                    />
                </div>
            </div>
            {
                +userId === item.authorId && <span onClick={handleMenu} className={clsx(styles.burger, 'mt-2')}><HiOutlineDotsVertical/></span>
            }
            <MenuButton
                type="reply"
                id={item.commentId}
                setEdit={setEdit}
                className={styles.replyPosition}
                isOpen={menu}
                setIsOpen={setMenu}
           />
        </div>
    );
};

export default ReplyItem;