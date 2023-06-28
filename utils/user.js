import { get, put, post } from "./request";

//发送注册请求的api
export const regAPI = (params) => post("/api/v1/auth/reg", params)

//发送登录请求的api
export const loginAPI = (params) => post("/api/v1/auth/login", params)

//发送修改个人信息请求的api
export const infoAPI = (params) => put("/api/v1/user/modify", params)

//发送获取个人信息请求的api
export const getInfor = () => get("/api/v1/user/info")