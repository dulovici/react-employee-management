import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { employeeTableConfig } from "../providers/tableConfigs";
import { useDeletedEmployes } from "../providers/employeeQueries";

const DeletedEmployeeList = () => {
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
        columns={employeeTableConfig}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </Box>
  );
};

export default DeletedEmployeeList;

//umesto starting date ubaci deletet at kolonu
