import React from 'react'
import { useState } from 'react'

function CreditCard() {
  const [cardInfo, setCardInfo] = useState('')
  const [cardDate, setCardDate] = useState('')

  // 02/12
  const [date, setDate] = useState('')

  function handleChange(event) {
    console.log(event.target.value)
    if (event.target.value.length === 3) {
      setDate(event.target.value)
    }
    if (event.target.value.length === 2) {
      event.target.value += '/'
    }
    setDate(event.target.value)
  }

  const [Info, setInfo] = useState('')
  //檢查卡號
  function validateCreditCardNumber(event) {
    console.log(event.target.value)

    // 移除字串中的空白
    // event.target.value = event.target.value.replace(/\s/g, '')

    // 檢查卡號是否只包含數字
    // if (!/^\d+$/.test(event.target.value)) {
    //   return
    // }

    // 檢查卡號是否為 16 位數
    if (event.target.value.length == 16) {
      return
    }

    setInfo(event.target.value)
  }

  return (
    <>
      <div className="p-2">
        <div className="C-visa mb-4">
          <div className="C-visanum">
            <div className="C-visadot"></div>
            <div className="C-visanum-4">
              {cardInfo ? cardInfo.slice(-4) : ''}
            </div>
          </div>
          <div className="C-visadate">
            {cardDate ? cardDate.slice(0, 2) : ''}
            {cardDate ? cardDate.slice(2, 5) : ''}
          </div>
          <img src="./Buttons/visa.svg" className="img-fluid" alt="visa" />
        </div>
      </div>

      <label htmlFor="cardholder" className="f-Khaki f-18 sp-2">
        姓名
      </label>
      <div className="C-input mb-4">
        <input type="text" name="cardholder" />
      </div>
      <label htmlFor="creditcard" className="f-Khaki f-18 sp-2">
        信用卡號碼
      </label>
      <div className="C-input mb-4">
        <input
          type="number"
          name="creditcard"
          maxLength="16"
          value={Info}
          onInput={(event) => {
            setCardInfo(event.target.value)
          }}
          onChange={(event) => {
            validateCreditCardNumber(event)
          }}
        />
      </div>
      <div className="d-flex justify-content-between">
        <div className="col-5">
          <label htmlFor="expirationdate" className="f-Khaki f-16 sp-1">
            到期日
          </label>
          <div className="C-input mb-4">
            <input
              type="text"
              name="expirationdate"
              pattern="[0-9]*"
              maxLength="5"
              value={date}
              onInput={(event) => {
                setCardDate(event.target.value)
              }}
              onChange={(event) => {
                handleChange(event)
              }}
            />
          </div>
        </div>
        <div className="col-6">
          <label htmlFor="securitycode" className="f-Khaki f-16 sp-1">
            安全驗證碼
          </label>
          <div className="C-input mb-4">
            <input
              type="text"
              name="securitycode"
              pattern="[0-9]*"
              maxLength="3"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default CreditCard
