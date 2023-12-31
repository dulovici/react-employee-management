/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, CircularProgress, TextField } from "@mui/material";
import { useFormik } from "formik";
import { FC, useEffect } from "react";
import { useModalContext } from "../providers/ModalContext";
import { employeeForm } from "../providers/forms";
import {
  employeeKeys,
  useCreateEmploye,
  useGetEmploye,
  useUpdateEmployee,
} from "../providers/employeeQueries";
import { Employee } from "../types/types";
import { useQueryClient } from "react-query";
import DeleteEmployeeModal from "./modals/DeleteEmployeeModal";
import { useNotificationsContext } from "../providers/NotificationsContext";

interface IEmployeeForm {
  id?: string;
}

const EmployeeForm: FC<IEmployeeForm> = ({ id = "" }) => {
  const { closeModal, openModal } = useModalContext();
  const { employeData, employeLoading } = useGetEmploye(id);
  const { notify } = useNotificationsContext();

  const queryClient = useQueryClient();
  const createEmploye = useCreateEmploye();
  const updateEmployee = useUpdateEmployee();

  const closeForm = () => {
    formik.resetForm();
    queryClient.invalidateQueries(employeeKeys.employes());
    closeModal();
  };

  const deleteEmployeeHandler = (id: string) => {
    openModal(<DeleteEmployeeModal id={id} />, {
      title: "Are you sure you want to delete this employee?",
    });
  };

  const subbmitHandler = (id: string, values: Employee) => {
    id ? updateEmployee.mutate(values) : createEmploye.mutate(values);
  };

  const formik = useFormik({
    initialValues: employeeForm.initialValues,
    validationSchema: employeeForm.validation,
    onSubmit: (values: Employee) => {
      subbmitHandler(id, values);
    },
  });

  useEffect(() => {
    if (employeData) {
      formik.setValues(employeData);
    }
  }, [employeData]);

  useEffect(() => {
    if (createEmploye.isSuccess) {
      notify("New emloyee added");
      closeForm();
    }

    if (updateEmployee.isSuccess) {
      notify("Employee info updated");
      closeForm();
    }

    if (createEmploye.isError || updateEmployee.isError) {
      notify("Somthing went wrong");
    }
  }, [
    createEmploye.isSuccess,
    updateEmployee.isSuccess,
    createEmploye.isError,
    updateEmployee.isError,
  ]);

  if (employeLoading) {
    return <CircularProgress />;
  }

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
              value={formik.values?.name}
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
              value={formik.values?.email}
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
              value={formik.values?.phoneNumber}
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
              value={formik.values?.homeAddress.city}
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
              value={formik.values?.homeAddress.ZIPCode}
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
              value={formik.values?.homeAddress.addressLine1}
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
              value={formik.values?.homeAddress.addressLine2}
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
              value={formik.values?.dateOfEmployment}
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
              value={formik.values?.dateOfBirth}
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
