import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { clearCart,  addToCart, decreaseFromCart } from '../actions';
import { Nav } from './navbar';

import './cart.css'

export function Cart() {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch()
  
  const handleAddToCart = (product) =>{
    dispatch(addToCart(product))
  }
  
  const handledecrease = (id) => {
    dispatch(decreaseFromCart(id));
  };

  const handleclearCart = () =>{
    dispatch(clearCart())
  }

  const getTotalPrice = () => {
    let total = 0;
    cart.forEach((product) => {
      total += product.cantidad * product.price;
    });
    return total.toFixed(2);
  };

  return (
    <div>
      <Nav/>
      <div className='contenedor_price_clear'>
      
          <h3 className='grand_total'>Grand total: ${getTotalPrice()}</h3>
        <button 
        className='boton_cart'
        onClick={handleclearCart}>
          Clear cart
        </button>

      </div>
      <div className='contenedor_cart'>
      {cart.map((product) => (
        <div 
        className='cart'
        key={product._id}>
          <Link className="contenedor_name" to={`/detail/${product._id}`}>
          <h3 className='cart_name'>{product.name}</h3>
          <img 
          className='cart_image'
          src={`http://localhost:5000${product.image}`} 
          alt={product.name} />
          </Link>

          <p className='cart_p'>
            Quantity: {product.cantidad}
          </p>
          <p className='cart_p'>
            Unit price: ${product.price.toFixed(2)}
          </p>
          <p className='cart_p'>
            Amount: ${(product.cantidad * product.price).toFixed(2)}
          </p>
          <button 
          className='boton_cart'
          onClick={() => handleAddToCart(product)}>
            Agregar al Carrito
          </button>
          <button 
          className='boton_cart'
          onClick={() => handledecrease(product._id)}>
            Eliminar
          </button>

        </div>
      ))}
      </div>
      
      <footer> Prueba Tecnica Ecomsur: Sixto Tulio Mendoza Garcia</footer>
    </div>
  );
}

export default Cart;