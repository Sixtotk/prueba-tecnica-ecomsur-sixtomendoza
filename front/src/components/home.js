import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//componentes
import { Card } from './card';
import { Nav } from './navbar';

//actions
import { getProducts } from '../actions';

//css
import './home.css'


export function Home() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className='home' key='home'>
      <Nav/>
      <div className='contenedor_cards'>
        {products.map((product) => (
          <Fragment key={product._id}>    
            <Card
            id ={product._id}
            stock={product.countInStock}
            product={product} 
            name={product.name}
            image={product.image} 
            price={`Price: ${product.price}`}
            rating={`Rating: ${product.rating}`}
            numReviews={`Reviews: ${product.numReviews}`}/>
          </Fragment>
        ))}
      </div>
    </div>
  );
}