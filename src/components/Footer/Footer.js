import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <>
        <footer id="footer" className="footer">
            <div className="ecommerce container footer-top">
                <div className="row gy-4">
                    <div className="col-md-12 footer-about">
                        <Link to="/" className="logo d-flex align-items-center justify-content-center">Ecommerce</Link>
                        <p className="text-center">
                            Shop , your favourite products
                        </p>
                    </div>

                    {/* <div className="col-lg-2 col-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li>
                            <a href="#">Home</a>
                            </li>
                            <li>
                            <a href="#">About us</a>
                            </li>
                            <li>
                            <a href="#">Services</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-6 footer-links">
                        <h4>Our Services</h4>
                        <ul>
                            <li>
                            <a href="#">Learing Purpose</a>
                            </li>
                            <li>
                            <a href="#">Learing Purpose</a>
                            </li>
                            <li>
                            <a href="#">Learing Purpose</a>
                            </li>
                        </ul>
                    </div> */}

                    {/* <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                        <h4>Contact Us</h4>
                        <p>India</p>
                        <p>Mumbai</p>
                        <p className="mt-4">
                            <strong>Phone:</strong> <span>+91 9876543210</span>
                        </p>
                        <p>
                            <strong>Email:</strong> <span>info@example.com</span>
                        </p>
                    </div> */}
                </div>  
            </div>

            <div className="container copyright text-center mt-4">
                <p>
                    © <span>Copyright</span> <strong className="px-1">Ecommerce</strong> - 
                    <span> Designed for learning purpose only</span>
                </p>
                <div className="credits">
                    Designed by <span>Ecommerce</span>
                </div>
            </div>
        </footer>
      </>
    );
}


export default Footer;