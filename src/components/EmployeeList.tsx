/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { rows } from "../assets/mock";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import EmployeeForm from "./EmployeeForm";

function EmployeeList() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false); //context
  const [selectedEmployee, setSelectedEmployee] = useState(0); //context

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
    setDialogIsOpen(true);
  };

  const handleRowClick = (params: { id: any }) => {
    setSelectedEmployee(params.id);
    setDialogIsOpen(true);
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

      <EmployeeForm
        isOpen={dialogIsOpen}
        setDialogIsOpen={setDialogIsOpen}
        id={selectedEmployee}
      />
    </>
  );
}

export default EmployeeList;

//FIX ANY
//Cursor pointer on every row
