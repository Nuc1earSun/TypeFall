// import viteLogo from '/vite.svg'
import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import { CharType } from "./types/CharType";
import GameField from "./components/GameField";
const CHAR_TYPES: CharType = {
  letters: false,
  numbers: false,
};
function App() {
  const [charType, setCharType] = useState(CHAR_TYPES);
  const [gameOver, setGameOver] = useState(true);

  return (
    <>
      <Modal
        charType={charType}
        setCharType={setCharType}
        CHAR_TYPES={CHAR_TYPES}
        setGameOver={setGameOver}
        gameOver={gameOver}
      />
      <GameField charType={charType} gameOver={gameOver} />
    </>
  );
}

export default App;
