import styles from "./styles.module.css"

export function Post(){
    return (
        <article className={styles.post}>
            <header>

                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/AlanWehrliLC.png" />
                    <div className={styles.authorInfo} >
                        <strong>Alan Wehrli</strong>
                        <span>Software Engineer</span>
                    </div>
                </div>

                <time title="October 10, 2022 at 09:47" dateTime="2022-11-10 09:47:30">1 hours ago</time>
            </header>

            <div className={styles.content}>
                <p>Hey guys 👋</p>

                <p>I just uploaded another project in my portfolio. It's a project I did for a Social Network Feed. Project name is Mushroom Phantom - Feed 🚀</p>

                <p>👉 <a 
                    href="https://github.com/AlanWehrliLC/feed"
                    target="_blank"
                > AlanWehrliLC/feed</a></p>

                <p>
                    <a href="#"> #Feed</a>
                    <a href="#"> #SocialNetwork</a> 
                    <a href="#"> #NewProject</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Leave your feedback</strong>

                <textarea
                    placeholder="Leave a comment..."
                />

                <footer>
                    <button type="submit">Publish</button>
                </footer>
            </form>
        </article>
    )
}