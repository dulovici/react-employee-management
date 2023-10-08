/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery } from "react-query";
import {
  createEmployee,
  deleteEmployee,
  getDeletedEmployees,
  getEmployee,
  getEmployees,
} from "../api/employeeApi";
import { Employee } from "../types/types";

export const employeeKeys = {
  employes: (page?: number, limit?: number) =>
    ["employes", page, limit] as const,

  employe: (employeeId: string) => ["employe", employeeId] as const,

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
    data,
  } = useQuery<boolean, Error, any>(employeeKeys.deletedEmployes, () =>
    getDeletedEmployees()
  );

  const deletedEmployesData = data?.employees.map((el: Employee) => ({
    ...el,
    id: el._id,
  }));

  return {
    deletedEmployesLoading,
    deletedEmployesError,
    deletedEmployesData,
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
      console.log("successCallback();");
    },
  });

export const useDeleteEmploye = () =>
  useMutation((employeeId: string) => deleteEmployee(employeeId), {
    onSuccess: () => {
      console.log("successCallback();");
    },
  });
