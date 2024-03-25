'use client'

import React, {useState} from 'react';
import styles from "@/app/(sidebar)/detail/Detail.module.scss";
import Image from "next/image";
import Title from "@/components/ui/title/Title";
import {IoTimeOutline} from "react-icons/io5";
import {useParams} from "next/navigation";
import {useDetailsRecipe} from "@/app/(sidebar)/detail/useDetails";
import Link from "next/link";
import {ROUTES} from "@/config/pages-url.config";
import ToggleButtons from "@/components/ui/toggleBookmarkAndLikeButtons/ToggleButtons";
import Comments from "@/components/comments/Comments";
import AddComment from "@/components/comments/ui/AddComment";
import Back from "@/components/ui/back/Back";


const Detail = () => {

    const {id} = useParams()

    const {data} = useDetailsRecipe(+id || 0)

    const [comment, setComment] = useState(true)

    return (
        <section className={styles.detail}>
            <Back/>
            {
                data && <>
                    <Image priority={true} className={styles.image} src={data.imageUrl} width={800} height={800} alt="detailImage"/>
                    <div className={styles.content}>
                        <Title>{data.title}</Title>
                        <div className="mb-2"></div>
                        <Link href={`${ROUTES.AUTHOR}/${data.authorId}`} className={styles.author}>by {data.author}</Link>
                        <div className={styles.time}>
                            <span className={styles.time__icon}><IoTimeOutline/></span>
                            <p className={styles.time__textr}>{data.cookingTimeMinutes} min</p>
                        </div>
                        <span className={styles.difficulty}>{data.difficulty}</span>
                        <ToggleButtons
                            type="detail"
                            recipeId={data.recipeId}
                            isLiked={data.isLiked}
                            isBookmarked={data.isBookmarked}
                            likes={data.likes}
                            bookmarks={data.bookmarks}
                        />
                        <h3 className={styles.subtitle}>Description</h3>
                        <p className={styles.text}>{data.description}</p>
                        <h3 className={styles.subtitle}>Ingredients</h3>
                        <div className={styles.ingredients__content}>
                            {
                                data.ingredients.map((item, idx) => (
                                    <div key={idx} className={styles.ingredients}>
                                        <p className={styles.ingredient}>{item.ingredient}</p>
                                        <span className={styles.amount}>{item.amount} {item.measureUnit}</span>
                                    </div>
                                ))
                            }

                        </div>
                        <h3 className={styles.reviews}>Comments</h3>
                        <AddComment
                            recipeId={data.recipeId}
                            placeholder="Enter a comment"
                            type="comment"
                            isReply={comment}
                            setIsReply={setComment}
                            id={data.recipeId}
                        />
                        <Comments id={id}/>
                    </div>
                </>
            }
        </section>
    );
};

export default Detail;