import { useState } from 'react'
import Message from './Message';

function GuessGame () {
    //create states for random#, counter for wins, user's guess and loading
  const [secretNumber, setSecretNumber] = useState(
    Math.floor(Math.random() * 10) + 1
  );
  const [wins, setWins] = useState(0);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function evaluateGuess() {
    // console.log(typeof guess, typeof secretNumber);
    setLoading(true);
    setTimeout(function () {
      if (guess == secretNumber) {
        setMessage("You got it right!");
        setLoading(false);
        setWins(wins + 1);
      } else if (guess > secretNumber) {
        setLoading(false);
        setMessage("Too high");
      } else if (guess < secretNumber) {
        setLoading(false);
        setMessage("Too low");
      } else {
        console.log("proud of you Whitney-Rene");
      }
    }, 1500);
  }
  
  function resetGame() {
    setSecretNumber(Math.floor(Math.random() * 10) + 1);
    setGuess("");
    setMessage("");
    console.log("i'm that girl");
  }

  return (
    <>
  <h1>Guess a Number between 1-10</h1>
  <p>Enter your GUESS in the box below:</p>
  <Message message={message}/>
  {loading && <div>loading...</div>}
  <input
        type="number"
        value={guess}
        onChange={(event) => {
          console.log(event);
          setGuess(event.target.value);
        }}
      />
  <button onClick={evaluateGuess} className="subbtn">
        Submit your GUESS
      </button>
      <p>You won {wins} times!</p>
      <button
        onClick={(event) => {
          console.log(event);
          resetGame();
        }}
        className="playAgBtn"
      >
        Play Again?
      </button>
  
  
    </>
  )

}

export default GuessGame;

{/* <img src="https://i.pinimg.com/1200x/99/d9/23/99d9239aafdc5dd180eeae9bc30dcc6a.jpg" alt="the word guess surrounded by questions marks" /> */}