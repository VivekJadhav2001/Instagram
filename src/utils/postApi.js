import axios from "axios";

const baseURL = "http://localhost:5000/api/post"

const postApi = axios.create({ baseURL })

postApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (!token) {
    console.warn("No token found. Please login again.");
    return config;
  }

  if (!config.headers) {
    config.headers = {};
  }

  config.headers.authorization = `Bearer ${token}`;

  return config;
});


// postApi.interceptors.request.use(
//     (config) => {
//         console.log("postApi Before config request", config);

//         const token = localStorage.getItem("token");
//         if (token) {
//             config.headers = {
//                 ...config.headers,
//                 Authorization: `Bearer ${token}`,
//             };
//         }

//         console.log("postApi after config request", config);
//         return config;
//     },
//     (error) => Promise.reject(error)
// );


export default postApi