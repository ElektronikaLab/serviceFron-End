import axios from "axios";
import { getEnvVariables } from "./getEnvVariables";


const {VITE_API_URL}  = getEnvVariables();

const electronicaApi = axios.create({
    baseURL: VITE_API_URL
})

export default electronicaApi;