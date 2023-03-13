import React from "react";
import { addToCart, decreaseFromCart } from '../actions';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import './card.css'

export function Card({ id, stock, product, name, image, price, rating, numReviews}){

  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch()

  const handleAddToCart = () =>{
    dispatch(addToCart(product))
  }
  
  const handledecrease = () => {
    dispatch(decreaseFromCart(id));
  };
  
  return(
    <div>
      {stock === 0 ? (
        <div className="cards">
          <Link className="contenedor_name" to={`/detail/${product._id}`}>
            <h3 className="product_name">{name}</h3>
            <img className="image_product" src={`http://localhost:5000${image}`} alt={name} />
          </Link>
          <p className="parrafo">{price}</p>
          <p className="parrafo">{rating}</p>
          <p className="parrafo">{numReviews}</p>
          <button 
          className="boton_card">
            Out of stock
          </button>
        </div>
      ) : (
        <div className="cards">
          <Link to={`/detail/${product._id}`}>
            <h3 className="product_name">{name}</h3>
            <img className="image_product" src={`http://localhost:5000${image}`} alt={name} />
          </Link>
          <p className="parrafo">{price}</p>
          <p className="parrafo">{rating}</p>
          <p className="parrafo">{numReviews}</p>
          <button 
            className="boton_card"
            onClick={handleAddToCart}>Add item to cart</button>
          <button 
            className="boton_card"
            onClick={handledecrease}>Remove item from cart</button>
        </div>
    )}
    </div>
  )

}