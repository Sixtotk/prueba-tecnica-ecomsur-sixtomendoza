import axios from "axios";
export const GET_PRODUCTS = 'GET_PRODUCTS'

export function getProducts(){
  return async function(dispatch){
    var json = await axios.get("http://localhost:5000/api/products");

    return dispatch({
      type: 'GET_PRODUCTS',
      payload: json.data
     })
  }
}

export function getDetailProducts(id){
  return async function(dispatch){
    var json = await axios.get(`http://localhost:5000/api/products/${id}`);

    return dispatch({
      type: 'GET_DETAIL',
      payload: json.data
     })
  }
}

export function addToCart(product){
  return{
    type: 'ADD_TO_CART',
    payload: product
  }
}

export function decreaseFromCart(id){
  return{
    type: 'DECREASE_FROM_CART',
    payload: id
  }
}

export function clearCart(){
  return{
    type: 'CLEAR_CART',
  }
}

