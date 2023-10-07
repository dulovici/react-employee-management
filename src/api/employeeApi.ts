import client from "./client";

export const getEmployees = async (page: number, limit: number) => {
  const result = await client.get(`/employees?page=${page}&limit=${limit}`);
  return result.data;
};
