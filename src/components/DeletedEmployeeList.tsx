/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { rows } from "../assets/mock";

const DeletedEmployeeList = () => {
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

  console.log(columns);
  return (
    <Box sx={{ height: 400, width: "50%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
          marginTop: "0.5rem",
        }}
      >
        <Button variant="contained">Clear</Button>
      </Box>
    </Box>
  );
};

export default DeletedEmployeeList;

//FIX ANY
