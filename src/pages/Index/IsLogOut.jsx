import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import iconMemberSlender from '../../icon/icon-member-slender.svg'
function IsLogOut() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className="buttom-logout">
        <a
          href="#/"
          className="position-relative"
          id="toggleMember"
          onClick={(e) => {
            e.preventDefault()
            setIsOpen(!isOpen)
          }}
        >
          <div className="button-member d-flex">
            <img
              src={iconMemberSlender}
              style={{ width: '17px', height: '20px' }}
              alt=""
              className=""
            />
          </div>
        </a>
        <div className="memeber-active-bg">
          <ul
            className={
              isOpen
                ? 'memeber-status-login memberList'
                : 'memeber-status-login'
            }
          >
            <Link to={`/Login`}>
              <span className="font-B memeber-login f-Gray">登入</span>
            </Link>
          </ul>
        </div>
      </div>
    </>
  )
}

export default IsLogOut
