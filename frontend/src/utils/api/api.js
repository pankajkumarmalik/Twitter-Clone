import dotenv from "dotenv";

dotenv.config();

const BASE_URL = process.env.BACKEND_URL; // Use the backend URL from environment variable

export const getApiUrl = (endpoint) => {
  return `${BASE_URL}/${endpoint}`;
};
