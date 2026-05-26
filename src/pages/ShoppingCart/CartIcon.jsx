import React from 'react'
import '../../css/shoppingcart.css'
import { useCart } from '../../components/utils/useCart'
import cartSVG from '../../icon/cart.svg'

function CartIcon(props) {
  const CartTotal = useCart().cart.sumTotal

  return (
    <>
      <div className="C-IconCart" data-count={CartTotal}>
        <img src={cartSVG} alt="cart"></img>
      </div>
    </>
  )
}

export default CartIcon
