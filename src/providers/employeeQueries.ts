/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "react-query";
import { getEmployees } from "../api/employeeApi";

const queryKeys = {
  employes: (page: number, limit: number) => ["employes", page, limit] as const,
};

export const useGetEmployes = (page: number, limit: number) => {
  const {
    isLoading: employesLoading,
    error: employesError,
    data: employesData,
  } = useQuery<boolean, Error, any[]>(queryKeys.employes(page, limit), () =>
    getEmployees(page, limit)
  );
  return {
    employesLoading,
    employesError,
    employesData,
  };
};
