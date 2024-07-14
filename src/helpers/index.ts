import { AppActionResult } from "./../dto/AppActionResult";

export const formatDate = (date: string): string => {
  const regex = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!date.match(regex)) {
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
      throw new Error("Invalid date format");
    }
    const day = `0${parsedDate.getDate()}`.slice(-2);
    const month = `0${parsedDate.getMonth() + 1}`.slice(-2);
    const year = parsedDate.getFullYear();
    return `${day}/${month}/${year}`;
  }
  return date;
};

export const buildAppActionResultError = (
  message: string,
  data: AppActionResult
) => {
  data.setSuccess(false);
  data.setMessage(message);
  return data;
};
