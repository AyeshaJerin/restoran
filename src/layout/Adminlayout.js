import React from 'react';
import Header from '../Admin/component/Header'
import Footer from '../Admin/component/Footer'
 
function Adminlayout({children}) {
  return (
    <div className='container'>
      <Header />
      <div className='pt-5 mt-3'>
        {children}
      </div>
      
      <Footer />
    </div>     
     
  )
}

export default Adminlayout