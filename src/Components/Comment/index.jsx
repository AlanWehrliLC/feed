import { ThumbsUp, Trash } from "phosphor-react"
import { Avatar } from "../Avatar"
import styles from "./styles.module.css"

export function Comment(){
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

                        <button title="Deletar comentario">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir 
                        <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}