import React, { useState } from 'react'
import LinePay from './LinePay'
import CreditCard from './CreditCard'
import { useCart } from '../../components/utils/useCart'

function PayTab() {
  const [activeTab, setActiveTab] = useState('信用卡')
  const { setMyPayment } = useCart()

  const handleTabClick = (index) => {
    setActiveTab(index)
  }

  return (
    <>
      <div className="d-flex justify-content-around">
        <div className="C-paytitle mb-4">付款方式* :</div>
        <div className="C-tab d-flex gap-2">
          <button
            className={activeTab === '信用卡' ? 'C-paywaybtn-a' : 'C-paywaybtn'}
            onClick={() => {
              handleTabClick('信用卡')
              setMyPayment('信用卡')
            }}
          >
            信用卡
          </button>
          <button
            className={
              activeTab === 'LinePay' ? 'C-paywaybtn-a' : 'C-paywaybtn'
            }
            onClick={() => {
              handleTabClick('LinePay')
              setMyPayment('LinePay')
            }}
          >
            LinePay
          </button>
        </div>
      </div>
      {activeTab === '信用卡' ? <CreditCard></CreditCard> : <LinePay></LinePay>}
    </>
  )
}

export default PayTab
