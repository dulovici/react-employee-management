import { Alert, Box, CircularProgress, Pagination } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { deletedEmployesTableConfig } from "../providers/tableConfigs";
import { useDeletedEmployes } from "../providers/employeeQueries";
import { useState } from "react";

const DeletedEmployeeList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const PAGE_SIZE = 5;

  const {
    deletedEmployesData,
    deletedEmployesLoading,
    deletedEmployesError,
    deletedEmployesNumber,
  } = useDeletedEmployes(currentPage, PAGE_SIZE);

  const pageNumber = Math.ceil(deletedEmployesNumber / PAGE_SIZE);

  if (deletedEmployesError) {
    return <Alert severity="error">Something went wrong</Alert>;
  }
  if (deletedEmployesLoading) {
    return <CircularProgress />;
  }

  return (
    <Box sx={{ height: 400, width: "50%" }} data-testid="employee-list">
      <DataGrid
        rows={deletedEmployesData}
        columns={deletedEmployesTableConfig}
        hideFooter={true}
      />

      <Pagination
        count={pageNumber}
        page={currentPage}
        onChange={(_, newPage) => {
          setCurrentPage(newPage);
        }}
      />
    </Box>
  );
};

export default DeletedEmployeeList;
