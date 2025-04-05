import { useEffect, useRef, useState } from "react";
import { CharType } from "../types/CharType";
import "../App.css";
type Props = {
  charType: CharType;
  gameOver: boolean;
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
};
function getRandomChar(type: CharType) {
  const chars = !type.letters
    ? "0123456789"
    : !type.numbers
    ? "abcdefghijklmnopqrstuvwxyz"
    : "abcdefghijklmnopqrstuvwxyz0123456789";
  const randomIndex = Math.floor(Math.random() * chars.length);
  return chars[randomIndex];
}
export default function GameField({ charType, gameOver, setGameOver }: Props) {
  const [score, setScore] = useState(0);
  const [health, setHealth] = useState(100);
  const intervalId = useRef<number>(0);

  let elements: NodeListOf<HTMLElement>;
  setTimeout(() => {
    elements = document.querySelectorAll(`.el`);
  }, 0);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLParagraphElement>) => {
    elements.forEach((el) => {
      if (el.classList.contains("move")) {
        if (el.innerHTML === e.key) {
          el.classList.remove("move");
          el.innerHTML = "";
          if (el.dataset.timeoutId) {
            clearTimeout(Number(el.dataset.timeoutId));
            delete el.dataset.timeoutId;
          }
          setScore((prev) => prev + 1);
        }
      }
    });
  };

  addEventListener("keydown", handleKeyDown);

  useEffect(() => {
    if (!gameOver) {
      intervalId.current = setInterval(() => {
        const el = document.getElementById(
          `el${Math.floor(Math.random() * 20) + 1}`
        ) as HTMLParagraphElement;

        if (!el.classList.contains("move")) {
          el.classList.add("move");
          el.innerHTML = getRandomChar(charType);
          el.dataset.timeoutId = setTimeout(() => {
            if (el.classList.contains("move")) {
              setHealth((prev) => prev - 10);
            }
            el.classList.remove("move");
            el.innerHTML = "";
          }, 5000).toString();
        }
      }, 1000);
      return () => {
        setHealth(100);
        clearInterval(intervalId.current);
      };
    }
  }, [gameOver]);

  useEffect(() => {
    if (health <= 0) {
      setGameOver(true);
      setScore(0);
      elements.forEach((el) => {
        el.classList.remove("move");
        el.innerHTML = "";
      });
      clearInterval(intervalId.current);
    }
  }, [health]);

  return (
    <div className={"gamefield"} id="gamefield">
      <div className={"score"}>Score: {score}</div>

      <div className={"gamezone"}>
        <p id="el1" className={"el"} onKeyDown={handleKeyDown}></p>
        <p id="el2" className={"el"} onKeyDown={handleKeyDown}></p>
        <p id="el3" className={"el"} onKeyDown={handleKeyDown}></p>
        <p id="el4" className={"el"} onKeyDown={handleKeyDown}></p>
        <p id="el5" className={"el"} onKeyDown={handleKeyDown}></p>
        <p id="el6" className={"el"} onKeyDown={handleKeyDown}></p>
        <p id="el7" className={"el"} onKeyDown={handleKeyDown}></p>
        <p id="el8" className={"el"} onKeyDown={handleKeyDown}></p>
        <p id="el9" className={"el"} onKeyDown={handleKeyDown}></p>
        <p id="el10" className={"el"} onKeyDown={handleKeyDown}></p>
        <p id="el11" className={"el"} onKeyDown={handleKeyDown}></p>
        <p id="el12" className={"el"} onKeyDown={handleKeyDown}></p>
        <p id="el13" className={"el"} onKeyDown={handleKeyDown}></p>
        <p id="el14" className={"el"} onKeyDown={handleKeyDown}></p>
        <p id="el15" className={"el"} onKeyDown={handleKeyDown}></p>
        <p id="el16" className={"el"} onKeyDown={handleKeyDown}></p>
        <p id="el17" className={"el"} onKeyDown={handleKeyDown}></p>
        <p id="el18" className={"el"} onKeyDown={handleKeyDown}></p>
        <p id="el19" className={"el"} onKeyDown={handleKeyDown}></p>
        <p id="el20" className={"el"} onKeyDown={handleKeyDown}></p>
      </div>
      <p className={"health_title"}>Health: {health}</p>

      <div className={"health_wrapper"} style={{ width: `${health}%` }}>
        <div className={"health"}></div>
      </div>
    </div>
  );
}
