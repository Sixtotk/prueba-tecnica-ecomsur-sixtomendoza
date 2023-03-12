
const initialState = {
    products: [],
    detail: [],
    cart: JSON.parse(localStorage.getItem('cart')) || []
    //cart: []
    
}

function rootReducer(state = initialState, action){
  switch(action.type){
    case 'GET_PRODUCTS':
      return{
         ...state,
         products: action.payload.map(product => ({...product, cantidad: 0}))
      }
    case 'GET_DETAIL':
      return{
        ...state,
        detail: action.payload
      }
    case 'ADD_TO_CART':
      const product = action.payload;
      const index = state.cart.findIndex(item => item._id === product._id);
      const updatedCart = [...state.cart];

      if (index !== -1) {
        const newQuantity = updatedCart[index].cantidad + 1;
        if ( newQuantity > product.countInStock) {
          alert('No hay suficiente stock disponible');
          return state;
        }
        updatedCart[index].cantidad = newQuantity;
      } 
      else {
      updatedCart.push({ ...product, cantidad: 1 });
      }

      const updatedState = {
        ...state,
        cart: updatedCart,
      };

      localStorage.setItem('cart', JSON.stringify(updatedState.cart));

      return updatedState;

    case 'DECREASE_FROM_CART':
      const id = action.payload;
      const cartItem = state.cart.find(item => item._id === id)
      const newCart = [...state.cart];

      if(cartItem.cantidad > 1){
        cartItem.cantidad--
      }
      else{
        const index = newCart.findIndex(item => item._id === id)
        newCart.splice(index, 1)
      }
      const newState = {
        ...state,
        cart: newCart
      }
      localStorage.setItem('cart', JSON.stringify(newState.cart))
      return newState

    case 'CLEAR_CART':
      const clearState = {
        ...state,
        cart: []
      }

      localStorage.setItem('cart', JSON.stringify([]))

      return clearState

    default:
      return state;
  }
}
export default rootReducer;

export const getTotalProductsInCart = (cart) => {
  let total = 0;
  cart.forEach((product) => {
    total += product.cantidad;
  });
  return total;
};
