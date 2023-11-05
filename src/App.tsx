import React, {Fragment} from 'react';
import {Button, Col, Container, Form, Nav, Navbar, Row} from "react-bootstrap";

function App() {

  return (
      <Fragment>
        <Navbar expand="lg" className="e-navbar-bg text-white">
          <Container>
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="d-flex flex-lg-row flex-sm-column justify-content-between container text-white">
                  <Nav.Link href="#home" className="text-white"><i className="bi bi-patch-check"></i> 30-DAY SATISFACTION GUARANTEE</Nav.Link>
                  <Nav.Link href="#link" className="text-white text-uppercase d-flex align-items-center gap-1"><img src="images/ph_truck-light.svg" alt=""/> Free delivery on orders over $40.00</Nav.Link>
                  <Nav.Link href="#link" className="text-white text-uppercase"><i className="bi bi-heart"></i> 50.000+ HAPPY CUSTOMERS</Nav.Link>
                  <Nav.Link href="#link" className="text-white text-uppercase d-flex align-items-center gap-1"><img src="images/100.svg" alt=""/>  100% Money Back Guarantee</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
          <Container className="d-flex justify-content-between my-4">
              <img src="images/logo.svg" alt=""/>
              <img src="images/antivirus.svg" alt=""/>
          </Container>
          <Container className="text-center">
              <h1 className="fw-light lead fs-1" style={{
                  fontSize: "48px",
                  fontWeight: "400"
              }}>Wait ! your order in progress.</h1>
              <p className="fw-light" style={{
                  fontSize: "24px",
                  fontWeight: "400"
              }}>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
          </Container>
          <Navbar expand="lg" className="bg-white py-3">
              <Container>
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="d-flex justify-content-between container text-white">
                          <Nav.Link href="#" className="d-flex align-items-center gap-3"><span className="e-progress-icon-check" > <i className="bi bi-check"></i></span> Step 1 : Cart Review</Nav.Link>
                          <Nav.Link href="#" className="d-flex align-items-center gap-3"><span className="e-progress-icon-check" > <i className="bi bi-check"></i></span> Step 2 : Checkout</Nav.Link>
                          <Nav.Link href="#" className="d-flex align-items-center gap-3"><span className="e-progress-icon-text" > 3 </span> <span className="fw-bold">Step 3 : Special Offer</span></Nav.Link>
                          <Nav.Link href="#" className="d-flex align-items-center gap-3"><span className="e-progress-icon-outline" > 4 </span> Step 4 : Confirmation</Nav.Link>
                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>

          <Container className="e-item-wrapper px-4 py-4">
              <Row>
                  <Col md={6}>
                      <Container>
                          <Row>

                              <Col md={12} className="mb-4 p-2">
                                  <img src="images/mobile4.png" className="w-100"  />
                              </Col>
                              <Col md={12} className="bg-white px-4 py-4 rounded-2 d-none d-lg-block d-sm-none">

                                  <div className="d-flex flex-wrap gap-2 align-items-center">
                                      <img src="images/client.png" className="rounded-circle"/>
                                      <div className="d-flex flex-column align-items-baseline mt-3">
                                      <span className="d-flex">
                                          <i className="bi bi-star-fill text-warning"></i>
                                          <i className="bi bi-star-fill text-warning"></i>
                                          <i className="bi bi-star-fill text-warning"></i>
                                      </span>
                                          <div className="d-flex gap-2">
                                              <p className="e-customer-name">Ken T.</p>
                                              <span className="d-flex e-customer-green " >
                                                  <i className="bi bi-patch-check-fill"></i> Verified Customer
                                              </span>
                                          </div>
                                      </div>

                                  </div>


                                  <div className="e-review-text mt-3 fw-light ">
                                          “As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”
                                  </div>
                              </Col>
                          </Row>
                      </Container>


                  </Col>
                  <Col md={6}>

                      <Row>
                          <Col lg={12} md={12}>
                              <h1 className="e-product-title">
                                  <span className="">ONE TIME ONLY</span> special price for 6 extra Clarifion for only $14 each ($84.00 total!)
                              </h1>
                          </Col>
                          <Col lg={3} md={6} sm={6} className="my-3">
                              <div className="e-product-sub-image">
                                  <img className="" height={134} width={134} src="images/mobile.png"/>
                              </div>
                          </Col>
                          <Col lg={9} md={6} sm={6} className="my-3">
                              <div className="d-flex justify-content-between align-items-baseline">
                                  <div>
                                      <h3 className="e-product-title-sub mb-2">Clarifion Air Ionizer</h3>
                                      <span className="d-flex gap-1 mb-2">
                                  <i className="bi bi-star-fill text-warning"></i>
                                  <i className="bi bi-star-fill text-warning"></i>
                                  <i className="bi bi-star-fill text-warning"></i>
                                  <i className="bi bi-star-fill text-warning"></i>
                                  <i className="bi bi-star-fill text-warning"></i>
                              </span>
                                   <div className="d-flex gap-2 align-items-baseline fw-lighter">
                                       <input type="radio" checked/>
                                       <label>
                                           12 left in Stock
                                       </label>
                                   </div>
                                  </div>


                                  <div className="d-flex gap-3 align-items-center">
                                      <span className="e-price-discount">$180</span>
                                      <span className="e-price">$84</span>
                                  </div>
                              </div>
                              <div className="mt-3 fw-light">
                                  Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.
                              </div>
                          </Col>
                          <Col className="my-3" md={12}>
                              <div >
                                  <div className="e-product-feat-list d-flex align-items-center gap-2 mb-3">
                                     <img src="images/tick-circle.svg"/> Negative Ion Technology may <span>help with allergens</span>
                                  </div>
                                  <div className="e-product-feat-list d-flex align-items-center gap-2 mb-3">
                                      <img src="images/tick-circle.svg"/> Designed for <span>air rejuvenation</span>
                                  </div>
                                  <div className="e-product-feat-list d-flex align-items-center gap-2 mb-3">
                                      <img src="images/tick-circle.svg"/> <span>Perfect for every room</span> in all types of places.
                                  </div>
                              </div>
                          </Col>
                          <Col className="my-3" md={12}>
                              <div className="e-coupon-sect d-flex align-items-center gap-4">
                                  <span className="e-progress-icon-percent"> <i className="bi bi-percent"></i></span> <div>Save <span>53%</span> and get <span>6 extra Clarifision</span> for only <span>$14 Each.</span></div>
                              </div>
                          </Col>
                          <Col className="my-3" md={12}>
                              <div className="e-prod d-flex align-items-center gap-4">
                                  <Button variant="light" className="e-product-btn w-100 py-sm-3 px-sm-3 py-lg-3 py-lg-3">
                                      Yes - Claim my discount <i className="bi bi-arrow-right"></i>
                                  </Button>
                              </div>
                              <div className="border py-2 px-2 d-flex justify-content-between border-1 mt-3 e-product-finale">
                                  <span>Free shipping</span>
                                  |
                                  <span><i className="bi bi-lock"></i> Secure 256-bit SSL encryption.</span>
                                  |
                                  <span><img src="images/updated.svg"/></span>
                              </div>
                              <div className="d-flex justify-content-center mt-3">
                                  <Button variant="link" className="e-nobtn w-100">No thanks, I don’t want this.</Button>
                              </div>
                          </Col>
                          <Col className="my-3" md={12}>
                              <div className="d-flex gap-2 align-items-center">
                                  <img src="images/guarantee.png"/>
                                  <div className="fw-light">
                                      If you are not completely thrilled with your Clarifion - We have a 30 day satisfaction guarantee. Please refer to our return policy at the bottom of the page for more details. Happy Shopping!
                                  </div>
                              </div>

                          </Col>
                      </Row>
                  </Col>
              </Row>


          {/*    Footer*/}

          </Container>
              <footer className=" e-navbar-bg py-4">
                  <Container className="d-flex flex-wrap justify-content-between mx-auto">
                      <div className="">
                          <span className="mb-3 mb-md-0 text-white">Copyright (c) 2023 | Clarifionsupport@clarifion.com</span>
                      </div>
                      <div className="">
                          <span className="mb-3 mb-md-0 text-white"><i className="bi bi-lock"></i>Secure 256-bit SSL encryption.</span>
                      </div>
                  </Container>

              </footer>
      </Fragment>
      )

}

export default App;
