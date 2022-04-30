import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/CartActions";

const cartReducers = (state = [], action) => {
   switch(action.type){
       case ADD_TO_CART:
           const CartItem ={
               id : action.payload.idMeal,
               Name : action.payload.strMeal,
               ImgUrl: action.payload.strMealThumb,
               Area : action.payload.strArea,
               newId : state.length + 1

           }
       return  [...state , CartItem]
       
       case REMOVE_FROM_CART: 
        const id = action.id;
        const NewState = state.filter( item => item.newId !== id );
        return NewState
    
     default:
          return state
   }
}
 export default cartReducers;