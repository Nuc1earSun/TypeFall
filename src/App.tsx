// import viteLogo from '/vite.svg'
import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal/Modal";
import { CharType } from "./types/CharType";
import GameField from "./components/GameField/GameField";
const CHAR_TYPES: CharType = {
  letters: false,
  numbers: false,
};
function App() {
  const [charType, setCharType] = useState(CHAR_TYPES);
  return (
    <>
      <Modal
        charType={charType}
        setCharType={setCharType}
        CHAR_TYPES={CHAR_TYPES}
      />
      <GameField charType={charType} />
      
    </>
  );
}

export default App;
