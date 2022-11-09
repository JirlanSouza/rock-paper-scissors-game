import { PlayerChoice } from "../playerChoice";
import {
  Container,
  NotChoiceSelected,
  Title,
  WinnerEffect,
  WinnerEffectConatiner,
} from "./styles";

interface ChoiceProps {
  title: string;
  choice: "rock" | "paper" | "scissors" | "no choice";
  isWinner?: boolean;
}

export function Choice({ title, choice, isWinner }: ChoiceProps) {
  return (
    <Container>
      <Title>{title}</Title>
      {choice === "no choice" && <NotChoiceSelected />}

      {isWinner && choice != "no choice" ? (
        <WinnerEffectConatiner>
          <PlayerChoice choice={choice} />
          <WinnerEffect scale={3} />
          <WinnerEffect scale={2} />
          <WinnerEffect scale={1} />
        </WinnerEffectConatiner>
      ) : (
        choice != "no choice" && <PlayerChoice choice={choice} />
      )}
    </Container>
  );
}
