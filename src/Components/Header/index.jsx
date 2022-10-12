import styles from "./styles.module.css"

import feedLogo from "../../assets/feed-logo.svg"

export function Header(){
    return (
        <header className={styles.header}>
            <img src={feedLogo} alt="Logo Feed" />
            <strong>Mushroom Phantom - Feed</strong>
        </header>
    )
}