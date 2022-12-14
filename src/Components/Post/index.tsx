import {format, formatDistanceToNow} from "date-fns"
import { 
    useState, 
    FormEvent,
    ChangeEvent,
    InvalidEvent
} from "react"
import {v4 as uuidV4} from "uuid"

import { Avatar } from "../Avatar"
import { Comment } from "../Comment"
import styles from "./styles.module.css"

interface Author {
    name: string
    role: string
    avatarUrl: string
}

interface Content {
    type: string
    id: string
    content?: string
    link?: {
        contentLink: string;
        linkUrl: string;
    }
}

interface PostProps {
    author: Author
    content: Content[]
    publishedAt: Date
}

export function Post({author, content, publishedAt}: PostProps){
    const publishedDateFormatted = format(publishedAt, "MMMM dd',' yyyy 'at' hh:mm")
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {addSuffix: true})

    const [comments, setComments] = useState([
        {
            id: uuidV4(),
            name: "GitHub ",
            avatarUrl: "https://github.com/github.png",
            comment: "Nice project!",
            publishedAt: new Date("2022-10-11 09:47:30")
        },
    ])

    const [newCommentText, setNewCommentText] = useState("")

    function handleCreateNewComment(event: FormEvent){
        event.preventDefault()
        const comment = {
            id: uuidV4(),
            name: "GitHub ",
            avatarUrl: "https://github.com/github.png",
            comment: newCommentText,
            publishedAt: new Date()
        }
        
        setComments([ 
            ...comments, 
            comment
        ])
        setNewCommentText("")
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity("")
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity("This field is mandatory!")
    }

    function deleteComment(commentID: string){
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment.id !== commentID
        })

        setComments(commentsWithoutDeletedOne)
    }

    const isNewCommentEmpty = newCommentText.length === 0

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
                        return <p key={line.id}><a target="_blank" href={line.link?.linkUrl}>{line.link?.contentLink}</a></p>
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
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>Publish</button>
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