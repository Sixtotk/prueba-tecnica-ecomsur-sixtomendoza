import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailProducts, addToCart, decreaseFromCart } from '../actions';
import { Nav } from './navbar';

import './detail.css'


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
      {detail.countInStock === 0 ? (
        <div className="container_detail">

          <div className="cardDetail">

            <div className='detail_name_image'>

              <h2 className="detail_name">
                {detail.name}
              </h2>
              <img 
              className='detail_image'
              src={`http://localhost:5000${detail.image}`} alt={detail.name}/>

            </div>

            <div className='informacion'>

              <p className="detail_description">
                {detail.description}
               </p>
              <h4>
                {detail.brand}
              </h4>
              <h5 className='detail_price'>
                {`Price: ${detail.price}`}
              </h5>
              <h4>
                {`Stock: ${detail.countInStock}`}
              </h4>
              <p className="detail_p">
                {`Rating: ${detail.rating}`}
              </p>
              <p className="detail_p">
                {`Reviews: ${detail.numReviews}`}
              </p>

            </div>

          </div>

        </div> 
      ) : (
        <div className="container_detail">

          <div className="cardDetail">

            <div className='detail_name_image'>

              <h2 className="detail_name">
                {detail.name}
              </h2>
              <img 
              className='detail_image'
              src={`http://localhost:5000${detail.image}`} alt={detail.name}/>

            </div>

            <div className='informacion'>

              <p className="detail_description">
                {detail.description}
              </p>
              <h4>
                {detail.brand}
              </h4>
              <h5 className='detail_price'>
                {`Price: ${detail.price}`}
              </h5>
              <h4>
                {`Stock: ${detail.countInStock}`}
              </h4>
              <p className="detail_p">
                {`Rating: ${detail.rating}`}
              </p>
              <p className="detail_p">
                {`Reviews: ${detail.numReviews}`}
              </p>
              <button 
                className='detail_boton'
                onClick={() => handleAddToCart(detail)}>
                 Add item to cart
              </button>
              <button 
              className='detail_boton'
              onClick={() => handledecrease(detail._id)}>
                Remove item from cart
              </button>
            </div>

          </div>

        </div>)}  

    </div>
  );
}