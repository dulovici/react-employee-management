/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { employeeTableConfig } from "../providers/tableConfigs";
import { useDeletedEmployes } from "../providers/employeeQueries";

const DeletedEmployeeList = () => {
  const columns = employeeTableConfig;
  const {
    deletedEmployesData = [],
    deletedEmployesLoading,
    deletedEmployesError,
  } = useDeletedEmployes();

  if (deletedEmployesError) {
    return <div>Errror</div>;
  }
  if (deletedEmployesLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ height: 400, width: "50%" }}>
      <DataGrid
        rows={deletedEmployesData}
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
