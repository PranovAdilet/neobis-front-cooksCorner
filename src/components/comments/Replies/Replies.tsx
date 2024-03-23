import React from 'react';
import styles from "../Comments.module.scss";
import clsx from "clsx";
import {useGetReplies} from "@/hooks/user/useComment";
import ReplyItem from "@/components/comments/Replies/ReplyItem";

interface IProps{
    isReply: boolean
    setIsReply: (state: boolean) => void
    id: number
}

const Replies = ({isReply, id} : IProps) => {

    const {data, isSuccess, isLoading} = useGetReplies(id)


    const className = clsx({
        [styles.reply_none]: !isReply,
        [styles.reply]: isReply
    })

    return (
        <div className={className}>
           <div className={styles.replies}>
               {
                   data && data.map(item => (
                       <ReplyItem key={item.commentId} item={item}/>
                   ))
               }
           </div>
        </div>
    );
};

export default Replies;