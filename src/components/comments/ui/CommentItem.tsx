import React, {useState} from 'react';
import {IComment} from "@/types/comments.types";
import Image from "next/image";
import avatar from "../../../../public/user.jpg"
import styles from '../Comments.module.scss'
import {MdOutlineKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Replies from "@/components/comments/ui/Replies/Replies";
import LikeButtons from "@/components/comments/ui/LikeButtons";
import {formatElapsedTime} from "@/utils/date";
import AddComment from "@/components/comments/ui/AddComment";
import {HiOutlineDotsVertical} from "react-icons/hi";
import clsx from "clsx";
import Link from "next/link";
import {ROUTES} from "@/config/pages-url.config";
import MenuButton from "@/components/comments/ui/MenuButton";
import {AuthTokensService} from "@/services/auth-token.service";
import EditForm from "@/components/comments/ui/Replies/EditForm";

interface IProps{
    item: IComment
    id: string | string[]
}

const CommentItem = ({item, id} : IProps) => {
    const [isReply, setIsReply] = useState(false)
    const [comments, setComments] = useState(false)
    const [menu, setMenu] = useState(false)
    const [edit, setEdit] = useState(false)
    const userId = AuthTokensService.getUserId()

    const handleOpen = () => setIsReply(true)
    const handleComments = () => setComments(!comments)
    const handleMenu = () => setMenu(!menu)

    const date = formatElapsedTime(item.createdAt)

    return (
        <div className={styles.comment}>
            <div className={styles.comment__content}>
                <Link href={ROUTES.AUTHOR + `/${item.authorId}`} className={styles.left}>
                    <Image className={styles.image} src={item.imageUrl || avatar} alt="avatar" width={200}
                           height={200}/>
                </Link>
                <div className={styles.content}>
                    <div className={styles.content__top}>
                        <Link href={ROUTES.AUTHOR + `/${item.authorId}`} className={styles.author}>{item.author}</Link>
                        <p className={styles.time}>{date}</p>
                    </div>

                    {
                        !edit ? <p className={styles.content__text}>{item.text}</p> :
                            <EditForm
                                type="comment"
                                edit={edit}
                                item={item}
                                setEdit={setEdit}
                            />
                    }
                    {
                        !edit && <div className={styles.content__bottom}>
                            <LikeButtons likes={item.likeCount} isLiked={item.isLiked} commentId={item.commentId}/>
                            <button
                                onClick={handleOpen}
                                type="button"
                                className={styles.button}>
                                Reply
                            </button>
                        </div>
                    }
                    <AddComment
                        setComments={setComments}
                        recipeId={+id} type="reply"
                        placeholder="Enter a reply"
                        id={item.commentId}
                        isReply={isReply}
                        setIsReply={setIsReply}
                    />
                    {
                        item.replyCount > 0 && <button onClick={handleComments} className={styles.repliesBtn}>
                        <span className={styles.replies__icon}>
                            {!comments ? <MdOutlineKeyboardArrowDown/> : <MdKeyboardArrowUp/>}
                        </span>{item.replyCount} replies
                        </button>
                    }
                    <Replies id={item.commentId} isReply={comments} setIsReply={setComments}/>
                </div>
            </div>
            {
                +userId === item.authorId &&
                <span onClick={handleMenu} className={clsx(styles.burger, 'mt-8')}><HiOutlineDotsVertical/></span>
            }
            <MenuButton
                type="comment"
                id={item.commentId}
                setEdit={setEdit}
                className={styles.commentPosition}
                isOpen={menu}
                setIsOpen={setMenu}
            />
        </div>
    );
};

export default CommentItem;