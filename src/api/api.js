// apiConfig.js
import axios from "axios";

const API_URL = "http://localhost:5000/api/";

const apiInstance = axios.create({
  baseURL: API_URL,
  // Add headers or authentication tokens here
});

export default apiInstance;
