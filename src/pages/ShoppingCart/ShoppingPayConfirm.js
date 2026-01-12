import React from 'react'
import { useCart } from '../../components/utils/useCart'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { MY_ADDRESS_DATA } from '../../components/api_config'
import axios from 'axios'
import DropDown from '../../components/DropDown'
import LinePayConfirm from './LinePayConfrim'

function ShoppingPayConfirm() {
  //頁面跳轉
  const navigate = useNavigate()

  // 用useCart抓
  const myCart = useCart().cart.items
  //console.log(myCart)

  //分課程跟產品
  const lessonCart = myCart.filter((value) => value.id.indexOf('lesson') !== -1)
  const productCart = myCart.filter(
    (value) => value.id.indexOf('product') !== -1
  )

  const totalItems = useCart().cart.totalItems
  const sumPrice = useCart().cart.cartTotal

  //取得會員資料
  const [myAddress, setMyAddress] = useState([])
  const myAuth = JSON.parse(localStorage.getItem('myAuth'))
  useEffect(() => {
    // 設定功能
    //console.log('useEffect--')
    getMemberData()

    return () => {
      // 解除功能
      //console.log('unmount')
    }
  }, [])
  const getMemberData = async () => {
    axios
      .post(
        MY_ADDRESS_DATA,
        {},
        {
          headers: {
            Authorization: 'Bearer ' + myAuth.token,
          },
        }
      )
      .then((response) => {
        setMyAddress(response.data)
        setSelectArea(response.data[0].member_address_1)
        setSelectDist(response.data[0].member_address_2)
        //console.log(response.data)
        // 在此處處理回應
      })
      .catch((error) => {
        // 在此處處理錯誤
        console.error(error)
      })
  }

  //設置送貨地址
  const [selectArea, setSelectArea] = useState('臺北市')
  const [selectDist, setSelectDist] = useState('')

  //儲存備註進local
  const [remark, setRemark] = useState({})
  //console.log(remark)
  return (
    <>
      <div className="container h-100 py-5 font-B">
        <div className="C-Cartcontainer row d-flex justify-content-center align-items-center h-100">
          <div className="col-10"></div>

          <div className="row d-flex justify-content-between align-items-center mb-4 ">
            <h3 className="col-lg-4 col-md-12 col-sm-12 col-12 f-32 sp-3 mb-3 f-LightGreen">
              小農購物車
            </h3>

            <div className="col-lg-8 col-md-12 col-sm-12 col-12 d-flex justify-content-end align-items-center flex-row gap-2 ms-0">
              <div className="C-step f-16 f-Gray sp-2">
                <button
                  className="C-circle"
                  onClick={() => {
                    navigate('/Cart')
                  }}
                >
                  01
                </button>
                <span>放入購物車</span>
              </div>
              <div className="C-dash"></div>
              <div className="C-step f-16 f-Gray sp-2">
                <button className="C-circle C-active">02</button>
                <span>填寫資料</span>
              </div>
              <div className="C-dash"></div>
              <div className="C-step f-16 f-Gray sp-2">
                <button className="C-circle">03</button>
                <span>完成訂單</span>
              </div>
            </div>
            <section>
              <div className="C-summaryreview backgound-y rounded-20 d-flex flex-column pt-3 mt-3">
                <div className="C-Sum text-center f-24 sp-2">
                  <span className="f-Brown">合計:</span>
                  <span className="f-LightGreen">{sumPrice}</span>
                  <span className="f-Brown">NTD</span>
                </div>
                <div className="C-cases text-center f-16 f-Brown">
                  購物車{totalItems} 件
                </div>
                <div className="text-center">
                  <button
                    className="C-collapse"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  ></button>
                </div>

                <div className="collapse" id="collapseExample">
                  <div className="d-flex flex-row px-3 px-md-5 pt-1 pb-4 flex-wrap">
                    {productCart.map((c) => {
                      return (
                        <div
                          className="C-payitem d-flex flex-row align-items-center gap-md-3 col-xl-6 mt-2"
                          key={c.id}
                        >
                          <div className="C-payitem-img">
                            <img
                              src={`http://localhost:3033/images/product/${c.img}`}
                              className="img-fluid rounded-20"
                              alt="Cotton T-shirt"
                            />
                          </div>
                          <span className="font-Brown f-20 f-Brown sp-1">
                            {c.name}
                          </span>
                          <div>
                            <span className="f-20 f-DarkGreen sp-1">
                              {c.quantity}
                              <span className="f-16 f-Gray">件</span>
                            </span>
                          </div>
                          <div>
                            <span className="f-20 f-DarkGreen sp-1">
                              {c.price}
                            </span>
                            <span className="f-16 f-Gray">NTD</span>
                          </div>
                        </div>
                      )
                    })}
                    {lessonCart.map((c) => {
                      return (
                        <div
                          className="C-payitem d-flex flex-row align-items-center gap-md-3 col-xl-6 mt-2"
                          key={c.id}
                        >
                          <div className="C-payitem-img">
                            <img
                              src={`http://localhost:3033/images/lesson/${c.img}`}
                              className="img-fluid rounded-20"
                              alt="Cotton T-shirt"
                            />
                          </div>
                          <span className="font-Brown f-20 f-Brown sp-1">
                            {c.name}
                          </span>
                          <div>
                            <span className="f-20 f-DarkGreen sp-1">
                              {c.quantity}
                              <span className="f-16 f-Gray">件</span>
                            </span>
                          </div>
                          <div>
                            <span className="f-20 f-DarkGreen sp-1">
                              {c.price}
                            </span>
                            <span className="f-16 f-Gray">NTD</span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </section>
            <div className="backgound-w rounded-20 mb-4 shadow-1 mt-3">
              <div className="p-md-5 row d-flex">
                <div className="C-payment col-lg-4 p-3 px-4 px-md-5 pt-4 col-md-12">
                  <LinePayConfirm></LinePayConfirm>
                </div>

                <div className="C-address col-lg-4 p-md-3 px-4 px-md-5 col-md-12 pt-3">
                  <div className="C-paytitle mb-4">收件人資料*</div>

                  <label htmlFor="member_name" className="f-Khaki f-18 sp-2">
                    姓名
                  </label>
                  {myAddress && (
                    <div className="C-input mb-4">
                      <input
                        type="text"
                        name="member_name"
                        value={myAddress.member_name}
                      />
                    </div>
                  )}

                  <div className="d-flex flex-column row mt-2">
                    <div className="d-flex">
                      <label
                        htmlFor="member_address_1"
                        className="col-6 f-Khaki f-18 sp-2"
                      >
                        城市
                      </label>
                      <label
                        htmlFor="member_address_1"
                        className="col-6 f-Khaki f-18 sp-2"
                      >
                        地區
                      </label>
                    </div>
                    <DropDown
                      selectArea={selectArea}
                      setSelectArea={setSelectArea}
                      myAddress={myAddress}
                      selectDist={selectDist}
                      setSelectDist={setSelectDist}
                    ></DropDown>
                  </div>

                  <label
                    htmlFor="member_address_3"
                    className="f-Khaki f-18 sp-2"
                  >
                    詳細地址
                  </label>
                  {myAddress && (
                    <div className="C-input mb-4">
                      <input
                        type="text"
                        name="member_address_3"
                        value={myAddress.member_address_3}
                      />
                    </div>
                  )}
                  <label htmlFor="contact" className="f-Khaki f-18 sp-2">
                    連絡電話
                  </label>
                  {myAddress && (
                    <div className="C-input mb-4">
                      <input
                        type="number"
                        name="member_mobile"
                        value={myAddress.member_mobile}
                      />
                    </div>
                  )}
                </div>
                <div className="C-remark col-lg-4 p-md-3 px-4 px-md-5 col-md-12 pt-3">
                  <div className="C-paytitle mb-3 f-Khaki f-18 sp-2">
                    訂單備註
                  </div>
                  <div className="C-remark-input rounded-4 mb-3">
                    <textarea
                      type="text"
                      className="col-12"
                      rows="4"
                      cols="50"
                      onChange={(event) => {
                        setRemark(event.target.value)
                      }}
                    ></textarea>
                  </div>
                  <div className="d-flex C-Agree mt-4">
                    <input type="checkbox" className="C-agreeCheck" />
                    <span className="C-agreement f-16 f-Brown sp-1 f-M ps-1">
                      我同意網站<a href="/">服務條款</a>及
                      <a href="/">隱私權政策</a>
                    </span>
                  </div>
                  <div className="d-flex C-Agree mt-2">
                    <input type="checkbox" className="C-agreeCheck" />
                    <label className="C-agreement ms-1 f-16 f-Brown f-M">
                      我願意接收小農遊的最新消息、優惠及服務推廣相關資訊
                    </label>
                  </div>
                </div>
                <div className="C-submit d-flex">
                  <button
                    className="C-cartbutton f-24 sp-3 f-Brown"
                    onClick={() => {
                      navigate('/Confirm')
                      const Myremark = {
                        remark: remark,
                      }
                      localStorage.setItem(
                        'orderPayment',
                        JSON.stringify(Myremark)
                      )
                    }}
                  >
                    提交訂單
                    <img src="./Buttons/cart-line.svg" alt="button" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShoppingPayConfirm
