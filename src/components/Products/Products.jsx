import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {fetchDataSource} from '../../store/actions';

function Products() {
  const dispatch = useDispatch();
  const products = useSelector((store => store.products));
  const isFetching = useSelector((store => store.productsFetching));

  useEffect(() => {
    dispatch(fetchDataSource());
  }, [dispatch])

  console.log('isFetching', isFetching)
  console.log('products', products)
  return (
    <div>
     <h1>Products</h1>
     {isFetching && <div>Loading...</div>}
     {!isFetching && <div>
       {products.map(product => (
         <div key={product.id} style={{display: 'flex', justifyContent: 'space-around'}}>
           <div>{product.id}</div>
           <div>{product.name}</div>
           <div>{product.price}</div>
         </div>
       ))}
     </div>}
    </div>
  )
}

export default Products