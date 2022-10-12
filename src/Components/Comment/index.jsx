import { ThumbsUp, Trash } from "phosphor-react"
import { useState } from "react"
import { Avatar } from "../Avatar"
import styles from "./styles.module.css"

export function Comment({content, onDeleteComment}){
    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment(){
        onDeleteComment(content.id)
    }

    function handleLikeComment(){
        setLikeCount(likeCount + 1)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/AlanWehrliLC.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Alan Wehrli</strong>
                            <time title="October 10, 2022 at 11:20" dateTime="2022-11-10 11:20:00">1 hours ago</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentario">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content.comment}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Like 
                        <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}