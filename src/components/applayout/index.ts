import { styled } from "@stitches/react";
import { theme } from "../../styles/theme";

export const AppLayoutContainer = styled("main", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 100,
  width: "100vw",
  height: "100vh",
  paddingTop: 96,
  background: theme.colors.background,
});

export const AppContentContainerContainer = styled("div", {
  display: "flex",
  columnGap: 48,
});
