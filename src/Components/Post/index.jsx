import {format, formatDistanceToNow} from "date-fns"
import { useState } from "react"
import {v4 as uuidV4} from "uuid"

import { Avatar } from "../Avatar"
import { Comment } from "../Comment"
import styles from "./styles.module.css"

export function Post({author, content, publishedAt}){
    const publishedDateFormatted = format(publishedAt, "MMMM dd',' yyyy 'at' hh:mm")
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {addSuffix: true})

    const [comments, setComments] = useState([
        {
            id: uuidV4(),
            comment: "Nice project!"
        },
    ])

    const [newCommentText, setNewCommentText] = useState("")

    function handleCreateNewComment(){
        event.preventDefault()
        const comment = {
            id: uuidV4(),
            comment: newCommentText
        }
        
        setComments([ 
            ...comments, 
            comment
        ])
        setNewCommentText("")
    }

    function handleNewCommentChange(){
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentID){
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment.id !== commentID
        })

        setComments(commentsWithoutDeletedOne)
    }

    return (
        <article className={styles.post}>
            <header>

                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo} >
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === "paragraph") {
                        return <p key={line.id}>{line.content}</p>
                    }else if (line.type === "link") {
                        return <p key={line.id}><a target="_blank" href={line.link.link}>{line.link.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Leave your feedback</strong>

                <textarea
                    name="comment"
                    placeholder="Leave a comment..."
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                />

                <footer>
                    <button type="submit">Publish</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (<Comment 
                        key={comment.id} 
                        content={comment} 
                        onDeleteComment={deleteComment} 
                    />)
                })}
            </div>
        </article>
    )
}