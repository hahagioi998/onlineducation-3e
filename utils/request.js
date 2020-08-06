import axios from 'axios'

// 创建 axios 对象
const service = axios.create({
    baseURL: 'http://localhost:9001',
    timeout: 20000
})
export default service