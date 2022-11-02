import { Container, NotChoiceSelectd, Title, WinnerEffect, WinnerEffectConatiner } from "./styles";

interface ChoiceProps {
  title: string;
  choice?: "rock" | "papper" | "scissors";
  isWinner?: boolean;
}

export function Choice({ title, choice, isWinner }: ChoiceProps) {
  return (
    <Container>
      <Title>{title}</Title>
      {!choice && <NotChoiceSelectd />}

      {isWinner ? (
        <WinnerEffectConatiner>
          <WinnerEffect scale={3} />
          <WinnerEffect scale={2} />
          <WinnerEffect scale={1} />
        </WinnerEffectConatiner>
      ) : (
        <></>
      )}
    </Container>
  );
}
