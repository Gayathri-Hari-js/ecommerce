import React, {useEffect} from 'react';
import Catagories from '../Components/Catagories';

export  function Home({state, dispatch}) {
   
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/categories')
        .then(res=>res.json())
        .then(json=> dispatch({
            type:'ADD_CATAGORIES',
            payload: json
        }))
    },[dispatch])
  return (
    <div>
        <Catagories state={state} dispatch = {dispatch} />
    </div>
  )
}
