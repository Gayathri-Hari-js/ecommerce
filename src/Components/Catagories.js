import React from 'react';
import {useNavigate} from 'react-router-dom';
import { Button, Col, Row  } from 'antd';
import {ArrowRightOutlined  } from '@ant-design/icons';
import './index.css'

const Catagories = ({state, dispatch}) => {
  const navigate = useNavigate();
  const  {catagories} = state;
  let allCatagories = catagories;
  if(!allCatagories.includes('all products')){
    allCatagories.push('all products');
  }
  return (
    <div className='products_main'>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {allCatagories.map((cata, i) => (      
          <Col className="gutter-row" span={6} key={i} >
            <div className='catagory_container' >
              <div style={{display:'flex', justifyContent:'space-between'}}>
                <div className='catagory_name'>{cata}</div>
                <Button type='primary' 
                    shape='circle'
                    icon={<ArrowRightOutlined />} 
                    size='small' 
                    onClick={()=> {navigate(`/products/${cata}`)}} 
                    className='catagory_button'
                />
              </div>
            </div>
          </Col>)
        )}
      </Row>
    </div>
  )
}

export default Catagories