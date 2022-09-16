import React, { Fragment } from 'react';
import {useNavigate} from 'react-router-dom';
import { Button, Tooltip  } from 'antd';
import {HomeOutlined ,HeartFilled, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import './index.css';
const Header = () => {
  
  const navigate = useNavigate();
  return (
    <Fragment>
        <nav className='header_nav'>
            <div className='header_div'>
            <Tooltip title="Go to Home Page">
              <Button type='primary'
                      className='header_button' 
                      icon={<HomeOutlined />}
                      onClick={()=> {navigate(`/`)} }>
                      Home </Button>
            </Tooltip>        
                <div className='header_title'>Shop Here!</div>                
                <div className='header_button_group'>
                  <Tooltip title="Your Wishlist">
                      <Button type='primary' 
                                  className='header_button'
                                  icon={<HeartFilled /> }
                                  onClick={()=> {navigate(`/wishlist`)} }>
                                  </Button>
                    </Tooltip>
                    <Tooltip title="Your Cart">
                      <Button type='primary' 
                                  className='header_button'
                                  icon={<ShoppingCartOutlined />}
                                  onClick={()=> {navigate(`/cart`)}}
                                  ></Button>
                    </Tooltip>
                    <Tooltip title="Yet to add your profile"></Tooltip>
                    <Button type='primary' 
                                className='header_button'
                                icon={<UserOutlined />}
                                ></Button>
                </div>
            </div>
        </nav>
    </Fragment>
  )
}

export default Header