import React from "react";
import"../css/footer.css";

export default function Footer() {
    return (
        <>
            <hr />
            <footer>
                <div className="footer-div">
                    <div className="logo">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-instagram"></i></a>
                        <a href="#"><i className="fa fa-linkedin"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                    </div>

                    <div className="row">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div className="copyright">
                        Bill Splitter Copyright © 2022 GDSC - All rights reserved
                    </div>

                </div>
            </footer>
        </>

    )
}