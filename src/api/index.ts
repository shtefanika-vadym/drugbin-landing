import axios from "axios";

const API_URL = process.env.REACT_APP_DRUGBIN_API_BASE_URL;

export const api = axios.create({ baseURL: API_URL });
