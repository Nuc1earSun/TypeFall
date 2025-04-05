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
  const [difficulty, setDifficulty] = useState(1200);

  return (
    <>
      <Modal
        charType={charType}
        setCharType={setCharType}
        CHAR_TYPES={CHAR_TYPES}
        setGameOver={setGameOver}
        gameOver={gameOver}
        setDifficulty={setDifficulty}
      />
      <GameField
        charType={charType}
        gameOver={gameOver}
        setGameOver={setGameOver}
        difficulty={difficulty}
      />
    </>
  );
}

export default App;
