/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "../assets/mock";
import EmployeeForm from "./EmployeeForm";
import { useModalContext } from "../providers/ModalContext";
import { employeeTableConfig } from "../providers/tableConfigs";

function EmployeeList() {
  const { openModal } = useModalContext();

  const columns = employeeTableConfig;

  const handleNewEmployee = () => {
    openModal(<EmployeeForm />, { title: "New" });
  };

  const handleRowClick = (params: { id: any }) => {
    openModal(<EmployeeForm id={params.id} />, { title: "Edit" });
  };

  return (
    <>
      <Box sx={{ height: 400, width: "50%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
            marginBottom: "0.5rem",
          }}
        >
          <Button variant="contained" onClick={handleNewEmployee}>
            New Employee
          </Button>
        </Box>
        <DataGrid
          rows={rows}
          columns={columns}
          onRowClick={handleRowClick}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </Box>
    </>
  );
}

export default EmployeeList;

//FIX ANY
//Cursor pointer on every row
