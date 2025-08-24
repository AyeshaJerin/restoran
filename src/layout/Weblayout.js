import React from 'react';
import { CartProvider, useCart } from "react-use-cart";
import Header from '../component/Header'
import Footer from '../component/Footer'

import '../assets/lib/animate/animate.min.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/style.css';
import '../assets/importfile.css';


 
function Weblayout({children}) {
  return (
    <>
        <Header />
        {children}
        <Footer />
    </>     
     
  )
}

export default Weblayout