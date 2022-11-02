import { Portal, Overlay, Title, Trigger, Content, Close } from "@radix-ui/react-dialog";
import { keyframes, styled } from "@stitches/react";
import { theme } from "../../styles/theme";

export const DialogPortal = styled(Portal, {});

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

export const DialogOverlay = styled(Overlay, {
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(3,3,3, 0.2)",
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});

export const DialogTitle = styled(Title, {
  flex: 1,
  textAlign: "start",
  fontSize: "32px",
  fontWeight: "700",
  color: theme.colors.textDark,
  textTransform: "uppercase",
  marginBottom: "32px",
});

export const OpenDialogButton = styled(Trigger, {
  position: "absolute",
  bottom: 28,
  right: 28,
  padding: "0 16px",
  minWidth: 100,
  height: 36,
  background: "transparent",
  textAlign: "center",
  color: theme.colors.textPrimary,
  border: `1px solid ${theme.colors.textPrimary}`,
  borderRadius: "8px",
  cursor: "pointer",
  transition: "filter easy 0.2s",

  "&:hover": {
    filter: "brightness(0.8)",
  },
});

export const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

export const DialogContent = styled(Content, {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "white",
  borderRadius: 16,
  boxShadow: "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "450px",
  maxHeight: "85vh",
  padding: 32,
  fontFamily: "sans-serif",
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  "&:focus": { outline: "none" },
});

export const CloseButton = styled(Close, {
  height: 36,
  width: 36,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  //border: "none",
  borderRadius: "50%",
  backgroundColor: "transparent",
  color: theme.colors.headerOutline,
  position: "absolute",
  top: 12,
  right: 12,
  cursor: "pointer",
  transition: "filter easy 0.2s",

  border: `1px solid ${theme.colors.cyan}`,
  "&:hover": {
    filter: "brightness(0.8)",
  },
  "&:focus": { boxShadow: `0 0 0 2px ${theme.colors.headerOutline}` },

  "&svg": {
    width: 32,
    height: 32,
  },
});
