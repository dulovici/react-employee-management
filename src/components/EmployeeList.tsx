/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { rows } from "../assets/mock";
import { Box, Button } from "@mui/material";

function EmployeeList() {
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

  const handleRowClick = (params: { id: any }) => {
    console.log("Row ID clicked:", params.id);
  };

  console.log(columns);
  return (
    <Box sx={{ height: 400, width: "50%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
          marginBottom: "0.5rem",
        }}
      >
        <Button variant="contained">New Employee</Button>
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
  );
}

export default EmployeeList;

//FIX ANY
//Cursor pointer on every row
