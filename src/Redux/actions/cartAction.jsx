import { toast } from "react-toastify";

// Action Types
 export const ADD_TO_CART = 'ADD_TO_CART';
 export const REMOVE_TO_CART = 'REMOVE_TO_CART';
 export const DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY'
export const  INCREMENT_ITEM_QUANTITY = ' INCREMENT_ITEM_QUANTITY'

// Action Creator
export const addToCart = (post) => {


  toast.success(`Item is added in Cart`)
  return {
    type:ADD_TO_CART,
    payload: {
      ...post,
      quantity:1,
    }
  };
};

export const incrementItemToCart = (item) => {
  return {
    type: INCREMENT_ITEM_QUANTITY,
    payload: item, // Passing the item to increment
  };
};

// Action to decrement quantity
export const decrementItemToCart = (item) => {
  return {
    type: DECREMENT_ITEM_QUANTITY,
    payload: item, // Passing the item to decrement
  };
};

// remove to cart item
export const removeItemToCart=(id)=>{
  // console.log(id, "item")
  toast.success("Remove Item in Cart")
  return{
    type: REMOVE_TO_CART,
    payload: id
  }
}

