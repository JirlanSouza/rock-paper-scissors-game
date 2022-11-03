import { styled } from "@stitches/react";
import bgTriangle from "../assets/images/bg-triangle.svg";
import { PlayerChoice } from "../playerChoice/PlayerChoice";

const Step1Section = styled("div", {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: 100,
  zIndex: "1",
});

const Triangle = styled("img", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "2",
});

const Paper = styled("div", {
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "5",
  right: -80,
  top: -95,
  cursor: "pointer",
  transition: "filter easy 0.2s",

  "&:hover": {
    filter: "brightness(0.8)",
  },
});

const Rock = styled("div", {
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "6",
  left: 55,
  top: 140,
  cursor: "pointer",
  transition: "filter easy 0.2s",

  "&:hover": {
    filter: "brightness(0.8)",
  },
});

const Scissors = styled("div", {
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "7",
  left: -80,
  top: -95,
  cursor: "pointer",
  transition: "filter easy 0.2s",

  "&:hover": {
    filter: "brightness(0.8)",
  },
});

type Choice = "rock" | "paper" | "scissors";

interface Step1Props {
  onSelectChoice: (choice: Choice) => void;
}

export function Step1({ onSelectChoice }: Step1Props) {
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
