import { useEffect, useState } from "react";

type Winner = "player" | "house" | "no winner";
type Choice = "rock" | "paper" | "scissors" | "no choice";
const choices: Choice[] = ["rock", "paper", "scissors", "no choice"];

type GameState = {
  playerChoice: Choice;
  houseChoice: Choice;
  choice: Choice;
  gameStep: number;
  winner: Winner;
};

function genarateChoiceIndex() {
  return Math.floor(Math.random() * 2);
}

export function useGame(computeScore: (wiiner: Winner) => void) {
  const [gameState, setGameState] = useState<GameState>({
    playerChoice: "no choice",
    houseChoice: "no choice",
    choice: "no choice",
    gameStep: 1,
    winner: "no winner",
  });

  useEffect(() => {
    startGame();
  }, []);

  function startGame() {
    const state: GameState = {
      playerChoice: "no choice",
      houseChoice: "no choice",
      choice: "no choice",
      gameStep: 1,
      winner: "no winner",
    };
    selectChoice(state);
  }

  function restartGame() {
    alert();
    startGame();
  }

  function selectChoice(state: GameState) {
    const choiceIndex = genarateChoiceIndex();
    setGameState({ ...state, choice: choices[choiceIndex] });
  }

  function selectPlayerChoice(choice: Choice) {
    if (choice === "no choice") return;

    setGameState({
      ...gameState,
      playerChoice: choice,
      gameStep: 2,
    });
    selectHouseChoice();
  }

  function selectHouseChoice() {
    setTimeout(
      () =>
        setGameState((state) => {
          const choiceIndex = genarateChoiceIndex();
          const choice = choices[choiceIndex];

          if (choice === state.playerChoice) {
            console.log(choice, state.playerChoice);
            selectHouseChoice();
            return { ...state };
          }

          verifyWinner();
          return { ...state, houseChoice: choice, gameStep: 3 };
        }),
      1000
    );
  }

  function verifyWinner() {
    setTimeout(
      () =>
        setGameState((state) => {
          let winner: Winner = "no winner";
          if (state.playerChoice === state.choice) {
            winner = "player";
          }

          if (state.houseChoice === state.choice) {
            winner = "house";
          }
          console.log(winner);

          computeScore(winner);
          return { ...state, winner, gameStep: 4 };
        }),
      1000
    );
  }

  return {
    gameStep: gameState.gameStep,
    playerChoice: gameState.playerChoice,
    houseChoice: gameState.houseChoice,
    winner: gameState.winner,
    restartGame,
    selectPlayerChoice,
  };
}
