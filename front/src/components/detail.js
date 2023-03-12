import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailProducts, addToCart, decreaseFromCart } from '../actions';
import { Nav } from './navbar';


export function Detail(props) {
  const dispatch = useDispatch();
  const detail = useSelector(state => state.detail);

  useEffect(() => {
    dispatch(getDetailProducts(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  const handleAddToCart = (product) =>{
    dispatch(addToCart(product))
  }
  
  const handledecrease = (id) => {
    dispatch(decreaseFromCart(id));
  };

  return (
    <div>
      <Nav/>
     {<div className="container">
        <div className="cardDetail">
        <h2 className="detail_name">{detail.name}</h2>
        <img src={`http://localhost:5000${detail.image}`} alt={detail.name}/>
        <p>{detail.description}</p>
        <h3>{detail.brand}</h3>
        <h4>{`Price: ${detail.price}`}</h4>
        <p>{`Rating: ${detail.rating}`}</p>
        <p>{`Reviews: ${detail.numReviews}`}</p>
        <h6>{`Stock: ${detail.countInStock}`}</h6>
        <button onClick={() => handleAddToCart(detail)}>Agregar al Carrito</button>
          <button onClick={() => handledecrease(detail._id)}>Eliminar</button>
        </div>
      </div>     
      }
    </div>
  );
}