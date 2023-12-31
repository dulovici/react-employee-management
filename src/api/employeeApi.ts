import { Employee } from "../types/types";
import client from "./client";

export const getEmployees = async (page: number, limit: number) => {
  const result = await client.get(`/employees?page=${page}&limit=${limit}`);
  return result.data;
};

export const getDeletedEmployees = async (page: number, limit: number) => {
  const result = await client.get(
    `/employees/deleted?page=${page}&limit=${limit}`
  );
  return result.data;
};

export const getEmployee = async (employeeId: string) => {
  const result = await client.get(`/employees/id/${employeeId}`);
  return result.data;
};

export const createEmployee = async (employee: Employee) => {
  const result = await client.post(`/employees`, employee);
  return result.data;
};

export const updateEmployee = async (employee: Employee) => {
  const result = await client.patch(`/employees/${employee._id}`, employee);
  return result.data;
};

export const deleteEmployee = async (employeeId: string) => {
  const result = await client.delete(`/employees/soft-delete/${employeeId}`);
  return result.data;
};
