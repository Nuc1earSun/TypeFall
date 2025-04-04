import { useEffect, useState } from "react";
import { CharType } from "../types/CharType";
import "../App.css";
type Props = {
  charType: CharType;
  gameOver: boolean;
};

export default function GameField({ charType, gameOver }: Props) {
  const [score, setScore] = useState(0);
  const [health, setHealth] = useState(100);

  let elements: NodeListOf<HTMLElement>;
  setTimeout(() => {
    elements = document.querySelectorAll(`.el`);
  }, 0);

  const handleKeyDown = (e) => {
    elements.forEach((el) => {
      if (el.classList.contains('move')) {
        if (el.innerHTML === e.key) {
          el.classList.remove('move');
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

  const startGame = () => {
    const el = document.getElementById(
      `el${Math.floor(Math.random() * 20) + 1}`
    ) as HTMLParagraphElement;

    if (!el.classList.contains("move")) {
      el.classList.add("move");
      el.innerHTML = String.fromCharCode(
        Math.floor(Math.random() * 26) + 65
      ).toLowerCase();
      el.dataset.timeoutId = setTimeout(() => {
        el.classList.remove("move");
        el.innerHTML = "";
        setHealth((prev) => prev - 10);
      }, 5000).toString();
    }
  };

  useEffect(() => {
    if (!gameOver) {
      const interval = setInterval(() => {
        startGame();
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [gameOver]);

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
