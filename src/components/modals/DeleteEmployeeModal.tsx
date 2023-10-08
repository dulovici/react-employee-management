import { Box, Button } from "@mui/material";
import { FC, useEffect } from "react";
import { useModalContext } from "../../providers/ModalContext";
import {
  employeeKeys,
  useDeleteEmploye,
} from "../../providers/employeeQueries";
import { useQueryClient } from "react-query";

interface IDeleteEmployeeModal {
  id: string;
}

const DeleteEmployeeModal: FC<IDeleteEmployeeModal> = ({ id }) => {
  const { setIsOpen } = useModalContext();
  const deleteEmployee = useDeleteEmploye();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (deleteEmployee.isSuccess) {
      queryClient.invalidateQueries(employeeKeys.employes());
      setIsOpen(false);
    }
  }, [deleteEmployee.isSuccess]);

  return (
    <div>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
      >
        <Button onClick={() => deleteEmployee.mutate(id)}>Delete</Button>
        <Button onClick={() => setIsOpen(false)}>Cancel</Button>
      </Box>
    </div>
  );
};

export default DeleteEmployeeModal;
