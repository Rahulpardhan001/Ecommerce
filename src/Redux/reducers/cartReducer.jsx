import { ADD_TO_CART, REMOVE_TO_CART,DECREMENT_ITEM_QUANTITY,  INCREMENT_ITEM_QUANTITY } from "../actions/cartAction";


const initialCartState = {
    cartItems: [],
  };
  
  export const cartReducer = (state = initialCartState, action) => {
  
    switch (action.type) {
      case ADD_TO_CART:
        const existingItem = state.cartItems.find((curElem )=>{
         return curElem.id === action.payload.id;
        })
        // console.log(existingItem,"exist")
        if(existingItem){
            return{
            ...state,
            cartItems:state.cartItems.map((item)=>
           
              item.id === action.payload.id ?{...item, quantity:item.quantity+1,}:item
            )
          }
        }else{

        return {
                    ...state,
          cartItems: [...state.cartItems, {...action.payload,   price: action.payload.price,}],
        };
      }
     case INCREMENT_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

       
    case DECREMENT_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
  
      case REMOVE_TO_CART:
       
        return{
      cartItems:state.cartItems.filter((curElem)=> curElem.id !== action.payload)
        }
      default:
        return state;
    } 
  };
  

