import { useState } from 'react'
import './App.css'
import Message from "./components/Message.jsx"

function App() {
  const [secretNumber, setSecretNumber] = useState(
    Math.floor(Math.random() * 10) + 1
  );
  const [wins, setWins] = useState(0);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <>
  <img src="https://i.pinimg.com/1200x/99/d9/23/99d9239aafdc5dd180eeae9bc30dcc6a.jpg" alt="the word guess surrounded by questions marks" />
  <h1>Guess a Number between 1-10</h1>
  <p>Enter your GUESS in the box below:</p>
  <Message />
  <input/>
  <button>Submit your GUESS</button>
  <p>You won 0 times!</p>
  <button>Play Again?</button>
  
  
    </>
  )
}

export default App

// const user = {name: "Whitney-Rene", url: "https://media.licdn.com/dms/image/C4E03AQHWIAS03rLieQ/profile-displayphoto-shrink_800_800/0/1649184633123?e=1697673600&v=beta&t=U5HYYrAX-12T_XyAVZB-2Kvy_DlgGe4Tx6qKrK2vNzk"}
