//项目中所有请求由这个文件发出
import myAxios from './myAxios';
import { BASE_URL } from '../config'
import axios from 'axios';


//发起登录请求
export const reqLogin = (username, password) =>
    myAxios.post(`${BASE_URL}/login`, { username, password })
//发起获取商品列表请求
export const reqCategoryList = () =>
    myAxios.get(`${BASE_URL}/manage/category/list`)
//展示pv画面曲线
export const reqPv = () => axios.request({
    method: 'GET',
    url: 'http://localhost:9000/pageviews'
})