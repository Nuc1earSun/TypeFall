import { CharType } from "../types/CharType";
import "../App.css";
import { useEffect } from "react";

type Props = {
  charType: CharType;
  setCharType: React.Dispatch<React.SetStateAction<CharType>>;
  CHAR_TYPES: CharType;
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  gameOver: boolean;
  setDifficulty: React.Dispatch<React.SetStateAction<number>>;
};

export default function Modal({
  charType,
  setCharType,
  CHAR_TYPES,
  setGameOver,
  gameOver,
  setDifficulty,
}: Props) {
  const handleSetType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const letters = document.getElementById('letters') as HTMLInputElement;
    const numbers = document.getElementById('numbers') as HTMLInputElement;

    if (!letters?.checked && !numbers?.checked) {
      setCharType(CHAR_TYPES);
    }

    if (e.target.checked) {
      setCharType((prev) => ({
        ...prev,
        [e.target.name]: true,
      }));
    }
  };

  const startGame = () => {
    if (charType) {
      const top = window.innerHeight;
      window.scrollTo({ top, behavior: "smooth" });
      setTimeout(() => {
        setGameOver(false);
      }, 1000);
    }
  };

  useEffect(() => {
    if (gameOver) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [gameOver]);

  return (
    <div className={"modal"} id="modal">
      <h1>TYPE FALL</h1>
      <p>Select the types of characters you would like to practice</p>

      <div className="select__container">
        <div>
          <h3>Choose types of characters</h3>
          <div className="select__wrapper">
            <input
              type="checkbox"
              name="letters"
              id="letters"
              onChange={handleSetType}
            />
            <label htmlFor="letters">Letters</label>
          </div>
          <div className="select__wrapper">
            <input
              type="checkbox"
              name="numbers"
              id="numbers"
              onChange={handleSetType}
            />
            <label htmlFor="numbers">Numbers</label>
          </div>
        </div>
        <div>
          <h3>Select difficulty</h3>

          <div className="select__wrapper">
            <input
              type="radio"
              name="difficulty"
              id="difficultyEasy"
              onChange={() => setDifficulty(1200)}
              defaultChecked
            />
            <label htmlFor="difficultyEasy">Easy</label>
          </div>
          <div className="select__wrapper">
            <input
              type="radio"
              name="difficulty"
              id="difficultyHard"
              onChange={() => setDifficulty(700)}
            />
            <label htmlFor="difficultyHard">Hard</label>
          </div>
        </div>
      </div>
      <button
        disabled={!charType.letters && !charType.numbers}
        onClick={startGame}
        className="start__button"
      >
        Start game
      </button>
    </div>
  );
}
