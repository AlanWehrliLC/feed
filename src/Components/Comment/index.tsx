import {format, formatDistanceToNow} from "date-fns"
import { ThumbsUp, Trash } from "phosphor-react"
import { useState } from "react"
import { Avatar } from "../Avatar"
import styles from "./styles.module.css"

interface Content {
    id: string;
    name: string;
    avatarUrl: string;
    comment: string;
    publishedAt: Date;
}

interface CommentProps {
    content: Content
    onDeleteComment: (commentID: string)=> void
}

export function Comment({content, onDeleteComment}: CommentProps){
    const publishedAt = content.publishedAt
    const publishedDateFormatted = format(publishedAt, "MMMM dd',' yyyy 'at' hh:mm")
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {addSuffix: true})

    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment(){
        onDeleteComment(content.id)
    }

    function handleLikeComment(){
        setLikeCount((state)=>{return state + 1})
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src={content.avatarUrl} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>{content.name}</strong>
                            <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
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