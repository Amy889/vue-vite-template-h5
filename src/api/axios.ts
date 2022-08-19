import axios from 'axios'

const axiosInstance = axios.create({
  timeout: 20000,
  baseURL: import.meta.env.VITE_APP_URL as string,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  }
})

// 注入请求拦截
axiosInstance.interceptors.request.use((res: any) => {
  // if (res.method === 'post') {
  // }
  return res
}, (error: any) => {
  return Promise.reject(error)
})

// 注入响应拦截
axiosInstance
  .interceptors.response.use(
    (responseObj: any) => {
      return responseObj.data
    }, (error: any) => {
      return Promise.reject(error)
    }
  )

export default axiosInstance
