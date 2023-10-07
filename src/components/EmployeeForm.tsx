import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { FC } from "react";

interface IEmployeeForm {
  isOpen: boolean;
  setDialogIsOpen: (status: boolean) => void;
  id?: number;
}

const EmployeeForm: FC<IEmployeeForm> = ({ isOpen, setDialogIsOpen, id }) => {
  console.log(id);

  const onClose = () => {
    console.log("closed");
    setDialogIsOpen(false);
  };
  const onSubbmit = () => {
    console.log("subbmited");
    setDialogIsOpen(false);
  };

  return (
    <div>
      <Dialog open={isOpen} onClose={onClose}>
        <DialogTitle>
          {id ? "Edit employee details" : "Create new employee"}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onSubbmit}>Subbmit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EmployeeForm;
