import { styled } from "@stitches/react";
import { theme } from "../../styles/theme";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const Title = styled("h6", {
  fontSize: 22,
  fontWeight: 600,
  letterSpacing: 1,
  textTransform: "uppercase",
  marginBottom: 40,
  color: theme.colors.textPrimary,
});

export const NotChoiceSelected = styled("span", {
  width: 160,
  height: 160,
  borderRadius: "50%",
  backgroundColor: "rgba(3,3,3, 0.1)",
  boxShadow: "0 0 2px 5px rgba(3,3,3, 0.1)",
  zIndex: 1,
});

export const WinnerEffectConatiner = styled("span", {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 200,
  height: 200,
});

export const WinnerEffect = styled("span", {
  position: "absolute",
  width: "inherit",
  height: "inherit",
  display: "flex",
  background: "transparent",
  borderRadius: "50%",
  zIndex: 0,

  variants: {
    scale: {
      1: {
        transform: "scale(1.5)",
        background: "rgba(255,255,255,0.05)",
      },
      2: {
        transform: "scale(2.1)",
        background: "rgba(255,255,255,0.04)",
      },
      3: {
        transform: "scale(2.7)",
        background: "rgba(255,255,255,0.01)",
      },
    },
  },
});
