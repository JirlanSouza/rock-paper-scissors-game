import { DialogPortal, Root as DialogRoot } from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { CloseButton, DialogContent, DialogOverlay, DialogTitle, OpenDialogButton } from "./styles";

interface RolesDialogProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const RolesImage = "src/assets/images/image-rules.svg";

export function RolesDialog() {
  return (
    <DialogRoot>
      <OpenDialogButton>Rules</OpenDialogButton>

      <DialogPortal>
        <DialogOverlay />
        <DialogContent>
          <DialogTitle>Rules</DialogTitle>
          <img src={RolesImage} alt="roles" />
          <CloseButton aria-label="close">
            <Cross2Icon />
          </CloseButton>
        </DialogContent>
      </DialogPortal>
    </DialogRoot>
  );
}
