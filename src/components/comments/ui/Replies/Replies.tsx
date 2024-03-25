import React from 'react';
import styles from "../../Comments.module.scss";
import clsx from "clsx";
import {useGetReplies} from "@/hooks/user/useComment";
import ReplyItem from "@/components/comments/ui/Replies/ReplyItem";
import Loader from "@/components/ui/loader/Loader";

interface IProps{
    isReply: boolean
    setIsReply: (state: boolean) => void
    id: number
}

const Replies = ({isReply, id} : IProps) => {

    const {data, isLoading} = useGetReplies(id, isReply)

    const className = clsx({
        [styles.reply_none]: !isReply,
        [styles.reply]: isReply
    })

    return (
        <div className={className}>
            {
                isLoading && <Loader/>
            }
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