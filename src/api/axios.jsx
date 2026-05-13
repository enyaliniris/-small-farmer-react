import axios from 'axios'

const isMock = import.meta.env.VITE_API_MODE === 'mock'

const instance = axios.create({
  baseURL: isMock ? '/' : import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
})

// ─── Request 攔截器 ───────────────────────────────────────
let myAuth = {
  account: '',
  accountId: '',
  token: '',
}
let localAuth = localStorage.getItem('myAuth')
try {
  if (localAuth) {
    myAuth = JSON.parse(localAuth)
  }
} catch (ex) {}

instance.interceptors.request.use((config) => {
  if (isMock && !config.url.endsWith('.json')) {
    config.url = `/mock${config.url}.json`
  }

  if (myAuth.token) {
    config.headers.Authorization = `Bearer ${myAuth.token}`
  }

  return config
})

// ─── Response 攔截器 ──────────────────────────────────────
instance.interceptors.response.use(
  (response) => response.data,

  (error) => {
    const status = error.response?.status
    const messageMap = {
      400: '請求參數錯誤',
      401: '尚未登入，請重新登入',
      403: '權限不足',
      404: '找不到資源',
      408: '請求逾時',
      422: '資料驗證失敗',
      429: '請求過於頻繁，請稍後再試',
      500: '伺服器錯誤，請稍後再試',
      502: '伺服器閘道錯誤',
      503: '服務暫時無法使用',
      504: '伺服器閘道逾時',
    }

    const message = messageMap[status] ??
      (error.code === 'ECONNABORTED' ? '連線逾時' : '網路異常，請檢查連線')

    return Promise.reject(new Error(message))
  }
)

export default instance