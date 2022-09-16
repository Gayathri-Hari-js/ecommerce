import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  Button, Col, Input, Row, Select } from 'antd';
import { HeartOutlined, HeartFilled  } from '@ant-design/icons';
import './index.css'
const {Option} = Select;
const {Search} = Input;

const Products = ({state, dispatch}) => {
  const navigate = useNavigate();
  const {products, wishlist} = state;
  const [sortSelected, setSortSelected] = useState(false);
  const [sort, setSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const handleChange = (value) =>{
    setSort(value);
    setSortSelected(true);  
  }
  
  const onSearch = (value) => setSearchQuery(value.toLowerCase());

  // Within the time constrain included just sort by price and a simple title searc logic here
  const modifyProducts = () =>{
    let sortedProducts = products;
    if (sortSelected) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
   
    if (searchQuery!=='') {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.title.toLowerCase().includes(searchQuery)
      );
    }
    return sortedProducts;
  }
  return (
    <div className='products_page'>
      <Row 
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} 
        className= 'products_main'>
        <p> Showing {modifyProducts().length} Results </p>
        <div>
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          style={{
            width: 200,
          }}
        />
        </div>
        <div>Sort By : </div>
        <Select
          defaultValue=''
          style={{
            width: 120,
            marginLeft:10
          }}
          onChange={handleChange}
          >
          <Option value="lowToHigh">Price Low to High</Option>
          <Option value="highToLow">Price High to Low</Option>
        </Select>
      </Row>
      <hr></hr>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {modifyProducts().map((prod) => (
          <Col className="gutter-row" span={6} >
            <div key={prod.id} >
              <div className="image_container">
                <img
                  src= {prod.image}
                  alt = {prod.title}
                  onClick={()=> {navigate(`/product/${prod.id}`)}}
                  className = 'image_style'
                  />

                {wishlist.some((w) => w.id === prod.id) ? (
                  <Button
                      type='primary'
                      shape='circle'
                      icon={<HeartFilled />} 
                      className ='button_wishlist'  
                      onClick={()=> dispatch({
                         type: 'REMOVE_FROM_WISHLIST',
                         payload:{id: prod.id}
                         })
                       }  
                    ></Button>):(
                    <Button
                      type='primary'
                      shape='circle'
                      icon={ <HeartOutlined /> } 
                      className ='button_wishlist'                
                      onClick={()=> dispatch({
                        type: 'ADD_TO_WISHLIST',
                        payload:prod
                       })
                      }  
                    ></Button>
                    )}
              </div>
                <div >
                    <Row>{prod.title}</Row>
                    <Row><b style={{color:'#ED820E', paddingLeft:'30px'}}>${prod.price}</b></Row>
                </div>
            </div>
            </Col>
        ))}
        </Row>
    </div>
  )
}

export default Products