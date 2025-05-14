import axios from "axios";
import { Alert } from "react-native";

export const axiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});

axiosInstance.interceptors.response.use(
  (data) => {
    return data?.data;
  },
  (error) => {
    Alert.alert(error?.message || "Something went wrong while getting data");
    return Promise.reject(error);
  }
);
