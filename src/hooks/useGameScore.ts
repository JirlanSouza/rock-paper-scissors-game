import { useEffect, useState } from "react";

type Winner = "player" | "house" | "no winner";
const STORAGE_SCORE_ITEM = "game-score";

export function useGameScore() {
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    getStoredScore();
  }, []);

  function getStoredScore() {
    const storedScore = localStorage.getItem(STORAGE_SCORE_ITEM);

    if (storedScore) {
      setScore(parseInt(storedScore));
    }
  }

  function saveScore(score: number) {
    localStorage.setItem(STORAGE_SCORE_ITEM, `${score}`);
  }

  function computeScore(winner: Winner) {
    if (winner === "player") {
      const newScore = score + 1;
      setScore(newScore);
      saveScore(newScore);
    }
  }

  return {
    score,
    computeScore,
  };
}
