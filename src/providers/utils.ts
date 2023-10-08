import { format, parseISO } from "date-fns";

export const formatDate = (dateString: string) => {
  const dateValue = parseISO(dateString);
  return format(dateValue, "dd-MM-yy HH:mm");
};
