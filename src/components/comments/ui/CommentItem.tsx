import React, {useState} from 'react';
import {IComment} from "@/types/comments.types";
import Image from "next/image";
import avatar from "@/../public/user.jpg"
import styles from './Comments.module.scss'
import {MdOutlineKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Replies from "@/components/comments/Replies/Replies";
import LikeButtons from "@/components/comments/LikeButtons";
import {formatElapsedTime} from "@/utils/date";
import AddComment from "@/components/comments/AddComment";
import {AuthTokensService} from "@/services/auth-token.service";

interface IProps{
    item: IComment
    id: string | string[]
}

const CommentItem = ({item, id} : IProps) => {
    const [isReply, setIsReply] = useState(false)
    const [comments, setComments] = useState(false)
    const handleOpen = () => setIsReply(true)
    const handleComments = () => setComments(!comments)

    const date = formatElapsedTime(item.createdAt)
    const token = AuthTokensService.getAccessToken()

    return (
        <div className={styles.comment}>
            <div className={styles.left}>
                <Image className={styles.image} src={item.imageUrl || avatar} alt="avatar" width={200} height={200}/>
            </div>
            <div className={styles.content}>
                <div className={styles.content__top}>
                    <h4 className={styles.author}>{item.author}</h4>
                    <p className={styles.time}>{date}</p>
                </div>
                <p className={styles.content__text}>{item.text}</p>
                <div className={styles.content__bottom}>
                    <LikeButtons likes={item.likeCount} isLiked={item.isLiked} commentId={item.commentId}/>
                    <button
                        disabled={!token}
                        onClick={handleOpen}
                        type="button"
                        className={styles.button}>
                        Reply
                    </button>
                </div>
                {
                    token && <AddComment
                        recipeId={+id} type="reply"
                        placeholder="Enter a reply"
                        id={item.commentId}
                        isReply={isReply}
                        setIsReply={setIsReply}
                    />
                }
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
    );
};

export default CommentItem;