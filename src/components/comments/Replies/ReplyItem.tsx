import React, {useState} from 'react';
import styles from "@/components/comments/Comments.module.scss";
import {IComment} from "@/types/comments.types";
import Image from "next/image";
import avatar from "@/../public/user.jpg";
import LikeButtons from "@/components/comments/ui/LikeButtons";
import {formatElapsedTime} from "@/utils/date";
import AddComment from "@/components/comments/ui/AddComment";
import {AuthTokensService} from "@/services/auth-token.service";


const ReplyItem = ({item} : {item: IComment}) => {
    const [isReply, setIsReply] = useState(false)
    const date = formatElapsedTime(item.createdAt)
    const handleOpen = () => setIsReply(true)

    return (
        <div className={styles.reply}>
            <div className={styles.reply__left}>
                <Image className={styles.image} src={item.imageUrl || avatar} alt="avatar" width={200} height={200}/>
            </div>
            <div className={styles.content}>
                <div className={styles.content__top}>
                    <h4 className={styles.replyAuthor}>{item.author}</h4>
                    <p className={styles.replyTime}>{date}</p>
                </div>
                <p className={styles.replyText}>{item.text}</p>
                <div className={styles.content__bottom}>
                    <LikeButtons isLiked={item.isLiked} likes={item.likeCount} commentId={item.commentId}/>
                    <button onClick={handleOpen} type="button" className={styles.button}>Reply</button>
                </div>
                <AddComment recipeId={3} type="reply" placeholder="Enter a reply" id={item.commentId} isReply={isReply} setIsReply={setIsReply}/>
                {/*{*/}
                {/*    item.replyCount > 0 && <button onClick={handleComments} className={styles.repliesBtn}>*/}
                {/*        <span className={styles.replies__icon}>*/}
                {/*            {!comments ? <MdOutlineKeyboardArrowDown/> : <MdKeyboardArrowUp/>}*/}
                {/*        </span>{item.replyCount} replies*/}
                {/*    </button>*/}
                {/*}*/}
                {/*<Replies id={item.commentId} isReply={comments} setIsReply={setComments}/>*/}
            </div>
        </div>
    );
};

export default ReplyItem;