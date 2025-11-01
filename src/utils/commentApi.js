import axios from "axios"

const baseURL = "http://localhost:5000/api/comment"

const commentApi = axios.create({baseURL})

commentApi.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token")

    if (!token) {
    console.warn("No token found. Please login again.");
    return config;
  }

  if (!config.headers) {
    config.headers = {};
  }

  config.headers.authorization = `Bearer ${token}`;

  return config;
})

export default  commentApi;