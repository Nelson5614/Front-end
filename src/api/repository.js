import api from './api'

export default{
    createSession(){
        return api.get('http://mlexv2.com/sanctum/csrf-cookie');
    },

    login(params){
        return api.post('http://mlexv2.com/api/login', params);
    },

    logout(){
        return api.delete('http://mlexv2.com/logout');
    },

    getData(){
        return api.get('http://mlexv2.com/api/test');
        
    },
};