import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart,  addToCart, decreaseFromCart } from '../actions';
import { Nav } from './navbar';

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
      {cart.map((product) => (
        <div key={product._id}>
          <h3>{product.name}</h3>
          <img src={`http://localhost:5000${product.image}`} alt={product.name} />
          <p>Quantity: {product.cantidad}</p>
          <p>Unit price: ${product.price.toFixed(2)}</p>
          <p>Amount: ${(product.cantidad * product.price).toFixed(2)}</p>
          <button onClick={() => handleAddToCart(product)}>Agregar al Carrito</button>
          <button onClick={() => handledecrease(product._id)}>Eliminar</button>
        </div>
      ))}
      <h3>Grand total: ${getTotalPrice()}</h3>
      
      <button onClick={handleclearCart}>Clear cart</button>

    </div>
  );
}

export default Cart;