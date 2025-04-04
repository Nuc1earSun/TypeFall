import { useEffect, useState } from "react";
import { CharType } from "../../types/CharType";
import S from "./GameField.module.css";
type Props = {
  charType: CharType;
};

export default function GameField({ charType }: Props) {
  const [score, setScore] = useState(0);

  let elements: NodeListOf<HTMLElement>;
  setTimeout(() => {
    elements = document.querySelectorAll(`.${S.el}`);
  }, 0);
  const handleKeyDown = (e) => {
    elements.forEach((el) => {
      if (el.classList.contains(S.move)) {
        if (el.innerHTML === e.key) {
          el.classList.remove(S.move);
          el.innerHTML = "";
          setScore((prev) => prev + 1);
        }
      }
    });
  };
  addEventListener("keydown", handleKeyDown);
  useEffect(() => {
    const interval = setInterval(() => {
      const el = document.getElementById(
        `el${Math.floor(Math.random() * 20) + 1}`
      ) as HTMLParagraphElement;

      if (!el.classList.contains(S.move)) {
        el.classList.add(S.move);
        el.innerHTML = String.fromCharCode(
          Math.floor(Math.random() * 26) + 65
        ).toLowerCase();

        setTimeout(() => {
          el.classList.remove(S.move);
          el.innerHTML = "";
        }, 5000);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  console.log("rerender");

  return (
    <div className={S.gamefield}>
      <div className={S.score}>Score: {score}</div>

      <div className={S.gamezone}>
        <p id="el1" className={S.el} onKeyDown={handleKeyDown}></p>
        <p id="el2" className={S.el} onKeyDown={handleKeyDown}></p>
        <p id="el3" className={S.el} onKeyDown={handleKeyDown}></p>
        <p id="el4" className={S.el} onKeyDown={handleKeyDown}></p>
        <p id="el5" className={S.el} onKeyDown={handleKeyDown}></p>
        <p id="el6" className={S.el} onKeyDown={handleKeyDown}></p>
        <p id="el7" className={S.el} onKeyDown={handleKeyDown}></p>
        <p id="el8" className={S.el} onKeyDown={handleKeyDown}></p>
        <p id="el9" className={S.el} onKeyDown={handleKeyDown}></p>
        <p id="el10" className={S.el} onKeyDown={handleKeyDown}></p>
        <p id="el11" className={S.el} onKeyDown={handleKeyDown}></p>
        <p id="el12" className={S.el} onKeyDown={handleKeyDown}></p>
        <p id="el13" className={S.el} onKeyDown={handleKeyDown}></p>
        <p id="el14" className={S.el} onKeyDown={handleKeyDown}></p>
        <p id="el15" className={S.el} onKeyDown={handleKeyDown}></p>
        <p id="el16" className={S.el} onKeyDown={handleKeyDown}></p>
        <p id="el17" className={S.el} onKeyDown={handleKeyDown}></p>
        <p id="el18" className={S.el} onKeyDown={handleKeyDown}></p>
        <p id="el19" className={S.el} onKeyDown={handleKeyDown}></p>
        <p id="el20" className={S.el} onKeyDown={handleKeyDown}></p>
      </div>
    </div>
  );
}
