import axios from 'axios';
import { message } from 'antd'
import NProgress from 'nprogress';
import qs from 'querystring'
import 'nprogress/nprogress.css'

const instance = axios.create({
    timeout: 4000,
})
//请求拦截器
instance.interceptors.request.use(

    config => {
        NProgress.start()
        const { method, data } = config
        if (method.toLowerCase() === 'post') {
            if (data instanceof Object) {
                config.data = qs.stringify(data)
            }
        }

        return config
    },
    error => {
        console.log('request interceptor1 onRejected()')
        return Promise.reject(error)
    }
)
//响应拦截器
instance.interceptors.response.use(
    resopnse => {
        NProgress.done()
        console.log('response interceptor1 onResolved()') // -----------3
        return resopnse.data
    },
    error => {
        NProgress.done()
        message.error(error.message, 1)
        return Promise.reject(error)
    }
)
export default instance