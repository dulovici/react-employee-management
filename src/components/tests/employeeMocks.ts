import * as employeeApi from "../../providers/employeeQueries";
import { Employee } from "../../types/types";

const useGetEmployeesResponse = [
  {
    _id: "6523cf753309d19af602e5e0",
    id: "6523cf753309d19af602e5e0",
    dateOfBirth: "2023-10-03",
    dateOfEmployment: "2023-10-03",
    homeAddress: {
      addressLine2: "",
      addressLine1: "Negoseva",
      ZIPCode: "11404",
      city: "Zemun",
    },
    phoneNumber: "+381611740993",
    email: "zoki@yahoo.com",
    name: "ZokaA",
  },
  {
    _id: "6523cfa33309d19af602e5e9",
    id: "6523cf753309d19af602e5e0",
    dateOfBirth: "2023-10-04",
    dateOfEmployment: "2023-10-03",
    homeAddress: {
      addressLine2: "",
      addressLine1: "Negoseva",
      ZIPCode: "12404",
      city: "Zemun",
    },
    phoneNumber: "+381611740453",
    email: "lady@gmail.com",
    name: "Ladiz",
  },
] as Employee[];

const useGetDeletedEmployeesResponse = [
  {
    _id: "6523d2393309d19af602e69c",
    id: "6523d2393309d19af602e69c",
    deletedAt: "2023-10-09T10:46:04.287Z",
    isDeleted: true,
    dateOfBirth: "2023-10-06",
    dateOfEmployment: "2023-10-05",
    homeAddress: {
      addressLine2: "",
      addressLine1: "Marsala Birjuzova",
      ZIPCode: "11404",
      city: "Roterdam",
      _id: "6523d2393309d19af602e69d",
    },
    phoneNumber: "+381611740453",
    email: "igorx24@yahoo.com",
    name: "Mile",
    __v: 0,
  },
];

const useGetEmployeesMock = {
  employesLoading: false,
  employesError: null,
  employesData: useGetEmployeesResponse,
  employesNumber: jest.fn(),
};

const useGetDeletedEmployeesMock = {
  deletedEmployesLoading: false,
  deletedEmployesError: null,
  deletedEmployesData: useGetDeletedEmployeesResponse,
  deletedEmployesNumber: jest.fn(),
};

export const spyUseGetEmployes = () =>
  jest.spyOn(employeeApi, "useGetEmployes").mockImplementation(() => {
    return {
      ...useGetEmployeesMock,
    };
  });

export const spyUseDeletedEmployes = () =>
  jest.spyOn(employeeApi, "useDeletedEmployes").mockImplementation(() => {
    return {
      ...useGetDeletedEmployeesMock,
    };
  });
