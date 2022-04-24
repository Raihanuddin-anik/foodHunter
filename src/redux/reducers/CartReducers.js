import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/CartActions";

const cartReducers = (state = [], action) => {
   switch(action.type){
       case ADD_TO_CART:
       return [...state , action.payload]
       case REMOVE_FROM_CART: {
        const NewState = state.filter(
            (item) => item._id !== action.payload
        );
        return NewState;
    }
     default:
          return state
   }
}
 export default cartReducers;