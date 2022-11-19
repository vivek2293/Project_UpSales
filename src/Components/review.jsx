import React from "react";
import ReactDOM from 'react-dom/client';

export default function Review() {
    return (
        <div>
            <div className='row d-flex flex-row custom-card1 mt-5 mx-5'>
                <div className='col-md-5 p-4'><h2>What people are saying about us</h2></div>
                <div className='col-md-7 p-4'>Everything you need to accept card payments and grow your business anywhere on the planet.</div>
            </div>
            <div className='row d-flex flex-wrap justify-content-around mt-5'>
                <div className='col-md-3 m-4 custom-card'>
                    <img></img>
                    <p>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver</p>
                    <div className='d-flex flex-row'>
                        <img></img>
                        <div>
                            <h4>Name</h4>
                            <p>founder & leader</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 m-4 custom-card'>
                    <img></img>
                    <p>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver</p>
                    <div className='d-flex flex-row'>
                        <img></img>
                        <div>
                            <h4>Name</h4>
                            <p>founder & leader</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 m-4 custom-card'>
                    <img></img>
                    <p>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver</p>
                    <div className='d-flex flex-row'>
                        <img></img>
                        <div>
                            <h4>Name</h4>
                            <p>founder & leader</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}