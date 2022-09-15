export const cartReducer = (state, action) => {
    switch(action.type){
        case 'ADD_PRODUCTS':
            return {...state, products: action.payload}; 
        case 'ADD_PRODUCT':
            return {...state, product: action.payload}; 
        case 'ADD_CATAGORIES':
            return {...state, catagories: action.payload};
        case 'ADD_TO_CART':
            return {...state, cart: [{...action.payload}, ...state.cart]}; 
        case 'REMOVE_FROM_CART':
            return {...state, cart: state.cart.filter(c=>c.id!==action.payload.id)};
        case 'ADD_TO_WISHLIST':
            return {...state, wishlist: [{...action.payload}, ...state.wishlist]};  
        case 'REMOVE_FROM_WISHLIST':
            return {...state, wishlist: state.wishlist.filter(c=>c.id!==action.payload.id)}; 
        default:
            break;
    }
}