import { styled } from "@stitches/react";
import { ButtonHTMLAttributes } from "react";
import { theme } from "../../styles/theme";

const RetrySection = styled("div", {
  width: 400,
  height: 300,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 10,
});

const Text = styled("p", {
  fontSize: 80,
  fontWeight: "bolder",
  color: theme.colors.textPrimary,
  marginBottom: 20,
});

const Button = styled("button", {
  width: 350,
  height: 70,
  fontSize: 25,
  color: theme.colors.textDark,
  outline: "none",
  border: "none",
  borderRadius: 14,
  fontFamily: "'Barlow Semi Condensed', sans-serif;",
  letterSpacing: 4,
  cursor: "pointer",
  transition: "all ease 0.2s",
  "&:hover": {
    filter: "brightness(0.9)",
  },
  variants: {
    result: {
      player: {
        color: theme.colors.textScore,
      },
      house: {
        color: theme.colors.textLose,
      },
    },
  },
});

type Result = "player" | "house" | "no winner";

interface RetryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  result: Result;
}

export function Retry({ result, ...restProps }: RetryProps) {
  let resultText = "NO WINNER";
  if (result !== "no winner") {
    resultText = result === "player" ? "YOU WIN" : "YOU LOSE";
  }

  return (
    <RetrySection>
      <Text>{resultText}</Text>
      <Button result={result !== "no winner" ? result : undefined} {...restProps}>
        PLAY AGAIN
      </Button>
    </RetrySection>
  );
}
