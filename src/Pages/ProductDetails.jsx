import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { Button } from 'antd';
import Product from '../Components/Product';
/**
 * Render Product details like image, price, add to cart button,
 * if added remove button
 * @returns 
 */
export function ProductDetails({state, dispatch}) {
    const params = useParams();
    const {cart, product} = state;
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${params.id}`)
                .then(res=>res.json())
                .then(json => dispatch({
                    type:'ADD_PRODUCT',
                    payload: json
                }));
        
    },[params.id, dispatch])
  return (
    <div>
      <Product state={state}  dispatch = {dispatch} />
      <div className='add_button'> 
        {cart.some((c) => c.id === product.id) ? (
          <Button 
          type='secondary' 
          className='add_to_cart_button' 
          onClick={()=>{dispatch({
                    type:'REMOVE_FROM_CART',
                    payload: {id: state.product.id }})
                    }}>
                Remove From Cart
        </Button>
        ) : (<Button 
          type='primary' 
          className='add_to_cart_button' 
          onClick={()=>{dispatch({
                    type:'ADD_TO_CART',
                    payload: state.product })
                    }}>
                Add to Cart
        </Button>) }
        
      </div>
    </div>
  )
}

 