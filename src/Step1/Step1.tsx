import { styled } from "@stitches/react";
import bgTriangle from "../assets/images/bg-triangle.svg";
import { PlayerChoice } from "../components/playerChoice/PlayerChoice";

const Step1Section = styled("div", {
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "1",
});

const Triangle = styled("img", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "2",
});

const Paper = styled("div", {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "5",
  left: -400,
  top: -150,
});

const Rock = styled("div", {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "6",
  right: 450,
  top: 100,
});

const Scissors = styled("div", {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "7",
  left: -500,
  top: -150,
});

interface Step1Props {
  choice: (string: string) => void;
}

export function Step1({ choice }: Step1Props) {
  return (
    <Step1Section>
      <Triangle src={bgTriangle} alt="Triangle" />
      <Paper onClick={() => choice("paper")}>
        <PlayerChoice choice="paper" />
      </Paper>
      <Rock onClick={() => choice("rock")}>
        <PlayerChoice choice="rock" />
      </Rock>
      <Scissors onClick={() => choice("scissors")}>
        <PlayerChoice choice="scissors" />
      </Scissors>
    </Step1Section>
  );
}
