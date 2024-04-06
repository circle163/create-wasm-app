import axios from 'axios';
import {configure} from "axios-hooks";
import LRU from "lru-cache";
import {getStorageSync} from 'remax/wechat'
import mpAdapter from "axios-miniprogram-adapter"

export const client = axios.create({
// @ts-ignore
    adapter: mpAdapter,
    baseURL: "https://nilaicha.top/api/v1",
});

client.interceptors.request.use(
    config => {
        try {
            let value = getStorageSync('token');
            let {token} = value;
            if (value) {
                config.headers['login-key'] = token;
            }
        } catch (e) {
            // Do something when catch error
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

client.interceptors.response.use(
    response => {
        return response;
    },
    err => {
        return Promise.reject(err);
    }
);

const cache = new LRU({ max: 10 });

configure({
    axios: client,
    cache,
});
