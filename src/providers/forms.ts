import * as yup from "yup";

export const employeeForm = {
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

  validation: yup.object({
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
  }),
};
