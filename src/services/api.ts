import axios from "axios";

// Set up base server URL
export const SERVER_URL = process.env.SERVER_URL;
export const api = axios.create({
  baseURL: SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
