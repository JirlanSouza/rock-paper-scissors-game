import { styled } from "@stitches/react";
import { theme } from "../../styles/theme";

export const GameHeader = styled("header", {
  width: "720px",
  height: "160px",
  border: `${theme.colors.headerOutline} 3px solid`,
  borderRadius: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "transparent",
});

export const Logo = styled("img", {
  width: "162px",
  height: "99px",
  marginLeft: "30px",
});

export const ScoreBoard = styled("div", {
  width: "150px",
  height: "120px",
  marginRight: "30px",
  borderRadius: "20px",
  backgroundColor: theme.colors.textPrimary,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const ScoreBoardTitle = styled("span", {
  color: theme.colors.textScore,
  marginTop: "16px",
  fontSize: "16px",
});

export const ScoreText = styled("span", {
  color: theme.colors.textDark,
  fontSize: "72px",
  lineHeight: "64px",
});
