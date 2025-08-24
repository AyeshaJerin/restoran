import React, { useEffect, useState } from 'react';
import Weblayout from '../layout/Weblayout';
import axios from '../Admin/component/axios';
import { useCart } from "react-use-cart";
function Foods_page() {
const [foods,setFoods]=useState([]);
   useEffect(() => {
       getCourses();
     }, []);
   
     const getCourses = async (e) => {
       let res = await axios.get(`front_api/foods.php`)
       setFoods(res.data);
     }

     const { addItem } = useCart();
  return (
    <Weblayout>
      <main class="main">
        <div class="page-title">
            <div class="heading">
                <div class="container">
                    <div class="row d-flex justify-content-center text-center">
                        <div class="col-lg-8">
                        <h1>Courses</h1>
                        <p class="mb-0">Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="breadcrumbs">
                <div class="container">
                <ol>
                    <li><a href="index.html">Home</a></li>
                    <li class="current">Foods</li>
                </ol>
                </div>
            </nav>
        </div>
        <section id="courses" class="courses section">
            <div class="container">

                <div class="row">

                {foods.length > 0 && foods.map((d, key) =>
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                    <div className="course-item">
                    <img src={`${process.env.REACT_APP_API_URL}${d.image}`} className="img-fluid" alt="..."/>
                    <div className="course-content">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                        <p className="category">{d.cat_name}</p>
                        <p className="price">{d.price}</p>
                        </div>

                        <h3><a href="course-details.html">{d.title}</a></h3>
                        <p className="description">{d.description}</p>
                        <div className="trainer d-flex justify-content-between align-items-center">
                        
                        <div className="trainer-rank d-flex align-items-center">
                            <button onClick={() => addItem(d)}>Add to cart</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                )}

                </div>

            </div>
        </section>
    </main>

    </Weblayout>
    
  );
}


export default Foods_page;
