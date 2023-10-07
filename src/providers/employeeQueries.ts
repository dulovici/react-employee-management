/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery } from "react-query";
import {
  createEmployee,
  deleteEmployee,
  getDeletedEmployees,
  getEmployees,
} from "../api/employeeApi";
import { Employee } from "../types/types";

export const employeeKeys = {
  employes: (page?: number, limit?: number) =>
    ["employes", page, limit] as const,
  deletedEmployes: ["deletedEmployes"] as const,
};

export const useGetEmployes = (page: number, limit: number) => {
  const pageToUse = page ? page : 1;
  const {
    isLoading: employesLoading,
    error: employesError,
    data,
  } = useQuery<boolean, Error, any>(
    employeeKeys.employes(pageToUse, limit),
    () => getEmployees(pageToUse, limit)
  );

  const employesData = data?.employees.map((el: Employee) => ({
    ...el,
    id: el._id,
  }));

  return {
    employesLoading,
    employesError,
    employesData,
  };
};

export const useDeletedEmployes = () => {
  const {
    isLoading: deletedEmployesLoading,
    error: deletedEmployesError,
    data: deletedEmployesData,
  } = useQuery<boolean, Error, any[]>(employeeKeys.deletedEmployes, () =>
    getDeletedEmployees()
  );
  return {
    deletedEmployesLoading,
    deletedEmployesError,
    deletedEmployesData,
  };
};

export const useCreateEmploye = () =>
  useMutation((employee: Employee) => createEmployee(employee), {
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