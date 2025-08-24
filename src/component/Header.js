
import * as React from 'react';
import {Link,useLocation }from 'react-router'
import { useCart } from "react-use-cart";


function Header(){



    const { totalUniqueItems } = useCart();

    return(
       <>

        {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}}role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div> */}



         <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
                <a href="" className="navbar-brand p-0">
                    <h1 className="text-primary m-0"><i className="fa fa-utensils me-3"></i>Restoran</h1>
                     <img src="assets/img/logo.png" alt=""/> 
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0 pe-4">

                        <Link to= {"/"} className="nav-item nav-link"> Home </Link>
                        <Link to={"/about"} className="nav-item nav-link"> About</Link>
                        <Link to={"/service"} className="nav-item nav-link"> Service</Link>
                        <Link to={"/menu"} className="nav-item nav-link"> Menu</Link>
                        {/* <Link to={"/Shop_Category"} className="nav-item nav-link"> Category</Link> */}
                        <Link to={"/contact"} className="nav-item nav-link"> Contact</Link>
                        <Link to={'/cart'} className="nav-item nav-link">
                            {totalUniqueItems} 
                            <i className="fa fa-cart-plus text-primary"></i>
                        </Link>

                    <Link to= {"/checkout"} className="nav-item nav-link"> Checkout </Link>
                     

                    </div>
                    {/* <a href="" className="btn btn-primary py-2 px-4">Book A Table</a> */}
                </div>
            </nav>

       
       </>
    )
}

export default Header;