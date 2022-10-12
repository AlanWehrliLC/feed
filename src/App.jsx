import { Header } from "./Components/Header";
import { Sidebar } from "./Components/Sidebar";
import { Post } from "./Components/Post";

import styles from "./App.module.css"

import "./global.css"

const posts = [
  {
    id: 0,
    author: {
      avatarUrl: "https://github.com/AlanWehrliLC.png",
      name: "Alan Wehrli",
      role: "Software Engineer"
    },
    content: [
      {type: "paragraph", content: "Hey guys 👋"},
      {type: "paragraph", content: "I just uploaded another project in my portfolio. It's a project I did for a Social Network Feed. Project name is Mushroom Phantom - Feed 🚀"},
      {type: "link", link: {content: "AlanWehrliLC/feed", link: "https://github.com/AlanWehrliLC/feed"}},
    ],
    publishedAt: new Date("2022-10-12 09:47:30")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/AlanWehrliLC.png",
      name: "Alan Wehrli",
      role: "Software Engineer"
    },
    content: [
      {type: "paragraph", content: "Hey guys 👋"},
      {type: "paragraph", content: "This project was created at the beginning of my studies from NoSQL on Cloud Firestore."},
      {type: "paragraph", content: "A bot for to Discod, which is currently not working, due to lack of maintenance."},
      {type: "paragraph", content: "But I'll fix this soon 🚀"},
      {type: "link", link: {content: "AlanWehrliLC/Discord-Bot", link: "https://github.com/AlanWehrliLC/Discord-Bot"}},
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