import { Header } from "./Components/Header";
import { Sidebar } from "./Components/Sidebar";
import { Post } from "./Components/Post";

import styles from "./App.module.css"

import "./global.css"

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </>
  )
}