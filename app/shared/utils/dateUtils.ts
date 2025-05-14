import moment from "moment";
import { AppDateFormat } from "../constants/AppConstants";
export const formateDate = (date: string | Date) => {
  if (typeof date === "number") {
    return moment(date * 1000).format(AppDateFormat);
  }
  return moment(date).format(AppDateFormat);
};
