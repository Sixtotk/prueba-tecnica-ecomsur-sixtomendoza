import React from "react";
import { getTotalProductsInCart } from '../reducer';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";


function CartSummry({cart}){
  const totalProducts = getTotalProductsInCart(cart)
  return <div>Cart: {totalProducts}</div>;
}

export function Nav(){
  const cart = useSelector((state) => state.cart);
  return(
    <div>
      <Link to={'/'}><p>Ecomsur</p></Link>
      <Link to={'/cart'}>
        <CartSummry cart={cart} />
      </Link>
    </div>
  )
}