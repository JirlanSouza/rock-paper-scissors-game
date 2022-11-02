import { styled } from "@stitches/react";
import { theme } from "../../styles/theme";
import paper from '../../assets/images/icon-paper.svg'
import rock from '../../assets/images/icon-rock.svg'
import scissors from '../../assets/images/icon-scissors.svg'

const Outside = styled("div", {
  width: 200,
  height: 200,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  variants: {
    choice: {
      paper: {
        background: theme.colors.paper,
        boxShadow: `0 10px 0 hsl(230, 54%, 44%)`
      },
      rock: {
        background: theme.colors.rock,
        boxShadow: `0 10px 0 rgb(160, 33, 56)`
      },
      scissors: {
        background: theme.colors.scissors,
        boxShadow: `0 10px 0 hsl(39, 88%, 39%)`
      }
    }
  }
});

const Inside = styled("div", {
  width: 150,
  height: 150,
  background: 'white',
  borderRadius: '50%',
  boxShadow: ' 0 -7px 0 #ECECEC',
  marginTop: 10,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

const Icon = styled("img", {
  width: 68
});

type Choice = 'paper' | 'rock' | 'scissors';

interface PlayerChoiceProps {
  choice: Choice,

}

const ChoiceIcons: Record<Choice, string> = {
  paper, rock, scissors
}

export function PlayerChoice({ choice }: PlayerChoiceProps) {

  return (
    <Outside choice={choice} >
      <Inside>
        <Icon src={ChoiceIcons[choice]} alt="Choice" />
      </Inside>
    </Outside>
  )
}