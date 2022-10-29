import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { keyframes, styled } from "@stitches/react";
import { theme } from "../styles/theme";

const DialogPortal = styled(Dialog.Portal, {});

const DialogTitle = styled(Dialog.Title, {
  flex: 1,
  textAlign: "start",
  fontSize: "32px",
  fontWeight: "700",
  color: theme.colors.textDark,
  textTransform: "uppercase",
  marginBottom: "32px",
});

const OpenDialogButton = styled(Dialog.Trigger, {
  position: "fixed",
  bottom: 32,
  right: 32,
  all: "unset",
  padding: " 0 16px",
  minWidth: "80px",
  height: "36px",
  background: "transparent",
  textAlign: "center",
  color: theme.colors.textPrimary,
  border: `2px solid ${theme.colors.textPrimary}`,
  borderRadius: "8px",
  cursor: "pointer",
});

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

const DialogContent = styled(Dialog.Content, {
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
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  "&:focus": { outline: "none" },
});

const IconButton = styled("button", {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: 36,
  width: 36,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.colors.headerOutline,
  position: "absolute",
  top: 12,
  right: 12,
  cursor: "pointer",

  "&:hover": { backgroundColor: theme.colors.headerOutline },
  "&:focus": { boxShadow: `0 0 0 2px ${theme.colors.headerOutline}` },

  "&svg": {
    width: 32,
    height: 32,
  },
});

interface RolesDialogProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const RolesImage = "src/assets/images/image-rules.svg";

export function RolesDialog({ open, setOpen }: RolesDialogProps) {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <OpenDialogButton>Roles</OpenDialogButton>

      <DialogPortal>
        <Dialog.Overlay />
        <DialogContent>
          <DialogTitle>Roles</DialogTitle>
          <img src={RolesImage} alt="roles" />
          <Dialog.Close asChild>
            <IconButton aria-label="close">
              <Cross2Icon />
            </IconButton>
          </Dialog.Close>
        </DialogContent>
      </DialogPortal>
    </Dialog.Root>
  );
}
