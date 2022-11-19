import React from 'react';
import "../css/dashboard.css"
import Charts from './Charts';
import Structure from './Structure';

export default function Dashboard() {
    return (
        <>
            <div className='row p-4'>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb px-5">
                        <li className="breadcrumb-item active">Admin</li>
                        <li className="breadcrumb-item" id="curlabel" aria-current="page">Dashboard</li>
                    </ol>
                </nav>
            </div>

            <div className='d-flex justify-content-center'>
                <div className='col-md-11 custom-card1 justify-content-around'>
                    <div className='col-md-6 p-4'><h2 id="heading">Dashboard</h2></div>
                    <div className='col-md-5'><p id="sub-text" className="mont"></p></div>
                </div>
            </div>


            <div className='row px-5 justify-content-around my-5'>
                <div className='col-md-3 p-3 card-dash'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <p>Clients</p>
                            <h2>512</h2>
                        </div>
                        <div className='col-md-4'>

                        </div>
                    </div>
                </div>
                <div className='col-md-3 p-3 card-dash'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <p>Clients</p>
                            <h2>512</h2>
                        </div>
                        <div className='col-md-4'>

                        </div>
                    </div>
                </div>
                <div className='col-md-3 p-3 card-dash'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <p>Clients</p>
                            <h2>512</h2>
                        </div>
                        <div className='col-md-4'>

                        </div>
                    </div>
                </div>
            </div>

            <div className='d-flex justify-content-center m-5'>
                <div className='col-md-11 p-3 card-dash1 mx-5'>
                    <h2 className='ps-5 pt-3 '>Visual Representation: </h2>
                    <Charts />
                </div>
            </div>

            <div className='d-flex justify-content-center m-5'>
                <div className='col-md-11 p-5 card-dash1 mx-5'>
                    <Structure />
                </div>
            </div>

        </>
    )
}