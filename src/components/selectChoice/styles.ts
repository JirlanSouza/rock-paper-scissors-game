import { styled } from "@stitches/react";

export const Step1Section = styled("div", {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: 100,
  zIndex: "1",
});

export const Triangle = styled("img", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "2",
});

export const Paper = styled("div", {
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

export const Rock = styled("div", {
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

export const Scissors = styled("div", {
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
