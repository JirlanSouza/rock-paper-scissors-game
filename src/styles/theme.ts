import { createTheme } from "@stitches/react";

export const theme = createTheme({
  colors: {
    textPrimary: "#FAFAFF",
    textDark: "hsl(229, 25%, 31%)",
    textScore: "hsl(229, 64%, 46%)",
    textLose: "#DA1F62",
    headerOutline: "hsl(217, 16%, 45%)",
    background:
      "radial-gradient(farthest-corner at 50% 0%, hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
    scissors: "linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))",
    paper: "linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))",
    rock: "linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
    cyan: "linear-gradient(hsl(189, 59%, 53%), hsl(189, 58%, 57%))",
  },
});
