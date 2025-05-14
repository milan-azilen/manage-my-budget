import moment from "moment";
export const formateDate = (date: string | Date) => {
  if (typeof date === "number") {
    return moment(date * 1000).format("DD/MM/YYYY");
  }
  return moment(date).format("DD/MM/YYYY");
};
