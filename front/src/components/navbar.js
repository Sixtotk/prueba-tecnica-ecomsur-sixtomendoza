import React from "react";
import { getTotalProductsInCart } from '../reducer';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Logo from '../images/ecomsur-logo.png'
import './navbar.css'
import { FaShoppingCart } from "react-icons/fa";



function CartSummry({cart}){
  const totalProducts = getTotalProductsInCart(cart)
  return (
    <div className="contenedor_cart_nav">
      <FaShoppingCart className="icon_cart"/>
      <div className="contenedor_total_products">
        <p 
        className="total_products">{totalProducts}</p>
      </div>
    </div>
  );
}

export function Nav(){
  const cart = useSelector((state) => state.cart);
  return(
    <div className="contenedor_nav">

      <Link 
      to={'/'} 
      className="contenedor_logo">

        <img 
        src={Logo} 
        alt="Logo" 
        className="logo"></img>

      </Link>

      <Link to={'/cart'}>
        <CartSummry cart={cart} className="cart_nav"/>
      </Link>
    </div>
  )
}