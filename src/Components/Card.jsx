import React from 'react';
import ReactDOM from 'react-dom/client';
import "../css/card.css";

export default function Card() {
    return (
        <div className='row'>
            <div className='col-md-6'>
                <div className='row heading'><h2>Find a better card deal in few easy steps</h2></div>
                <div className='row subtext'>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</div>
                <div className='row'><button type="button" class="btn custom-btn">Primary</button></div>
            </div>
            <div className='col-md-6'>
                <img></img>
            </div>
        </div>
    )
}