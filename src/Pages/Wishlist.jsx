import React from 'react';
import { Button, Row } from 'antd';
import './index.css';

export function Wishlist({state, dispatch}) {

  const {wishlist, cart} = state;

  return (
    <div className='cart_main'>
      <b className= 'cart_title' > Wishlist</b>
      {wishlist.length > 0 ? (
        wishlist.map((prod)=>(         
         <div key={prod.id} className = 'cart_row'>
           <img src={prod.image} alt={prod.title} className ='cart_img'/>  
           <div >
              <Row>{prod.title}</Row>
              <Row><b className ='price_tag'>${prod.price}</b></Row>
            </div>
            <div> 
              <Button 
                type='secondary' 
                className='remove_button' 
                onClick={()=>{dispatch({
                          type:'REMOVE_FROM_WISHLIST',
                          payload: {id: prod.id }})
                          }}>
                      Remove From wishlist
              </Button>
              {cart.some((c) => c.id === prod.id) ? (
                'Item added to your cart'
              ) : (
              <Button 
                type='primary' 
                className='add_to_cart_button' 
                onClick={()=>{dispatch({
                          type:'ADD_TO_CART',
                          payload: prod })
                          }}>
                      Add to cart
              </Button>)}
            </div>
        </div>))
      ):(
        <p>List is empty</p>
      )}
    </div>
  )
}

