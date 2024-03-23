import React, {useState} from 'react';
import styles from "@/components/comments/Comments.module.scss";
import {BiSolidDislike, BiSolidLike} from "react-icons/bi";
import AddReplyForm from "@/components/comments/AddReplyForm";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";
import {IComment} from "@/types/comments.types";
import Image from "next/image";
import avatar from "../../../public/user.jpg";
import Replies from "@/components/comments/Replies";

const ReplyItem = ({item} : {item: IComment}) => {
    const [isReply, setIsReply] = useState(false)
    const handleOpen = () => setIsReply(true)

    return (
        <div className={styles.reply}>
            <div className={styles.reply__left}>
                <Image className={styles.image} src={item.imageUrl || avatar} alt="avatar" width={200} height={200}/>
            </div>
            <div className={styles.content}>
                <div className={styles.content__top}>
                    <h4 className={styles.replyAuthor}>{item.author}</h4>
                    <p className={styles.replyTime}>5 min ago</p>
                </div>
                <p className={styles.replyText}>{item.text}</p>
                <div className={styles.content__bottom}>
                    <div className={styles.icons}>
                        <span className={styles.icon}><BiSolidLike/></span>
                        <span className={styles.icon}><BiSolidDislike/></span>
                    </div>
                    <button onClick={handleOpen} type="button" className={styles.replyBtn}>Reply</button>
                </div>
                <AddReplyForm id={item.commentId} isReply={isReply} setIsReply={setIsReply}/>

                {/*<Replies id={item.commentId} isReply={comments} setIsReply={setComments}/>*/}
            </div>
        </div>
    );
};

export default ReplyItem;