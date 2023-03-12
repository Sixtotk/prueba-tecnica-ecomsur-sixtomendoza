import React from "react";
import { addToCart, decreaseFromCart } from '../actions';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export function Card({id, stock, product, name, image, price, rating, numReviews}){

  

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
        <div>
          <Link to={`/detail/${product._id}`}>
            <h3>{name}</h3>
            <img src={`http://localhost:5000${image}`} alt={name} />
          </Link>
          <p>{price}</p>
          <p>{rating}</p>
          <p>{numReviews}</p>
        </div>
      ) : (
        <div>
          <Link to={`/detail/${product._id}`}>
            <h3>{name}</h3>
            <img src={`http://localhost:5000${image}`} alt={name} />
          </Link>
          <p>{price}</p>
          <p>{rating}</p>
          <p>{numReviews}</p>
          <button onClick={handleAddToCart}>Add item to cart</button>
          <button onClick={handledecrease}>Remove item from cart</button>
        </div>
    )}
    </div>
  )

}