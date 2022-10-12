import { Header } from "./Components/Header";
import { Sidebar } from "./Components/Sidebar";
import { Post } from "./Components/Post";

import styles from "./App.module.css"

import "./global.css"
import { v4 as uuidV4 } from "uuid";

const posts = [
  {
    id: uuidV4(),
    author: {
      avatarUrl: "https://github.com/AlanWehrliLC.png",
      name: "Alan Wehrli",
      role: "Software Engineer"
    },
    content: [
      {type: "paragraph", id: uuidV4(), content: "Hey guys 👋"},
      {type: "paragraph", id: uuidV4(), content: "I just uploaded another project in my portfolio. It's a project I did for a Social Network Feed. Project name is Mushroom Phantom - Feed 🚀"},
      {type: "link", id: uuidV4(), link: {content: "AlanWehrliLC/feed", link: "https://github.com/AlanWehrliLC/feed"}},
    ],
    publishedAt: new Date("2022-10-12 09:47:30")
  },
  {
    id: uuidV4(),
    author: {
      avatarUrl: "https://github.com/AlanWehrliLC.png",
      name: "Alan Wehrli",
      role: "Software Engineer"
    },
    content: [
      {type: "paragraph", id: uuidV4(), content: "Hey guys 👋"},
      {type: "paragraph", id: uuidV4(), content: "This project was created at the beginning of my studies from NoSQL on Cloud Firestore."},
      {type: "paragraph", id: uuidV4(), content: "A bot for to Discod, which is currently not working, due to lack of maintenance."},
      {type: "paragraph", id: uuidV4(), content: "But I'll fix this soon 🚀"},
      {type: "link", id: uuidV4(), link: {content: "AlanWehrliLC/Discord-Bot", link: "https://github.com/AlanWehrliLC/Discord-Bot"}},
    ],
    publishedAt: new Date("2022-10-04 09:47:30")
  }
]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post=>{
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}