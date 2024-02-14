import React, { useState } from 'react';
import './App.css';
import Header from './component/layout/Header/Header.js';
import Footer from "./component/layout/Footer/Footer.js";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import webFont from "webfontloader"
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js"
import Products from "./component/Product/Product.js"
import Search from "./component/Product/Search.js"
import LoginSignUp from './component/User/LoginSignUp.js';
import store from "./store.js"
import { loadUser, updatePassword } from './actions/userActions.js';
import UserOptions from "./component/layout/Header/Useroptions.js"
import Profile from "./component/User/Profile.js"
import { useSelector } from 'react-redux';
// import ProtectedRoute from "./component/Route/ProtectedRoute.js"
import UpdateProfile from "./component/User/UpdateProfile.js"
import UpdatePassword from './component/User/UpdatePassword.js';
import ForgotPassword from "./component/User/ForgotPassword.js";
import ResetPassword from "./component/User/ResetPassword.js"
import Cart from "./component/Cart/Cart.js";
import Shipping from "./component/Cart/Shipping.js";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js"
import Payment from "./component/Cart/Payment.js"
import axios from "axios";  
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import OrderSuccess from './component/Cart/OrderSuccess.js'
import MyOrders from './component/Order/MyOrders.js'
import OrderDetails from './component/Order/OrderDetails.js';
import Dashboard from './component/admin/Dashboard.js'
import ProductList from './component/admin/ProductList.js'
import NewProduct from "./component/admin/NewProduct.js"
import UpdateProduct from "./component/admin/UpdateProduct.js" 
import OrderList from "./component/admin/OrderList.js"
import ProcessOrder from "./component/admin/ProcessOrder.js"
import UsersList from "./component/admin/UsersList.js"
import UpdateUser from "./component/admin/UpdateUser.js"
import ProductReviews from "./component/admin/ProductReviews.js"
import About from "./component/layout/About/About.js"
import Contact from "./component/layout/Contact/Contact.js"
const App = () => {
  const {isAuthenticated,user,authorizeRole}=useSelector(state=>state.user)
  const [stripeApiKey,setStripeApiKey]=React.useState("");
  async function getStripeApiKey(){
    const {data}=await axios.get("/api/v1/stripeapikey");
    setStripeApiKey(data.stripeApiKey);
  }
  React.useEffect(()=>{
    webFont.load({
      google:{
        families:["Roboto","Droid Sans","chilanka"]
      }
    });
    store.dispatch(loadUser())
    getStripeApiKey();
  },[])

  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <Elements stripe={loadStripe(stripeApiKey)}>
      <Routes>
        
      <Route extact path="/" Component={Home} />
      <Route extact path="/product/:id" Component={ProductDetails} />
      <Route extact path="/products" Component={Products} />
      <Route  path="/products/:keyword" Component={Products} />
      <Route extact path="/Search" Component={Search} />
      <Route extact path="/login" Component={LoginSignUp} />
      <Route extact path="/about" Component={About} />
      <Route extact path="/contact" Component={Contact} />
      {isAuthenticated && < Route extact path="/account" Component={Profile} />}
      {isAuthenticated && < Route extact path="/me/update" Component={UpdateProfile} />}
      {isAuthenticated && < Route extact path="/password/update" Component={UpdatePassword} />}
      <Route extact path="/password/forgot" Component={ForgotPassword} />
      <Route extact path="/password/reset/:token" Component={ResetPassword} />
      <Route extact path="/cart" Component={Cart} />
      {isAuthenticated && <Route extact path="/shipping" Component={Shipping} />}
      {isAuthenticated && <Route extact path="/process/payment" Component={Payment} />}
      {isAuthenticated && <Route extact path="/success" Component={OrderSuccess} />}
      {isAuthenticated && <Route extact path="/orders" Component={MyOrders} />}
      {/* <switch> */}
      {isAuthenticated && <Route extact path="/order/confirm" Component={ConfirmOrder} />} 
      {isAuthenticated && <Route extact path="/order/:id" Component={OrderDetails} />}  
      {/* </switch> */}
      {isAuthenticated && user.role==="admin" &&<Route extact path="/admin/dashboard" Component={Dashboard} />}
      {isAuthenticated && user.role==="admin" &&<Route extact path="/admin/products" Component={ProductList} />}  
      {isAuthenticated && user.role==="admin" &&<Route extact path="/admin/product" Component={NewProduct} />}
      {isAuthenticated && user.role==="admin" &&<Route extact path="/admin/product/:id" Component={UpdateProduct} />}
      {isAuthenticated && user.role==="admin" &&<Route extact path="/admin/orders" Component={OrderList} />}    
      {isAuthenticated && user.role==="admin" &&<Route extact path="/admin/order/:id" Component={ProcessOrder} />} 
      {isAuthenticated && user.role==="admin" &&<Route extact path="/admin/users" Component={UsersList} />} 
      {isAuthenticated && user.role==="admin" &&<Route extact path="/admin/user/:id" Component={UpdateUser} />} 
      {isAuthenticated && user.role==="admin" &&<Route extact path="/admin/reviews" Component={ProductReviews} />}                          
      </Routes>

      </Elements>
      <Footer />
    </Router>
  );
}
 
export default App;
