import axios from 'axios'

const BACKEND_SERVER = "localhost:8000";

const addCustomHeader = headers => ({ ...headers });

const appAxios = axios.create({
    baseURL: `http://${BACKEND_SERVER}`,
    timeout: 15000,
    headers: {
        "Accept": 'application/json',
        "Content-Type": 'application/json'
    }
});

// export const convertParamsToFormData = params => {
//     const formData = new FormData();

//     Object.keys(params).forEach(key => {
//         formData.append(key, params[key]);
//     });

//     return formData;
// };

export const callApi = (method, url, data = {}, headers = {}) => {
    console.log("the url is: ", url)

    return appAxios({
        method,
        url,
        headers: addCustomHeader(headers),
        ...(method.toLowerCase() === 'get' ? { params: data } : { data })
    });
}
