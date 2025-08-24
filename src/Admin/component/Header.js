import * as React from 'react';
import { Link,useLocation } from 'react-router'
import { useNavigate } from 'react-router-dom';


function Header(){

    const navigate=useNavigate();
  const logout = ()=>{
    localStorage.removeItem("access_token");
    localStorage.removeItem("userdata");
    navigate('/login')
  }
    return(
        <>
          {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
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
                                  <div class="nav-item dropdown">
                                      <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                      <div class="dropdown-menu m-0">
                                          <a href="booking.html" class="dropdown-item">Booking</a>
                                          <a href="team.html" class="dropdown-item">Our Team</a>
                                          <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                                      </div>
                                  </div>
                                  
                                  <Link to={"/contact"} className="nav-item nav-link"> Contact</Link>
                              </div>
                              <a href="" className="btn btn-primary py-2 px-4">Book A Table</a>


                              <button className="btn btn-link" onClick={logout}>Logout</button>
                          </div>
          </nav> */}
          

          <nav className="navbar navbar-expand-sm bg-light navbar-light">
              <div className="container-fluid">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/admin/dashboard"}>Dashboard</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/admin/user"}>User</Link>
                  </li>


                  <li className="nav-item">
                    <Link className="nav-link" to={"/admin/categories"}>Categories</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to={"/admin/foods"}>Foods</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to={"/admin/coupon"}>Coupon</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to={"/admin/orders"}>Orders</Link>
                  </li>
                  
                </ul>
                <button className="btn btn-link" onClick={logout}>Logout</button>
              </div>
          </nav>
        </>
    )
}


export default Header;