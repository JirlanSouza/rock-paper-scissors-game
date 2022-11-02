import { styled } from "@stitches/react";
import { GlobalStyles } from "../styles/global.style";
import { theme } from "../styles/theme";
import logo from '../assets/images/logo.svg';

const GameHeader = styled("header", {
  width: "720px",
  height: "160px",
  border: `${theme.colors.headerOutline} 3px solid`,
  borderRadius: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "transparent",
});

const Logo = styled("img", {
  width:"162px",
  height:"99px",
  marginLeft: "30px",
});

const ScoreBoard = styled("div", {
  width:"150px",
  height:"120px",
  marginRight: "30px",
  borderRadius: "20px",
  backgroundColor: theme.colors.textPrimary,
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
});

const ScoreBoardTitle = styled("span", {
  color: theme.colors.textScore,
  marginTop: "16px",
  fontSize: "16px"
});

const Score = styled("span", {
  color: theme.colors.textDark,
  fontSize: "72px",
  lineHeight: "64px"
});

interface HeaderProps {
  score: number
}

export function Header({score}: HeaderProps){
  GlobalStyles()
  return (
    <>
    <GameHeader>
      <Logo src={logo} alt="Logo"></Logo>
      <ScoreBoard>
        <ScoreBoardTitle>SCORE</ScoreBoardTitle>
        <Score>{ score || 0 }</Score>
      </ScoreBoard>
    </GameHeader>
    </>
  )
}