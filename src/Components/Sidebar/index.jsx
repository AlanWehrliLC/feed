import { PencilLine } from "phosphor-react"
import { Avatar } from "../Avatar"

import styles from "./styles.module.css"

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1603468620905-8de7d86b781e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"  
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/AlanWehrliLC.png" />

                <strong>Alan Wehrli</strong>
                <span>Software Engineer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Edit your profile
                </a>
            </footer>
        </aside>
    )
}