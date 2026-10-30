
import axios from "axios";
import { ENV } from "../configs";

export const apiInstance = axios.create({
      baseURL : ENV.apiUrl,
      timeout : 10000,
      headers : {
            "Content-Type" : "application/json",
      }
})
