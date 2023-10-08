/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery } from "react-query";
import {
  createEmployee,
  deleteEmployee,
  getDeletedEmployees,
  getEmployee,
  getEmployees,
  updateEmployee,
} from "../api/employeeApi";
import { Employee } from "../types/types";

export const employeeKeys = {
  employes: (page?: number, limit?: number) => {
    if (page && limit) return ["employes", page, limit];
    return ["employes"];
  },

  employe: (employeeId: string) => ["employe", employeeId],

  deletedEmployes: ["deletedEmployes"],

  cleanup: ["deletedEmployes"],
};

export const useGetEmployes = (page: number, limit: number) => {
  const {
    isLoading: employesLoading,
    error: employesError,
    data,
  } = useQuery<boolean, Error, any>(employeeKeys.employes(page, limit), () =>
    getEmployees(page, limit)
  );

  const employesNumber = data?.count;
  const employesData = data?.employees?.map((el: Employee) => ({
    ...el,
    id: el._id,
  }));
  //I remapped data becouse DataGrid component require "id" field, and on response im getting "_id"

  return {
    employesLoading,
    employesError,
    employesData,
    employesNumber,
  };
};

export const useDeletedEmployes = (page: number, limit: number) => {
  const {
    isLoading: deletedEmployesLoading,
    error: deletedEmployesError,
    data,
  } = useQuery<boolean, Error, any>(employeeKeys.deletedEmployes, () =>
    getDeletedEmployees(page, limit)
  );

  const deletedEmployesNumber = data?.count;
  const deletedEmployesData = data?.employees?.map((el: Employee) => ({
    ...el,
    id: el._id,
  }));
  //I remapped data becouse DataGrid component require "id" field, and on response im getting "_id"

  return {
    deletedEmployesLoading,
    deletedEmployesError,
    deletedEmployesData,
    deletedEmployesNumber,
  };
};

export const useGetEmploye = (employeeId: string) => {
  const {
    isLoading: employeLoading,
    error: employeError,
    data: employeData,
    isFetched,
  } = useQuery<boolean, Error, any>(
    employeeKeys.employe(employeeId),
    () => getEmployee(employeeId),
    { enabled: !!employeeId }
  );

  return {
    employeLoading,
    employeError,
    employeData,
    isFetched,
  };
};

export const useCreateEmploye = () =>
  useMutation((employee: Employee) => createEmployee(employee), {
    onSuccess: () => {
      //call SnackBar
    },
  });

export const useUpdateEmployee = () =>
  useMutation((employee: Employee) => updateEmployee(employee), {
    onSuccess: () => {
      console.log("successCallback();");
    },
  });

export const useDeleteEmploye = () =>
  useMutation((employeeId: string) => deleteEmployee(employeeId), {
    onSuccess: () => {
      console.log("successCallback();");
    },
  });

//Resi tostere
