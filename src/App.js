// import * as React from 'react';
import React, { useEffect, useState } from 'react';
import {Route,Routes } from 'react-router';
import { CartProvider, useCart } from "react-use-cart";

import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Service from './pages/Service';
import About from './pages/About';
import Home from './pages/Home';
import Foods_page from './pages/Foods_page';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
// import Foods from './pages/Foods';


/* admin route */
import Login from './Admin/Login';
import Register from './Admin/Register';
import Dashboard from './Admin/Dashboard';
import Users from './Admin/Users';
import Categories from './Admin/Categories';
import Foods from './Admin/Foods';
import Coupon from './Admin/Coupon';
import Protected from './Admin/protected';
import Orders from './Admin/Orders';

function App(){

    const [ isSignedIn, setIsSignedIn ] = useState(()=> {
    /* if you want, user will be logged in until they logout*/
    //return localStorage.getItem("access_token") || false;
    /* if you want, user will be logged when they close the browser*/
    return sessionStorage.getItem("access_token") || false;
  });
    return(
        <>
        <CartProvider>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/cart' element={<Cart/>}/>

            <Route path='/checkout' element={<Checkout/>}/>
            
            <Route path="/foods_page" element={<Foods_page />} />
            {/* <Route path="/foods" element={<Foods />} /> */}

            <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* Admin route */}
          <Route path= {"/admin/dashboard"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Dashboard /> 
           </Protected>
           } />
          <Route path= {"/admin/user"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Users /> 
           </Protected>
           } />
            {/* Admin route */}
          {/* <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/user" element={<Users />} /> */}

        <Route path= {"/admin/categories"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Categories /> 
           </Protected>
           } />
          {/* <Route path="/admin/add-user" element={<Useradd />} /> */}
          <Route path= {"/admin/foods"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Foods /> 
           </Protected>
           } />

           <Route path= {"/admin/coupon"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Coupon /> 
           </Protected>
           } />

           <Route path= {"/admin/orders"} element={
                  <Protected  isSignedIn= {isSignedIn} >
                    <Orders /> 
                  </Protected>
                  } />
                  
         </Routes>
         </CartProvider>

        
        </>
    );
}
export default App;