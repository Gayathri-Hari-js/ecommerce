import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {  Button, Col, Row, Select } from 'antd';
import { HeartOutlined  } from '@ant-design/icons';
import './index.css'
const {Option} = Select;

const Products = ({state, dispatch}) => {
  const navigate = useNavigate();
  const  {products} = state;
  const [sortSelected, setSortSelected] = useState(false);
  const [sort, setSort] = useState('');

  const handleChange = (value) =>{
    setSort(value);
    setSortSelected(true);
    
  }

  const modifyProducts = () =>{
    let sortedProducts = products;
    if (sortSelected) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    return sortedProducts;
  }
  return (
    <div style={{padding:10}}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} 
          style={{padding:10}}>
        {/* to-do: sort by : Dropdown (price low to high, high to low) And add Pagination*/}
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
                style = {{ width: 150, height: 200, objectFit : 'cover'}} />
              <Button
                  type='primary'
                  shape='circle'
                  icon={<HeartOutlined />} 
                  style={{
                    position: "absolute",
                    top: '5px',
                    right: '5px', 
                    color:'#ED820E',
                    background:'white',
                    border:'#ED820E'
                  }} 
                  onClick={()=> dispatch({type: 'ADD_TO_WISHLIST',
                payload:prod})}  
                ></Button>
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