/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "../assets/mock";
import EmployeeForm from "./EmployeeForm";
import { useModalContext } from "../providers/ModalContext";
import { employeeTableConfig } from "../providers/tableConfigs";
import { useState } from "react";
import { useGetEmployes } from "../providers/employeeQueries";

function EmployeeList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const { openModal } = useModalContext();
  const { employesData, employesLoading, employesError } = useGetEmployes(
    currentPage,
    pageSize
  );

  console.log(employesData);
  console.log(employesLoading);
  console.log(employesError);

  const columns = employeeTableConfig;

  const handleNewEmployee = () => {
    openModal(<EmployeeForm />, { title: "Create new employee" });
  };

  const handleRowClick = (params: { id: any }) => {
    openModal(<EmployeeForm id={params.id} />, { title: "Edit employee info" });
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
          pagination
          initialState={{
            pagination: {
              paginationModel: { page: currentPage + 1, pageSize: pageSize },
            },
          }}
          pageSizeOptions={[5, 10]}
          onStateChange={(e) => {
            setPageSize(e.pagination.paginationModel.pageSize);
            setCurrentPage(e.pagination.paginationModel.page + 1);
          }}
        />
      </Box>
    </>
  );
}

export default EmployeeList;

//FIX ANY
//Cursor pointer on every row
