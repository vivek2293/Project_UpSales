import React from "react";
import "../css/review.css";

export default function Review() {
    return (
        <div>
            <div className='row d-flex flex-row custom-card1 mt-5 mx-5 justify-content-around py-2'>
                <div className='col-md-6 p-4'><h2 id="heading">What people are saying about us</h2></div>
                <div className='col-md-5 p-4 py-4'><p id="sub-text" className="mont">Has everything you need to keep track of your sales and grow your business anywhere on the planet.</p></div>
            </div>
            <div className='row d-flex flex-wrap justify-content-around mt-5'>
                <div className='col-md-3 m-4 custom-card' id="card1">
                    <img></img>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum explicabo error repudiandae illum animi cum odio eum, nemo ipsam aperiam?</p>
                    <div className='d-flex flex-row'>
                        <div>
                            <h4>John Doe</h4>
                            <p>Founder</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 m-4 custom-card' id="card2">
                    <img></img>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum explicabo error repudiandae illum animi cum odio eum, nemo ipsam aperiam?</p>
                    <div className='d-flex flex-row'>
                        <div>
                            <h4>Bob Ziroll</h4>
                            <p>Developer</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 m-4 custom-card' id="card3">
                    <img></img>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum explicabo error repudiandae illum animi cum odio eum, nemo ipsam aperiam?</p>
                    <div className='d-flex flex-row'>
                        <div>
                            <h4>Per Harald</h4>
                            <p>CEO</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}