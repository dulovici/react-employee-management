import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { FC } from "react";
import * as yup from "yup";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  phoneNumber: yup.string().required("Phone Number is required"),
  homeAddress: yup.object({
    city: yup.string().required("City is required"),
    ZIPCode: yup.string().required("ZIP Code is required"),
    addressLine1: yup.string().required("Address Line 1 is required"),
    addressLine2: yup.string(),
  }),
  dateOfEmployment: yup.string().required("Date of Employment is required"),
  dateOfBirth: yup.string().required("Date of Birth is required"),
});

interface IEmployeeForm {
  isOpen: boolean;
  setDialogIsOpen: (status: boolean) => void;
  id?: number;
}

const EmployeeForm: FC<IEmployeeForm> = ({ isOpen, setDialogIsOpen, id }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      homeAddress: {
        city: "",
        ZIPCode: "",
        addressLine1: "",
        addressLine2: "",
      },
      dateOfEmployment: "",
      dateOfBirth: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      setDialogIsOpen(false);
    },
  });

  const handleClose = () => {
    formik.resetForm();
    setDialogIsOpen(false);
  };

  return (
    <div>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>
          {id ? "Edit employee details" : "Create new employee"}
        </DialogTitle>

        <DialogContent>
          <form onSubmit={formik.handleSubmit}>
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

            <Button type="submit">Submit</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EmployeeForm;

//Sredi Date polja
//Exportuj semu van komponente
