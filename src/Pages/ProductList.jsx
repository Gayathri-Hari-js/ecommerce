import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Products from '../Components/Products';
/**
 * This page renders the product list fetched from https://fakestoreapi.com/products
 * @returns 
 */
export function ProductList({state, dispatch}) {
  const params = useParams();
  useEffect(()=>{
    if(params.catagory === 'all products')
      fetch('https://fakestoreapi.com/products')
              .then(res=>res.json())
              .then(json => dispatch({
                  type:'ADD_PRODUCTS',
                  payload: json
              }));
    else
      fetch(`https://fakestoreapi.com/products/category/${params.catagory}`)
              .then(res=>res.json())
              .then(json=>dispatch({
                type:'ADD_PRODUCTS',
                payload: json
            }))
  },[dispatch, params])

  return (
    <div>
        <Products state={state} dispatch = {dispatch} />
    </div>
  )
}
