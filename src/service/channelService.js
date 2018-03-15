import axios from './axios.js'
import qs from 'qs'

export const channelService = {
    api: {},
    // 渠道管理
    getChannels: function (params) {
        return axios.get('/admin/channel'+ this.getParams(params));
    },
    addChannel: function (params) {
        return axios.post('/admin/channel', qs.stringify(params));
    },
    editChannel: function (params) {
        return axios.put('/admin/channel', qs.stringify(params));
    },
    getChannel: function (params) {
        return axios.get('/admin/channel/' + params);
    },
    deleteChannel: function (params) {
        return axios.delete('/admin/channel', qs.stringify(params));
    },
    // 参数拼接
    getParams: function (param) {
        let url = '';
        for(let key in param){
            if(param[key] !== null){
                url ? url += '&'+ key + '=' + param[key] : url += key + '=' + param[key];
            }
        }
        return url ? '?' + url : '';
    }
}
export  default {channelService}
