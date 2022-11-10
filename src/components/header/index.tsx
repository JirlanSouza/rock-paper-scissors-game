import {
  GameHeader,
  Logo,
  ScoreBoard,
  ScoreBoardTitle,
  ScoreText,
} from "./styles";
import logo from "../../assets/images/logo.svg";

interface HeaderProps {
  score: number;
}

export function Header({ score }: HeaderProps) {
  return (
    <GameHeader>
      <Logo src={logo} alt="Logo"></Logo>
      <ScoreBoard>
        <ScoreBoardTitle>SCORE</ScoreBoardTitle>
        <ScoreText>{score || 0}</ScoreText>
      </ScoreBoard>
    </GameHeader>
  );
}
