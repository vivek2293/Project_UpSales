import React from "react";
import ReactDOM from 'react-dom/client';
import "../css/secondary.css"

export default function Secondary() {
    return (
        <div className="row">
            <div className="col-md-6 mt-2">
                <div className="row heading ms-1"><h2>You do the business, we will handle the money.</h2></div>
                <div className="row sub-text ms-3">With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</div>
                <div className="row justify-content-center"><button type="button" class="btn random-btn">Get Started</button></div>
            </div>
            <div className="col-md-6 mt-2">
                <div className="row">
                    <div className="m-1">
                        <div className="col-md-2"></div>
                        <div className="col-md-10">
                            <h3>Rewards</h3>
                            The best credit cards offer some tantalizing combinations of promotions and prizes
                        </div>
                    </div>

                    <div className="m-1">
                        <div className="col-md-2"></div>
                        <div className="col-md-10">
                            <h3>100% Secured</h3>
                            We take proactive steps make sure your information and transactions are secure.
                        </div>
                    </div>

                    <div className="m-1">
                        <div className="col-md-2"></div>
                        <div className="col-md-10">
                            <h3>Balance Transfer</h3>
                            A balance transfer credit card can save you a lot of money in interest charges.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}