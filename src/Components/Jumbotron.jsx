import React from "react";
import "../css/jumbotron.css"

export default function Jumbotron() {
    return (
        <div>
<section className="jumbotron-up">
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xs-12 col-sm-6 mobile-flex m-5">
                    <div className="mb-2">
                        <p className="subject">Grand Sale Offer</p>
                    </div>
                    <h1 className="title mb-5 mb-sm-6">Summer Time: Grab this deal right now, tomorrow might be gone!</h1>
                    <a className="btn-offer" href="/" data-slug="See our offer" tabindex="0">See Offer</a>

                    <div className="mt-5">
                        <div className="money-back-container">
                            <div>
                                <span className="info-icon"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z" />
                                    </svg></span><span className="vertical-middle money-back c-bw-12">Covered by the 30-day money-back guarantee policy. <a href='/' className='more-info-link'>More info</a></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 pt-7 pt-sm-0">
                    <div className="center-block img-responsive">
                        
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>
        </div>
    )
}