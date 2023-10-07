/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { rows } from "../assets/mock";
import EmployeeForm from "./EmployeeForm";
import { useModalContext } from "../providers/ModalContext";

function EmployeeList() {
  const [selectedEmployee, setSelectedEmployee] = useState(0); //context

  const { openModal } = useModalContext();

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "dateOfEmployment",
      headerName: "Starting date",
      flex: 1,
    },
  ];

  const handleNewEmployee = () => {
    setSelectedEmployee(0);
    openModal(<EmployeeForm id={selectedEmployee} />, { title: "New" });
  };

  const handleRowClick = (params: { id: any }) => {
    setSelectedEmployee(params.id);
    openModal(<EmployeeForm id={selectedEmployee} />, { title: "Edit" });
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
