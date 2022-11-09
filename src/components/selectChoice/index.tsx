import { PlayerChoice } from "../playerChoice";
import bgTriangle from "../../assets/images/bg-triangle.svg";
import { Paper, Rock, Scissors, Step1Section, Triangle } from "./styles";

type Choice = "rock" | "paper" | "scissors";

interface Step1Props {
  onSelectChoice: (choice: Choice) => void;
}

export function SelectChoice({ onSelectChoice }: Step1Props) {
  return (
    <Step1Section>
      <Triangle src={bgTriangle} alt="Triangle" />
      <Paper onClick={() => onSelectChoice("paper")}>
        <PlayerChoice choice="paper" />
      </Paper>
      <Rock onClick={() => onSelectChoice("rock")}>
        <PlayerChoice choice="rock" />
      </Rock>
      <Scissors onClick={() => onSelectChoice("scissors")}>
        <PlayerChoice choice="scissors" />
      </Scissors>
    </Step1Section>
  );
}
