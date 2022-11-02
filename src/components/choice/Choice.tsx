import { PlayerChoice } from "../playerChoice/PlayerChoice";
import { Container, NotChoiceSelected, Title, WinnerEffect, WinnerEffectConatiner } from "./styles";

interface ChoiceProps {
  title: string;
  choice?: "rock" | "paper" | "scissors";
  isWinner?: boolean;
}

export function Choice({ title, choice, isWinner }: ChoiceProps) {
  return (
    <Container>
      <Title>{title}</Title>
      {!choice && <NotChoiceSelected />}

      {isWinner && choice ? (
        <WinnerEffectConatiner>
          <PlayerChoice choice={choice} />
          <WinnerEffect scale={3} />
          <WinnerEffect scale={2} />
          <WinnerEffect scale={1} />
        </WinnerEffectConatiner>
      ) : (
        choice && <PlayerChoice choice={choice} />
      )}
    </Container>
  );
}
