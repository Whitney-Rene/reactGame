import { useState } from 'react'
import './App.css'
import Message from "./components/Message.jsx"

function App() {
const user = {name: "Whitney-Rene", url: "https://media.licdn.com/dms/image/C4E03AQHWIAS03rLieQ/profile-displayphoto-shrink_800_800/0/1649184633123?e=1697673600&v=beta&t=U5HYYrAX-12T_XyAVZB-2Kvy_DlgGe4Tx6qKrK2vNzk"}

  return (
    <>
  <h1>reactGame</h1>
  <Message name={user.name} url={user.url} />
    </>
  )
}

export default App
