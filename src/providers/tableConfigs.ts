import { GridColDef } from "@mui/x-data-grid";

export const employeeTableConfig: GridColDef[] = [
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
