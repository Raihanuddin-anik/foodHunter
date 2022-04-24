export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const AddToCart =  (payload) =>{
    return {
        type:ADD_TO_CART,
        payload
    }
}

export const RemoveFromCart =  (id) =>{
    return {
        type:REMOVE_FROM_CART,
        id
    }
}