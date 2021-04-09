import axios from 'axios'


const BACKEND_SERVER = "localhost:8002";

const appAxios = axios.create({
    baseURL:`/${BACKEND_SERVER}`, 
    timeout: 15000
});

export const callApi = (method, url, data = {}, headers = {}) => {
    return appAxios({
        method,
        url,
        headers,
        ...(method.toLowerCase() === 'get' ? { params: data } : { data }),
    });
};