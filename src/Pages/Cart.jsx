import React, {useEffect, useState} from 'react';
import { Button, Row } from 'antd';

export function Cart({state, dispatch}) {

  const {cart} = state;
  const [total, setTotal] = useState(0);
  
  useEffect(()=>{
    setTotal(cart.reduce((acc, current) => acc + Number(current.price),0))
  },[cart])

  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      <b style={{ fontSize: 25, alignSelf: 'center'}}> Cart</b>
      <b style={{alignSelf: 'center'}}> SubTotal : ${total}</b>
      {cart.length > 0 ? (
        cart.map((prod)=>(
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
                className='add_to_cart_button' 
                onClick={()=>{dispatch({
                          type:'REMOVE_FROM_CART',
                          payload: {id: state.product.id }})
                          }}>
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

