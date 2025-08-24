import * as React from 'react';
import Weblayout from '../layout/Weblayout';
import { useCart } from "react-use-cart";
import axios from '../Admin/component/axios';

function Checkout () {
    const {
      isEmpty,
      items,
      emptyCart,
      cartTotal,
      metadata 
    } = useCart();

    
    const saveCheckout=async (e) => {
      e.preventDefault();

      let datas={
        customer_name:e.target.customer_name.value,
        customer_contact:e.target.customer_contact.value,
        customer_email:e.target.customer_email.value,
        billing_address:e.target.billing_address.value,
        billing_city:e.target.billing_city.value,
        // shipping_address:e.target.shipping_address.value,
        // shipping_city:e.target.shipping_city.value,
        sub_total:cartTotal,
        discount:metadata.discount ?? 0,
        grand_total:metadata.discount ? (cartTotal - metadata.discount ?? 0) : cartTotal,
        cart_details:JSON.stringify(items)
      }
      const formData = new FormData();
      for (const property in datas) {
        formData.append(property, datas[property])
      }

      try{
          let url=`front_api/checkout.php`
          
          let res= await axios.post(url,formData);
          // console.log(res);
          // return false;
          if(res.data.error == 1){
            alert(res.data.message)
          }else{
            emptyCart();
            window.location.href='/';
          }
        } 
        catch(e){
          console.log(e);
        }
    }

    
    return(
        <Weblayout>

      <div class="container-xxl py-5 bg-dark hero-header mb-5">
                <div class="container text-center my-5 pt-5 pb-4">
                    <h1 class="display-3 text-white mb-3 animated slideInDown">Checkout</h1>
                    {/* <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center text-uppercase">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">Pages</a></li>
                            <li class="breadcrumb-item text-white active" aria-current="page">Menu</li>
                        </ol>
                    </nav> */}
                </div>
            </div>





          <section className="banner_area">
            <div className="banner_inner d-flex align-items-center">
              <div className="container">
                <div
                  className="banner_content d-md-flex justify-content-between align-items-center"
                >
                  <div className="mb-3 mb-md-0">
                    <h2>Product Checkout</h2>
                    <p>You're almost done! Confirm your order and continue to secure checkout</p>
                  </div>
                  {/* <div className="page_link">
                    <a href="index.html">Home</a>
                    <a href="checkout.html">Product Checkout</a>
                  </div> */}
                </div>
              </div>
            </div>
          </section>
    
          <section className="checkout_area section_gap">
            <div className="container">
              
              <div className="billing_details">
                <div className="row">
                  <div className="col-lg-8">
                    <h3>Billing Details</h3>
                    <form
                      className="row contact_form"
                      onSubmit={saveCheckout}
                    >
                      
                      <div className="col-md-12 form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="customer_name"
                          name="customer_name"
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div className="col-md-6 form-group p_star">
                        <input
                          type="text"
                          className="form-control"
                          id="customer_contact"
                          name="customer_contact"
                          placeholder="Phone number"
                        />
                        <span
                          className="placeholder"
                          data-placeholder="Phone number"
                        ></span>
                      </div>
                      <div className="col-md-6 form-group p_star">
                        <input
                          type="text"
                          className="form-control"
                          id="customer_email"
                          name="customer_email"
                          placeholder="Email Address"
                        />
                        <span
                          className="placeholder"
                          data-placeholder="Email Address"
                        ></span>
                      </div>
                      
                      <div className="col-md-12 form-group p_star">
                        <input
                          type="text"
                          className="form-control"
                          id="billing_address"
                          name="billing_address"
                          placeholder="Address"
                        />
                        <span
                          className="placeholder"
                          data-placeholder="Address line 01"
                        ></span>
                      </div>
                      
                      <div className="col-md-12 form-group p_star">
                        <select className="form-control" name="billing_city">
                          <option value="1">Dhaka</option>
                          {/* <option value="2">Chattogram</option> */}
                        </select>
                      </div>
                      {/* <div className="col-md-12 form-group p_star">
                          <h3>Shipping Details</h3>
                      </div>
                      <div className="col-md-12 form-group p_star">
                        <input
                          type="text"
                          className="form-control"
                          id="shipping_address"
                          name="shipping_address"
                        />
                        <span
                          className="placeholder"
                          data-placeholder="Address line 01"
                        ></span>
                      </div>
                      
                      <div className="col-md-12 form-group p_star">
                        <select className="form-control" name="shipping_city">
                          <option value="1">Dhaka</option>
                          <option value="2">Chattogram</option>
                        </select>
                      </div> */}
                      <button type='submit' className="main_btn" >Submit</button>
                    </form>
                  </div>
                  <div className="col-lg-4">
                    <div className="order_box">
                      <h2>Your Order</h2>

                      <ul className="list">
                        <li>
                          <a href="#"
                            >Product
                            <span>Total</span>
                          </a>
                        </li>
                        {!isEmpty && items.map((d, key) =>
                          <li key={d.id}>
                            <a href="#"
                              >{d.title}
                              <span className="middle"> {d.quantity}x{d.price}</span>
                              <span className="last">={d.itemTotal}</span>
                            </a>
                          </li>
                        )}
                        
                      </ul>
                      <ul className="list list_2">
                        <li>
                          <a href="#"
                            >Subtotal
                            <span>{cartTotal}</span>
                          </a>
                        </li>
                        <li>
                          <a href="#"
                            >Discount
                            <span>{metadata.discount ?? 0}</span>
                          </a>
                        </li>
                        <li>
                          <a href="#"
                            >Total
                            <span>{metadata?.discount ? cartTotal - metadata?.discount ?? 0 : cartTotal}</span>
                          </a>
                        </li>
                      </ul>



                    {/* <table className='table'>
                                <thead>
                                    <tr>
                                        
                                        <a href="#"
                                          >Product
                                              <span>Total</span>
                                        </a>
                                    </tr>
                                    
                                    <tr>
                                      
                                    </tr>
                                    </thead>
                    </table> */}
                      
                    </div>
                  </div>


                  


                </div>
              </div>
            </div>
          </section>

        </Weblayout>
    )
}
export default Checkout;

