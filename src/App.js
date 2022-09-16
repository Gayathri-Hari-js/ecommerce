import React, {useReducer} from 'react';
import { BrowserRouter,Route, Routes} from 'react-router-dom';
import {Cart, Home, ProductDetails, ProductList, Wishlist} from './Pages';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import { cartReducer } from './Reducers/cartReducer';
import "antd/dist/antd.min.css";

function App() {
  const[state, dispatch] = useReducer(cartReducer,{
    cart: [],
    products:[],
    product:[],
    wishlist:[],
    catagories:[]
});
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path ='/' element = {<Home state={state} dispatch = {dispatch} />} exact></Route>
          <Route path ='/cart' element = {<Cart state={state} dispatch = {dispatch} />}></Route>
          <Route path ='/products/:catagory' element = {<ProductList state={state} dispatch = {dispatch} />}></Route>
          <Route path ='/product/:id' element = {<ProductDetails state={state} dispatch = {dispatch} />}></Route>
          <Route path ='/wishlist' element = {<Wishlist state={state} dispatch = {dispatch} />}></Route>
        </Routes>
        <Footer></Footer>
        </BrowserRouter> 

    </div>
  );
}

export default App;
