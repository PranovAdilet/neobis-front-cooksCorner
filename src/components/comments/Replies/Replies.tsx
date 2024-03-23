import React from 'react';
import styles from "./Comments.module.scss";
import Image from "next/image";
import avatar from "../../../public/user.jpg";
import {Button} from "@/components/ui/button/Button";
import clsx from "clsx";
import {useGetReplies} from "@/hooks/useComment";
import {BiSolidDislike, BiSolidLike} from "react-icons/bi";
import AddReplyForm from "@/components/comments/AddReplyForm";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";
import ReplyItem from "@/components/comments/ReplyItem";

interface IProps{
    isReply: boolean
    setIsReply: (state: boolean) => void
    id: number
}

const Replies = ({isReply, setIsReply, id} : IProps) => {

    const {data, isSuccess, isLoading} = useGetReplies(id)
    console.log(data)

    const handleClose = () => {
        setIsReply(false)
    }

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