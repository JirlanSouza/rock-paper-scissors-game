import { useEffect, useState } from "react";

type GameStep = "start" | "playerChoice" | "housechoice" | "finish";
type Winner = "player" | "house" | "no winner";
type Choice = "rock" | "paper" | "scissors" | "no choice";
const choices: Choice[] = ["rock", "paper", "scissors", "no choice"];

type GameState = {
  playerChoice: Choice;
  houseChoice: Choice;
  choice: Choice;
  gameStep: GameStep;
  winner: Winner;
};

function genarateChoiceIndex() {
  return Math.floor(Math.random() * 2);
}

async function delay(time: number) {
  return new Promise((resolve, _) => {
    setTimeout(resolve, time);
  });
}

export function useGame(computeScore: (wiiner: Winner) => void) {
  const [gameState, setGameState] = useState<GameState>({
    playerChoice: "no choice",
    houseChoice: "no choice",
    choice: "no choice",
    gameStep: "start",
    winner: "no winner",
  });

  async function startGame() {
    const state: GameState = {
      playerChoice: "no choice",
      houseChoice: "no choice",
      choice: "no choice",
      gameStep: "start",
      winner: "no winner",
    };
    setGameState(state);
    await delay(1000);
    selectChoice(state);
  }

  function restartGame() {
    startGame();
  }

  function selectChoice(state: GameState) {
    const choiceIndex = genarateChoiceIndex();
    setGameState({ ...state, choice: choices[choiceIndex] });
  }

  function selectPlayerChoice(choice: Choice) {
    if (choice === "no choice") return;

    setGameState((state) => ({
      ...state,
      playerChoice: choice,
      gameStep: "playerChoice",
    }));
    selectHouseChoice(choice);
  }

  async function selectHouseChoice(playerChoice: Choice) {
    await delay(1000);
    const choiceIndex = genarateChoiceIndex();
    const choice = choices[choiceIndex];

    if (choice === playerChoice) {
      await selectHouseChoice(playerChoice);
      return;
    }

    setGameState((state) => ({
      ...state,
      houseChoice: choice,
      gameStep: "housechoice",
    }));
    await verifyWinner();
  }

  async function verifyWinner() {
    await delay(1000);
    setGameState((state) => {
      let winner: Winner = "no winner";
      if (state.playerChoice === state.choice) {
        winner = "player";
      }

      if (state.houseChoice === state.choice) {
        winner = "house";
      }

      computeScore(winner);
      return { ...state, winner, gameStep: "finish" };
    });
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
