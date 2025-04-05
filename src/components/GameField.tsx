import { useEffect, useRef, useState } from "react";
import { CharType } from "../types/CharType";
import "../App.css";
import { getRandomChar } from "../lib/getRandomChar";
type Props = {
  charType: CharType;
  gameOver: boolean;
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  difficulty: number;
};

let elements: NodeListOf<HTMLElement>;
setTimeout(() => {
  elements = document.querySelectorAll(`.el`);
}, 0);

export default function GameField({
  charType,
  gameOver,
  setGameOver,
  difficulty,
}: Props) {
  const [score, setScore] = useState(0);
  const [health, setHealth] = useState(100);
  const intervalId = useRef<number>(0);

  const handleKeyDown = (e: KeyboardEvent) => {
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

  useEffect(() => {
    addEventListener("keydown", handleKeyDown);
    return () => {
      removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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
          }, 4000).toString();
        }
      }, difficulty);
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
        <p id="el1" className={"el"}></p>
        <p id="el2" className={"el"}></p>
        <p id="el3" className={"el"}></p>
        <p id="el4" className={"el"}></p>
        <p id="el5" className={"el"}></p>
        <p id="el6" className={"el"}></p>
        <p id="el7" className={"el"}></p>
        <p id="el8" className={"el"}></p>
        <p id="el9" className={"el"}></p>
        <p id="el10" className={"el"}></p>
        <p id="el11" className={"el"}></p>
        <p id="el12" className={"el"}></p>
        <p id="el13" className={"el"}></p>
        <p id="el14" className={"el"}></p>
        <p id="el15" className={"el"}></p>
        <p id="el16" className={"el"}></p>
        <p id="el17" className={"el"}></p>
        <p id="el18" className={"el"}></p>
        <p id="el19" className={"el"}></p>
        <p id="el20" className={"el"}></p>
      </div>
      <p className={"health_title"}>Health: {health}</p>

      <div className={"health_wrapper"} style={{ width: `${health}%` }}>
        <div className={"health"}></div>
      </div>
    </div>
  );
}
