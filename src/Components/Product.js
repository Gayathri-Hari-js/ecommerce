import React , {Fragment} from 'react';
import {Row, Col} from 'antd';
import './index.css';

function Product({state, dispatch}) {
  return (
    <Fragment>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={12}>
          <img className= 'product_image' src={state.product.image} alt={state.product.title}></img>
        </Col>
        <Col span={12}>
          <div className='product_title'>{state.product.title}</div>
          <div><span>Price: </span><span className='product_price'>${state.product.price}</span></div>
          <div><span>Description: </span><span className='product_description'>{state.product.description}</span></div>
          
        </Col>
    </Row>
    </Fragment>
  )
}

export default Product