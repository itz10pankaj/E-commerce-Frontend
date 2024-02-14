import React, { Fragment, useEffect } from 'react';
import { CgMouse } from 'react-icons/cg';
import "./Home.css"
import ProductCard from './ProductCard.js'
import MetaData from "../layout/MetaData.js"
import {getProduct,clearErrors} from "../../actions/productActions.js"
import {useDispatch,useSelector} from "react-redux"
import Loader from "../layout/Loader/Loader.js"
import { useAlert } from 'react-alert';

// const product={
//   name:'BLUE SHIRT',
//   images:[{url:"https://i.ibb.co/DRST11n/1.webp"}],
//   price:"Rs.3000",
//   _id:"Pankaj",
// }
const Home = () => {
  const alert=useAlert()
  const dispatch=useDispatch();
  const {loading,error,products}=useSelector((state)=>state.products)
  // console.log(products);
  useEffect(()=>{
    if(error){
      alert.error(error);
      dispatch(clearErrors);
    }
    dispatch(getProduct())
  },[dispatch,error,alert])

  return (
    <Fragment>
      {loading ?<Loader />:(    
      <Fragment>
      <MetaData title="Ecommerce" />
      <div className='banner'>
        <p>Welcome to Ecommerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>

        <a href="#container">
          <button>Scroll <CgMouse /></button>
        </a> 
      </div>
      <h2 className='homeHeading'>Featured Product</h2>
      <div className='container' id='container'>
        {products && products.map((product)=>(<ProductCard product={product} />))}
      
      </div>
      </Fragment>
    )}
    </Fragment>

  );
}

export default Home;
