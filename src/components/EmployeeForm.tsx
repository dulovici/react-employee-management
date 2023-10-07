import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { FC } from "react";
import { useModalContext } from "../providers/ModalContext";
import { employeeForm } from "../providers/forms";
import {
  employeeKeys,
  useCreateEmploye,
  useDeleteEmploye,
} from "../providers/employeeQueries";
import { Employee } from "../types/types";
import { useQueryClient } from "react-query";

interface IEmployeeForm {
  id?: string;
}

const EmployeeForm: FC<IEmployeeForm> = ({ id = "" }) => {
  const { setIsOpen } = useModalContext();
  const queryClient = useQueryClient();
  const createEmploye = useCreateEmploye();
  const deleteEmployee = useDeleteEmploye();

  const closeForm = () => {
    formik.resetForm();
    queryClient.invalidateQueries(employeeKeys.employes());
    setIsOpen(false);
  };

  const formik = useFormik({
    initialValues: employeeForm.initialValues,
    validationSchema: employeeForm.validation,
    onSubmit: (values: Employee) => {
      createEmploye.mutate(values);
      closeForm();
    },
  });

  const deleteEmployeeHandler = (id: string) => {
    deleteEmployee.mutate(id);
    closeForm();
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            display: "flex",
            gap: 1,
          }}
        >
          <Box sx={{ width: "50%" }}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              sx={{ margin: "6px 0" }}
            />

            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              sx={{ margin: "6px 0" }}
            />

            <TextField
              fullWidth
              id="phoneNumber"
              name="phoneNumber"
              label="Phone Number"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
              }
              helperText={
                formik.touched.phoneNumber && formik.errors.phoneNumber
              }
              sx={{ margin: "6px 0" }}
            />

            <TextField
              fullWidth
              id="homeAddress.city"
              name="homeAddress.city"
              label="City"
              value={formik.values.homeAddress.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.homeAddress?.city &&
                Boolean(formik.errors.homeAddress?.city)
              }
              helperText={
                formik.touched.homeAddress?.city &&
                formik.errors.homeAddress?.city
              }
              sx={{ margin: "6px 0" }}
            />

            <TextField
              fullWidth
              id="homeAddress.ZIPCode"
              name="homeAddress.ZIPCode"
              label="ZIP Code"
              value={formik.values.homeAddress.ZIPCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.homeAddress?.ZIPCode &&
                Boolean(formik.errors.homeAddress?.ZIPCode)
              }
              helperText={
                formik.touched.homeAddress?.ZIPCode &&
                formik.errors.homeAddress?.ZIPCode
              }
              sx={{ margin: "6px 0" }}
            />
          </Box>

          <Box sx={{ width: "50%" }}>
            <TextField
              fullWidth
              id="homeAddress.addressLine1"
              name="homeAddress.addressLine1"
              label="Address Line 1"
              value={formik.values.homeAddress.addressLine1}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.homeAddress?.addressLine1 &&
                Boolean(formik.errors.homeAddress?.addressLine1)
              }
              helperText={
                formik.touched.homeAddress?.addressLine1 &&
                formik.errors.homeAddress?.addressLine1
              }
              sx={{ margin: "6px 0" }}
            />

            <TextField
              fullWidth
              id="homeAddress.addressLine2"
              name="homeAddress.addressLine2"
              label="Address Line 2"
              value={formik.values.homeAddress.addressLine2}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.homeAddress?.addressLine2 &&
                Boolean(formik.errors.homeAddress?.addressLine2)
              }
              helperText={
                formik.touched.homeAddress?.addressLine2 &&
                formik.errors.homeAddress?.addressLine2
              }
              sx={{ margin: "6px 0" }}
            />

            <TextField
              fullWidth
              type="date"
              id="dateOfEmployment"
              name="dateOfEmployment"
              label="Date of Employment"
              value={formik.values.dateOfEmployment}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.dateOfEmployment &&
                Boolean(formik.errors.dateOfEmployment)
              }
              helperText={
                formik.touched.dateOfEmployment &&
                formik.errors.dateOfEmployment
              }
              sx={{ margin: "6px 0" }}
            />

            <TextField
              fullWidth
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              label="Date of Birth"
              value={formik.values.dateOfBirth}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.dateOfBirth && Boolean(formik.errors.dateOfBirth)
              }
              helperText={
                formik.touched.dateOfBirth && formik.errors.dateOfBirth
              }
              sx={{ margin: "6px 0" }}
            />
          </Box>
        </Box>

        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
        >
          <Button type="submit">Submit</Button>
          {id ? (
            <Button onClick={() => deleteEmployeeHandler(id)}>Delete</Button>
          ) : null}
          <Button onClick={closeForm}>Cancel</Button>
        </Box>
      </form>
    </div>
  );
};

export default EmployeeForm;

//Sredi Date polja
