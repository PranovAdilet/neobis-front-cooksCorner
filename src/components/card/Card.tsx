import styles from "./Card.module.scss";
import Image from "next/image";
import {IRecipe} from "@/types/recipes.types";
import Link from "next/link";
import ToggleButtons from "@/components/toggleBookmarkAndLikeButtons/ToggleButtons";
import {IFollower} from "@/types/auth.types";
import avatar from '@/../public/user.jpg'
import {ROUTES} from "@/config/pages-url.config";

interface IProps{
    type: "big" | "medium" | "small"
    item?: IRecipe
    user?: IFollower
}

const Card = ({type, item, user} : IProps) => {

    return (
        <>
            {
                type === "big" && item && <Link href={`${ROUTES.DETAILS}/${item.recipeId}`} className={styles.card}>
                    <Image className={styles.image} width={308} height={209} src={item.imageUrl} priority={true} alt="card"/>
                    <div className={styles.card__block}>
                        <h4 className={styles.card__title}>{item.title}</h4>
                        <p className={styles.card__author}>by {item.author}</p>
                       <ToggleButtons
                           type="card"
                           likes={item.likes}
                           bookmarks={item.bookmarks}
                           isLiked={item.isLiked}
                           isBookmarked={item.isBookmarked}
                           recipeId={item.recipeId}
                       />
                    </div>
                </Link>
        }


            {
                type === "small" && user && <Link href={`${ROUTES.AUTHOR}/${user.userId}`} className={styles.chef}>
                    <Image className={styles.img} src={user?.imageUrl || avatar} width={200} height={200} priority={true} alt="card"/>
                    <h3 className={styles.name}>{user?.name}</h3>
                </Link>
            }

            {
                type === "medium" && item && <div className={styles.searchCard}>
                    <Link  href={`${ROUTES.DETAILS}/${item.recipeId}`}>
                        <Image className={styles.searchImage} width={300} height={300} src={item.imageUrl} alt="card" priority={true}/>
                    </Link>
                    <div className={styles.searchBlock}>
                        <h4 className={styles.searchTitle}>{item.title}</h4>
                        <p className={styles.searchAuthor}>by {item.author}</p>
                        <ToggleButtons
                            likes={item.likes}
                            bookmarks={item.bookmarks}
                            isLiked={item.isLiked}
                            isBookmarked={item.isBookmarked}
                            recipeId={item.recipeId}
                            type="search"
                        />
                    </div>
                </div>
            }

        </>
    );
};

export default Card;