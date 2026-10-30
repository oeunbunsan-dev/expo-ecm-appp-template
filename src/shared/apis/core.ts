
import axios from "axios";
import { ENV } from "../configs";

export const apiInstance = axios.create({
      baseURL: ENV.apiUrl,
      timeout: 10000,
      headers: {
            "Content-Type": "application/json",
      }
});


// Attach token automatically
apiInstance.interceptors.request.use(
      (config) => {
            // const token = tokenStorage.getToken();
            const token = '';

            if (token) {
                  config.headers = config.headers ?? {};
                  config.headers.Authorization = `Bearer ${token}`;
            }

            return config;
      },
      (error) => Promise.reject(error),
);

apiInstance.interceptors.response.use(
      (response) => {
            // For successful responses (status 200-299)
            // You can access response.data.message here
            return response;
      },
      (error) => {
            // For error responses (status 400-599)
            if (error.response) {
                  // The request was made and the server responded with an error status
                  const status = error.response.status;

                  // You can access error.message here
                  // console.log("Error message:", data.message);

                  // Handle 401 Unauthorized
                  if (
                        status === 401 &&
                        typeof window !== "undefined") {
                        // TODO : You can call refresh token api here
                  }

                  // Return the error response data so you can access it in your catch block
                  return Promise.reject(error.response.data);
            } else if (error.request) {
                  // The request was made but no response received
                  // console.log("No response received:", error.request);
                  return Promise.reject({ message: "No response from server" });
            } else {
                  // Something happened in setting up the request
                  // console.log("Error:", error.message);
                  return Promise.reject({ message: error.message });
            }
      },
);
