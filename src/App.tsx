import { Choice } from "./components/choice/Choice";
import { RolesDialog } from "./components/rolesDialog/RolesDialog";
import { Header } from "./components/header/Header";
import { useGame } from "./hooks/useGame";
import { useGameScore } from "./hooks/useGameScore";
import { SelectChoice } from "./components/selectChoice";
import { GlobalStyles } from "./styles/global.style";
import { theme } from "./styles/theme";
import { Retry } from "./components/Retry/Retry";
import {
  AppContentContainerContainer,
  AppLayoutContainer,
} from "./components/applayout";

export function App() {
  const { score, computeScore } = useGameScore();
  const {
    gameStep,
    playerChoice,
    houseChoice,
    winner,
    selectPlayerChoice,
    restartGame,
  } = useGame(computeScore);

  GlobalStyles();
  return (
    <AppLayoutContainer className={theme}>
      <Header score={score} />
      {gameStep === 1 && <SelectChoice onSelectChoice={selectPlayerChoice} />}

      {gameStep > 1 && gameStep < 5 && (
        <AppContentContainerContainer>
          <Choice
            title="You picked"
            choice={playerChoice}
            isWinner={winner === "player"}
          />
          {gameStep > 3 && <Retry result={winner} onClick={restartGame} />}
          <Choice
            title="The house picked"
            choice={houseChoice}
            isWinner={winner === "house"}
          />
        </AppContentContainerContainer>
      )}
      <RolesDialog />
    </AppLayoutContainer>
  );
}
