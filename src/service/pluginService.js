import axios from './axios.js'
import qs from 'qs'

export const pluginService = {
    api: {},
    uploadFileBase64: function (params) {
       return axios.post('/files/base64', qs.stringify(params));
    },
    getParams: function (param) {
        let url = '';
        for(let key in param){
            if(param[key]!== null){
                url ? url += '&' + key + '=' + param[key] : url += key + '=' + param[key];
            }
        }
        return url? '?' + url : '';
    }
}
export default {pluginService}