import axios from "axios";

let config = {
    baseURL: 'http://localhost:9000', // 设置统一的请求前缀
    timeout: 10000, // 设置统一的超时时长
}
const instance = axios.create(config);
instance.interceptors.request.use(function (config){
    let token = localStorage.getItem('token');
    let tokenHead = localStorage.getItem('tokenHead')
    config.headers[tokenHead] = token;
    return config;
})
// instance.interceptors.response.use(response=>{
//
//     return response;
// })
export {instance}