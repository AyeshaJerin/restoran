// import * as React from 'react';
// import Weblayout from '../layout/Weblayout';
import React, { useEffect, useState } from 'react';
import Weblayout from '../layout/Weblayout';
import axios from '../Admin/component/axios';
import { useCart } from "react-use-cart";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



function Menu(){



    const { addItem } = useCart();
    
        const [foods,setFoods]=useState([]);
        const [cat,setCat]=useState([]);
        const[tabKey,setTabKey]=useState(1);
    
        useEffect(() => {
            getFoods(1);
            getCats();
        }, []);
        const getFoods = async (catId) => {
            let feat = await axios.get(`front_api/foods.php?category_id=${catId}`)
            setFoods(feat.data);
            setTabKey(catId);
        }
    
        const getCats = async (e) => {
            let res = await axios.get(`front_api/categories.php`)
            setCat(res.data);
        }

    return(
        <Weblayout>

         <div className="container-xxl bg-white p-0">
        
        <div class="container-xxl py-5 bg-dark hero-header mb-5">
                <div class="container text-center my-5 pt-5 pb-4">
                    <h1 class="display-3 text-white mb-3 animated slideInDown">Food Menu</h1>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center text-uppercase">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">Pages</a></li>
                            <li class="breadcrumb-item text-white active" aria-current="page">Menu</li>
                        </ol>
                    </nav>
                </div>
            </div>

        
        
        


        
        {/* <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>
                    <h1 className="mb-5">Most Popular Items</h1>
                </div>
                <div className="tab-className text-center wow fadeInUp" data-wow-delay="0.1s">
                    <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                        <li className="nav-item">
                            <a className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
                                <i className="fa fa-coffee fa-2x text-primary"></i>
                                <div className="ps-3">
                                    <small className="text-body">Popular</small>
                                    <h6 className="mt-n1 mb-0">Breakfast</h6>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-2">
                                <i className="fa fa-hamburger fa-2x text-primary"></i>
                                <div className="ps-3">
                                    <small className="text-body">Special</small>
                                    <h6 className="mt-n1 mb-0">Launch</h6>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-3">
                                <i className="fa fa-utensils fa-2x text-primary"></i>
                                <div className="ps-3">
                                    <small className="text-body">Lovely</small>
                                    <h6 className="mt-n1 mb-0">Dinner</h6>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div id="tab-1" className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src="assets/img/menu-1.jpg" alt="" style={{width: '80px;'}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Chicken Burger</span>
                                                <span className="text-primary">$115</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src="assets/img/menu-2.jpg" alt="" style={{width: '80px;'}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Chicken Burger</span>
                                                <span className="text-primary">$115</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src="assets/img/menu-3.jpg" alt="" style={{width: '80px;'}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Chicken Burger</span>
                                                <span className="text-primary">$115</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src="assets/img/menu-4.jpg" alt="" style={{width: '80px;'}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Chicken Burger</span>
                                                <span className="text-primary">$115</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src="assets/img/menu-5.jpg" alt="" style={{width: '80px;'}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Chicken Burger</span>
                                                <span className="text-primary">$115</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src="assets/img/menu-6.jpg" alt="" style={{width: '80px;'}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Chicken Burger</span>
                                                <span className="text-primary">$115</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src="assets/img/menu-7.jpg" alt="" style={{width: '80px;'}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Chicken Burger</span>
                                                <span className="text-primary">$115</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src="assets/img/menu-8.jpg" alt="" style={{width: '80px;'}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Chicken Burger</span>
                                                <span className="text-primary">$115</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-2" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-1.jpg" alt="" style={{width: '80px;'}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Chicken Burger</span>
                                                <span className="text-primary">$115</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-2.jpg" alt="" style={{width: '80px;'}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Chicken Burger</span>
                                                <span className="text-primary">$115</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-3.jpg" alt="" style={{width: '80px;'}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Chicken Burger</span>
                                                <span className="text-primary">$115</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-4.jpg" alt="" style={{width: '80px;'}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Chicken Burger</span>
                                                <span className="text-primary">$115</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-5.jpg" alt="" style={{width: '80px;'}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Chicken Burger</span>
                                                <span className="text-primary">$115</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-6.jpg" alt="" style={{width: '80px;'}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Chicken Burger</span>
                                                <span className="text-primary">$115</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-7.jpg" alt="" style={{width: '80px;'}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Chicken Burger</span>
                                                <span className="text-primary">$115</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-8.jpg" alt="" style={{width: '80px;'}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Chicken Burger</span>
                                                <span className="text-primary">$115</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-3" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-1.jpg" alt="" style={{width: '80px;'}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Chicken Burger</span>
                                                <span className="text-primary">$115</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-2.jpg" alt="" style={{width: '80px;'}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Chicken Burger</span>
                                                <span className="text-primary">$115</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-3.jpg" alt="" style={{width: '80px;'}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Chicken Burger</span>
                                                <span className="text-primary">$115</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-4.jpg" alt="" style={{width: '80px;'}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Chicken Burger</span>
                                                <span className="text-primary">$115</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-5.jpg" alt="" style={{width: '80px;'}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Chicken Burger</span>
                                                <span className="text-primary">$115</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-6.jpg" alt="" style={{width: '80px;'}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Chicken Burger</span>
                                                <span className="text-primary">$115</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-7.jpg" alt="" style={{width: '80px;'}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Chicken Burger</span>
                                                <span className="text-primary">$115</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-8.jpg" alt="" style={{width: '80px;'}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Chicken Burger</span>
                                                <span className="text-primary">$115</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        
         <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h5 className="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>
                            <h1 className="mb-5">Most Popular Items</h1>
                        </div>
                            
                        <div className="tab-className text-center wow fadeInUp">
                            <Tabs activeKey={tabKey} onSelect={(k) =>getFoods(k)} id="uncontrolled-tab-example" className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                                {
                                    cat.length > 0 && cat.map((c,k)=>
                                        <Tab eventKey={c.id} title={c.name} onClick={()=>getFoods(c.id)}>
                                            <div className="row g-4" key={k.id}>
                                                {
                                                    foods.length > 0 && foods.map((f,fk) =>
                                                        <div className="col-lg-6" key={fk}>
                                                            <div className="d-flex align-items-center">
                                                                <img className="flex-shrink-0 img-fluid rounded" width="100px" src={`${process.env.REACT_APP_API_URL}${f.image}`} alt="" style={{width: '80px;'}}/>
                                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                                        <span>{f.title}</span>
                                                                        <span className="text-primary">{f.price}</span>
                                                                    </h5>
                                                                    <small className="fst-italic">{f.description}
                                                                        <button className='btn btn-link float-end' onClick={() => addItem(f)}>
                                                                            <i className="fa fa-cart-plus text-primary"></i>
                                                                        </button>
                                                                    </small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                )}
                                            </div>
                                        </Tab>
                                    )
                                }
                            </Tabs>
                        </div>
                    </div>
                </div>

        
    </div>


            

    </Weblayout>
    );
}
export default Menu;