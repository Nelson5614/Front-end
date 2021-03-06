import axios from "axios";

let instance = axios.create({
    withCredentials: true
});


instance.interceptors.request.use(request=>{
    request.headers.common['Accept'] = 'application/json';
    request.headers.common['Content-Type'] = 'application/json';
    return request;
});

instance.interceptors.response.use(
    response => {return response;},
    errors => {return Promise.reject(errors);}

);
export default instance;