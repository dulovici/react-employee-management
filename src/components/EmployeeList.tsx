/* eslint-disable @typescript-eslint/no-explicit-any */
import { Alert, Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EmployeeForm from "./EmployeeForm";
import { useModalContext } from "../providers/ModalContext";
import { employeeTableConfig } from "../providers/tableConfigs";
import { useState } from "react";
import { useGetEmployes } from "../providers/employeeQueries";
import Pagination from "@mui/material/Pagination";
import CircularProgress from "@mui/material/CircularProgress";

function EmployeeList() {
  const [currentPage, setCurrentPage] = useState(1);
  const PAGE_SIZE = 5;

  const { openModal } = useModalContext();
  const { employesData, employesLoading, employesError, employesNumber } =
    useGetEmployes(currentPage, PAGE_SIZE);

  const pageNumber = Math.ceil(employesNumber / PAGE_SIZE);

  const handleNewEmployee = () => {
    openModal(<EmployeeForm />, { title: "Create new employee" });
  };

  const handleRowClick = (params: { id: any }) => {
    openModal(<EmployeeForm id={params.id} />, { title: "Edit employee info" });
  };

  if (employesError) {
    return <Alert severity="error">Something went wrong</Alert>;
  }
  if (employesLoading) {
    return <CircularProgress />;
  }

  return (
    <>
      <Box
        sx={{
          height: 400,
          width: "50%",
        }}
      >
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
          rows={employesData}
          columns={employeeTableConfig}
          onRowClick={handleRowClick}
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
    </>
  );
}

export default EmployeeList;

//FIX ANY
//Cursor pointer on every row
