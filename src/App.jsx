import { Header } from "./Components/Header";

import styles from "./App.module.css"

import "./global.css"
import { Sidebar } from "./Components/Sidebar";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
      </div>
    </>
  )
}