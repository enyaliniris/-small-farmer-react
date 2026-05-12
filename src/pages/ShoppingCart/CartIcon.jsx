import React from 'react'
import '../../css/shoppingcart.css'
import { useCart } from '../../components/utils/useCart'

function CartIcon(props) {
  const CartTotal = useCart().cart.sumTotal

  return (
    <>
      <div className="C-IconCart" data-count={CartTotal}>
        <img src="./../../Icons/cart.svg" alt="cart"></img>
      </div>
    </>
  )
}

export default CartIcon
