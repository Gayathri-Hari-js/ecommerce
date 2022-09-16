import React, {useEffect, useState} from 'react';
import { Button, Row } from 'antd';
import './index.css';

export function Cart({state, dispatch}) {

  const { cart } = state;
  const [total, setTotal] = useState(0);
  
  useEffect(()=>{
    setTotal(cart.reduce((acc, current) => acc + Number(current.price),0))
  },[cart])

  return (
    <div className='cart_main'>
      <b className= 'cart_title' > Cart</b>
      <b style={{alignSelf: 'center'}}> SubTotal : ${total}</b>
      {cart.length > 0 ? (
        cart.map((prod)=>(
          <div key={prod.id} className = 'cart_row'>
              <img src={prod.image} alt={prod.title} className ='cart_img' />  
              <div >
                <Row>{prod.title}</Row>
                <Row><b className ='price_tag' >${prod.price}</b></Row>
              </div>
              <div> 
                <Button 
                  type='secondary' 
                  className='remove_button' 
                  onClick={()=>{ 
                    dispatch({
                      type:'REMOVE_FROM_CART',
                      payload: {id: prod.id }})
                    }
                  }>
                   Remove From Cart
                </Button>
              </div>
          </div>))
      ):(
        <p>Cart is empty</p>
      )}
    </div>
  )
}

