import { styled } from "@stitches/react";
import { GlobalStyles } from "./styles/global.style";
import { theme } from "./styles/theme";

const Page = styled("main", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100vw",
  height: "100vh",
  background: theme.colors.background,
});

const Text = styled("h1", {
  color: theme.colors.textLose,
});

export function App() {
  GlobalStyles();
  return (
    <Page className={theme}>
      <Text>Hello world!</Text>
    </Page>
  );
}
