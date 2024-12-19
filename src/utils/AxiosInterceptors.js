import axios from "axios";

const AxiosInterceptors = axios.create({
    baseURL: import.meta.env.VITE_APIURL,
});

export default AxiosInterceptors;