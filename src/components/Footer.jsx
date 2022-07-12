import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div style={{ paddingTop: "50px" }}>
      <footer class="footer-container typefooter-1">
        <div class="container">
          <div class="row footer-middle">
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-style">
              <div class="box-footer box-infos">
                <div class="module">
                  <h3 class="modtitle">Contact us</h3>
                  <div class="modcontent">
                    <ul class="list-icon">
                      <li>
                        <span class="icon pe-7s-map-marker"></span>
                        Бишкек
                      </li>
                      <li>
                        <span class="icon pe-7s-call"></span>
                        <a href="#">54154545</a>
                      </li>
                      <li>
                        <span class="icon pe-7s-mail"></span>
                        <a href="mailto:contact@opencartworks.com">
                          contact@opencartworks.com
                        </a>
                      </li>
                      <li>
                        <span class="icon pe-7s-alarm"></span>7 Days a week from
                        10-00 am to 6-00 pm
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 col-style">
              <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 col-style">
                  <div class="box-information box-footer">
                    <div class="module clearfix">
                      <h3 class="modtitle">Information</h3>
                      <div class="modcontent">
                        <ul class="menu">
                          <li>
                            <a href="#">About Us</a>
                          </li>
                          <li>
                            <a href="#">FAQ</a>
                          </li>
                          <li>
                            <a href="#">Warranty And Services</a>
                          </li>
                          <li>
                            <a href="#">Support 24/7 page</a>
                          </li>
                          <li>
                            <a href="#">Product Registration</a>
                          </li>
                          <li>
                            <a href="#">Product Support</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 col-style">
                  <div class="box-account box-footer">
                    <div class="module clearfix">
                      <h3 class="modtitle">My Account</h3>
                      <div class="modcontent">
                        <ul class="menu">
                          <li>
                            <a href="#">Brands</a>
                          </li>
                          <li>
                            <a href="#">Gift Certificates</a>
                          </li>
                          <li>
                            <a href="#">Affiliates</a>
                          </li>
                          <li>
                            <a href="#">Specials</a>
                          </li>
                          <li>
                            <a href="#">FAQs</a>
                          </li>
                          <li>
                            <a href="#">Custom Link</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 col-clear">
                  <div class="box-service box-footer">
                    <div class="module clearfix">
                      <h3 class="modtitle">Categories</h3>
                      <div class="modcontent">
                        <ul class="menu">
                          <li>
                            <a href="#">Event & Party Supplies</a>
                          </li>
                          <li>
                            <a href="#">Home Improvement</a>
                          </li>
                          <li>
                            <a href="#">Lamps & Light Fixtures</a>
                          </li>
                          <li>
                            <a href="#">Kitchen & Bath Fixtures</a>
                          </li>
                          <li>
                            <a href="#">Customer Service</a>
                          </li>
                          <li>
                            <a href="#">Kitchen & Dining</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="container">
            <div class="row">
              <div class="copyright col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <p>
                  Autoparts © 2019 Demo Store. All Rights Reserved. Designed by{" "}
                  <a href="http://www.opencartworks.com/" target="_blank">
                    OpenCartWorks.Com
                  </a>
                </p>
              </div>
              <div class="payment-w col-lg-4 col-md-4 col-sm-12 col-xs-12">
                {/* <img src="image/catalog/demo/payment/payment.png" alt="imgpayment"> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div class="back-to-top">
          <i class="fa fa-angle-up"></i>
        </div> */}
      </footer>
    </div>
  );
};

export default Footer;
