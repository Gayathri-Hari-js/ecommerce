import React from 'react';
import { Button, Row } from 'antd';

export function Wishlist({state, dispatch}) {

  const {wishlist, cart} = state;

  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      <b style={{ fontSize: 25, alignSelf: 'center'}}> Wishlist</b>
      {wishlist.length > 0 ? (
        wishlist.map((prod)=>(
            
        <div key={prod.id}
          style={{display:'flex',
                  border: "1px solid grey",
                  padding:10,
                  justifyContent:'space-between'}}
                  >
           <img src={prod.image} alt={prod.title} style={{width:70, objectFit: 'cover'}}/>  
           <div >
                    <Row>{prod.title}</Row>
                    <Row><b style={{color:'#ED820E', paddingLeft:'30px'}}>${prod.price}</b></Row>
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

