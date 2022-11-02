import { styled } from "@stitches/react";
import { theme } from "../../styles/theme";

const RetrySection = styled("div", {
  width: 400,
  height: 300,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
});

const Text = styled("p", {
  fontSize: 80,
  fontWeight: 'bolder',
  color: theme.colors.textPrimary,
  marginBottom: 20
});

const Button = styled("button", {
  width: 350,
  height: 70,
  fontSize: 25,
  color: theme.colors.textLose,
  outline: 'none',
  border: 'none',
  borderRadius: 14,
  fontFamily: "'Barlow Semi Condensed', sans-serif;",
  letterSpacing: 4,
  transition: 'all ease 0.2s',
  '&:hover': {
    filter: 'brightness(0.9)'
  },
  variants: {
    result: {
      winner: {
        color: theme.colors.textScore
      },
      loser: {
        color: theme.colors.textLose
      }
    }
  }
});

type Result = 'winner' | 'loser' | ''

interface RetryProps {
  result: Result
}

export function Retry({ result }: RetryProps) {
  if (!result) return null
  let resultText = ''
  result === 'winner' ? resultText = 'YOU WIN' : resultText = 'YOU LOSE'

  return (
    <RetrySection>
      <Text>{resultText}</Text>
      <Button result={result}>PLAY AGAIN</Button>
    </RetrySection>
  )
}