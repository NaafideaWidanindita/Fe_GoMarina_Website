import axios from "axios";

const AxiosInterceptors = axios.create({
    baseURL: import.meta.env.VITE_APIURL,
});

AxiosInterceptors.interceptors.request.use(
    (config) => {
        config.headers["Authorization"] = "Token atau mungkin JWT"
        return config;
    }, 
    (error) => Promise.reject(Error)
);

AxiosInterceptors.interceptors.response.use(
    (response) => {
        console.log("Ini adalah responnya", response)
        return response
    }, (error) => {
        if(error.response?.status === 401){
            console.log("Tidak punya izin")
        }
        return Promise.reject(error)
    }
)

export default AxiosInterceptors;