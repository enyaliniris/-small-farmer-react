import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { HOST, COUPON_DATA } from '../../api/api'
import Pagination from '../../components/Pagination'
import { Link } from 'react-router-dom'
import Loading from '../../components/Loading'

function MyCouponLeft() {
  const [coupondata, setCouponData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const myAuth = JSON.parse(localStorage.getItem('myAuth'))

  const getListData = async () => {
    setIsLoading(true)
    axios
      .post(
        COUPON_DATA,
        {},
        {
          headers: {
            Authorization: 'Bearer ' + myAuth.token,
          },
        }
      )
      .then((response) => {
        setCouponData(response.data)
        setIsLoading(false)
      })
      .catch((error) => {
        //console.error(error)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    getListData()
    return () => {}
  }, [])

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 3
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = coupondata.slice(indexOfFirstItem, indexOfLastItem)

  if (isLoading) return <Loading />

  return (
    <>
      <div className="w-100 ps-4 pb-2">
        <Link to="/MyMember">
          <button className="M-back"></button>
        </Link>
      </div>
      <div
        className="C-Order-c backgound-w rounded-20 shadow-1 p-sm-3 p-lg-5 f-B"
        data-count={coupondata.length}
      >
        {coupondata.length ? (
          ''
        ) : (
          <div className="MB-notfound font-M mt-5">
            <p className="">沒有優惠卷喔</p>
            <Link to={`/product`}>
              <img src="./../../Images/findProduct.png" alt="" width={250} />
            </Link>
          </div>
        )}
        {currentItems.map((c) => {
          return (
            <>
              <div className="C-O-coupon my-3 d-flex" key={c.sid}>
                <div className="C-O-couponimg">
                  <img
                    src={`${HOST}/images/coupon/${c.coupon_img}`}
                    alt="couponimg"
                  />
                </div>
                <div className="ms-2 d-flex w-100 justify-content-between">
                  <div className="C-coupon-wrap-text">
                    <p className="f-20 fw-normal mb-1 f-Brown">
                      {c.coupon_name}
                    </p>
                    <span className="f-Gray">{c.coupon_discription}</span>
                  </div>
                  <div className="C-O-coupon-quota pe-4">
                    <p className="f-20 fw-normal mb-1 f-LightGreen">
                      {c.coupon_quota}
                    </p>
                    <span className="f-18 f-Gray">
                      {c.coupon_category === 1 ? 'NTD' : '%'}
                    </span>
                  </div>
                </div>
              </div>
            </>
          )
        })}

        <div className="d-flex justify-content-end">
          <Pagination
            totalItems={coupondata.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          ></Pagination>
        </div>
      </div>
    </>
  )
}

export default MyCouponLeft
