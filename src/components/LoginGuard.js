import React, { useContext, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom' // 引入 useLocation
import Icon from '../icon/Icon'
import AuthContext from '../contexts/AuthContext'

function LoginGuard({ show, setClose, to, directRedirect = false }) {
  const { myAuth } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation() // 取得目前路徑

  useEffect(() => {
    // 關鍵新增：如果現在就在登入頁面，強行關閉彈窗狀態
    if (location.pathname.toLowerCase() === '/login') {
      if (show) setClose(false)
      return // 結束後續邏輯
    }

    if (myAuth.authorized && show && to) {
      navigate(to)
      setClose(false)
    }

    if (!myAuth.authorized && directRedirect) {
      navigate('/Login')
      setClose(false)
    }
  }, [
    myAuth.authorized,
    show,
    to,
    navigate,
    setClose,
    directRedirect,
    location.pathname,
  ])
  // 記得把 location.pathname 加入相依陣列

  // 渲染守衛：如果在登入頁，絕對不顯示彈窗
  if (
    location.pathname.toLowerCase() === '/login' ||
    myAuth.authorized ||
    !show
  )
    return null
  if (directRedirect) return null

  return (
    <div className="D-Blur">
      <div className="d-flex justify-content-center w-100 h-100">
        <div className="P-LoginAlert">
          <Icon.Delete
            style={{
              position: 'absolute',
              top: '10%',
              left: '90%',
              cursor: 'pointer',
            }}
            onClick={() => setClose(false)}
          />
          <span className="f-24 f-Brown mb-3 font-M">
            請先登入小農遊網站唷!
          </span>
          <button
            className="C-cartbutton f-24 sp-3 f-Brown font-M"
            onClick={() => {
              setClose(false) // 這裡保留
              navigate('/Login')
            }}
          >
            點我登入
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginGuard
