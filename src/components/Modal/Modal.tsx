import { CharType } from "../../types/CharType";
import S from "./Modal.module.css";
const LETTERS = "letters";
const NUMBERS = "numbers";

type Props = {
  charType: CharType;
  setCharType: React.Dispatch<React.SetStateAction<CharType>>;
  CHAR_TYPES: CharType;
};

export default function Modal({ charType, setCharType, CHAR_TYPES }: Props) {
  console.log(charType);

  const handleSetType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const letters = document.getElementById(LETTERS) as HTMLInputElement;
    const numbers = document.getElementById(NUMBERS) as HTMLInputElement;

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
      const modal = document.getElementById("modal") as HTMLDivElement;
      modal.classList.add(S.hidden);
    }
  };

  return (
    <div className={S.modal} id="modal">
      <h1>TYPE FALL</h1>
      <p>Select the types of characters you would like to practice</p>

      <div>
        <input
          type="checkbox"
          name="letters"
          id="letters"
          onChange={handleSetType}
        />
        <label htmlFor="letters">Letters</label>
        <input
          type="checkbox"
          name="numbers"
          id="numbers"
          onChange={handleSetType}
        />
        <label htmlFor="numbers">Numbers</label>
        <button
          disabled={!charType.letters && !charType.numbers}
          onClick={startGame}
        >
          Start game
        </button>
      </div>
    </div>
  );
}
