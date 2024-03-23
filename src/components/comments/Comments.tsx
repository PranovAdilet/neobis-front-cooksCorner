import React from 'react';

import CommentItem from "@/components/comments/ui/CommentItem";
import styles from './Comments.module.scss'
import {useComments} from "@/hooks/user/useComment";

const Comments = ({id} : {id: string | string[]}) => {

    const {data: comments} = useComments(+id || 0)

    return (
        <div className={styles.comments}>
            {
                comments && comments.map(item => (
                    <CommentItem id={id} key={item.commentId} item={item}/>
                ))
            }
        </div>
    );
};

export default Comments;