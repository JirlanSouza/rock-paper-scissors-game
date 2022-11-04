import { styled } from "@stitches/react";
import { useState } from "react";
import { Choice } from "./components/choice/Choice";
import { RolesDialog } from "./components/rolesDialog/RolesDialog";
import { Header } from "./components/header/Header";
import { useGame } from "./hooks/useGame";
import { useGameScore } from "./hooks/useGameScore";
import { Step1 } from "./components/Step1/Step1";
import { GlobalStyles } from "./styles/global.style";
import { theme } from "./styles/theme";

const Page = styled("main", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 100,
  width: "100vw",
  height: "100vh",
  paddingTop: 96,
  background: theme.colors.background,
});

const ChoicesContainer = styled("div", {
  display: "flex",
  columnGap: 48,
});

const Text = styled("h1", {
  color: theme.colors.textLose,
});

export function App() {
  const { score, computeScore } = useGameScore();
  const { gameStep, playerChoice, houseChoice, winner, selectPlayerChoice, restartGame } =
    useGame(computeScore);

  GlobalStyles();
  return (
    <Page className={theme}>
      <Header score={score} />
      {gameStep === 1 && <Step1 onSelectChoice={selectPlayerChoice} />}

      {gameStep > 1 && gameStep < 5 && (
        <ChoicesContainer>
          <Choice title="You picked" choice={playerChoice} isWinner={winner === "player"} />
          {gameStep > 3 && (
            <button style={{ zIndex: 10 }} onClick={restartGame}>
              Restart game
            </button>
          )}
          <Choice title="The house picked" choice={houseChoice} isWinner={winner === "house"} />
        </ChoicesContainer>
      )}
      <RolesDialog />
    </Page>
  );
}
