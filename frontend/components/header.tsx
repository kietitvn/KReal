import React from "react";

const Header = (props: any) => {
  return (
    <div>
      <header className="header-nav menu_style_home_one navbar-scrolltofixed stricky main-menu">
        <div className="container-fluid p0">
          {/* <!-- Ace Responsive Menu --> */}
          <nav>
            {/* <!-- Menu Toggle btn--> */}
            <div className="menu-toggle">
              <img
                className="nav_logo_img img-fluid"
                src="images/header-logo.png"
                alt="header-logo.png"
              />
              <button type="button" id="menu-btn">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <a href="#" className="navbar_brand float-left dn-smd">
              <img
                className="logo1 img-fluid"
                src="images/header-logo.png"
                alt="header-logo.png"
              />
              <img
                className="logo2 img-fluid"
                src="images/header-logo2.png"
                alt="header-logo2.png"
              />
              <span>FindHouse</span>
            </a>
            {/* <!-- Responsive Menu Structure--> */}
            {/* <!--Note: declare the Menu style in the data-menu-style="horizontal" (options: horizontal, vertical, accordion) --> */}
            <ul
              id="respMenu"
              className="ace-responsive-menu text-right"
              data-menu-style="horizontal"
            >
              <li>
                <a href="#">
                  <span className="title">Home</span>
                </a>
                {/* <!-- Level Two--> */}
                <ul>
                  <li>
                    <a href="index-2.html">Home 1</a>
                  </li>
                  <li>
                    <a href="index2.html">Home 2</a>
                  </li>
                  <li>
                    <a href="index3.html">Home 3</a>
                  </li>
                  <li>
                    <a href="index4.html">Home 4</a>
                  </li>
                  <li>
                    <a href="index5.html">Home 5</a>
                  </li>
                  <li>
                    <a href="index6.html">Home 6</a>
                  </li>
                  <li>
                    <a href="index7.html">Home 7</a>
                  </li>
                  <li>
                    <a href="index8.html">Home 8</a>
                  </li>
                  <li>
                    <a href="index9.html">Home 9</a>
                  </li>
                  <li>
                    <a href="index10.html">Home 10</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <span className="title">Listing</span>
                </a>
                {/* <!-- Level Two--> */}
                <ul>
                  <li>
                    <a href="#">Listing Grid</a>
                    {/* <!-- Level Three--> */}
                    <ul>
                      <li>
                        <a href="page-listing-grid-v1.html">Grid v1</a>
                      </li>
                      <li>
                        <a href="page-listing-grid-v2.html">Grid v2</a>
                      </li>
                      <li>
                        <a href="page-listing-grid-v3.html">Grid v3</a>
                      </li>
                      <li>
                        <a href="page-listing-grid-v4.html">Grid v4</a>
                      </li>
                      <li>
                        <a href="page-listing-grid-v5.html">Grid v5</a>
                      </li>
                      <li>
                        <a href="page-listing-full-width-grid.html">
                          Grid Fullwidth
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Listing List</a>
                    {/* <!-- Level Three--> */}
                    <ul>
                      <li>
                        <a href="page-listing-list.html">List V1</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Listing Style</a>
                    {/* <!-- Level Three--> */}
                    <ul>
                      <li>
                        <a href="page-listing-parallax.html">Parallax Style</a>
                      </li>
                      <li>
                        <a href="page-listing-slider.html">Slider Style</a>
                      </li>
                      <li>
                        <a href="page-listing-map.html">Map Header</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Listing Half</a>
                    {/* <!-- Level Three--> */}
                    <ul>
                      <li>
                        <a href="page-listing-half-map-v1.html">Map V1</a>
                      </li>
                      <li>
                        <a href="page-listing-half-map-v2.html">Map V2</a>
                      </li>
                      <li>
                        <a href="page-listing-half-map-v3.html">Map V3</a>
                      </li>
                      <li>
                        <a href="page-listing-half-map-v4.html">Map V4</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Agent View</a>
                    {/* <!-- Level Three--> */}
                    <ul>
                      <li>
                        <a href="page-listing-agent-v1.html">Agent V1</a>
                      </li>
                      <li>
                        <a href="page-listing-agent-v2.html">Agent V2</a>
                      </li>
                      <li>
                        <a href="page-listing-agent-v3.html">Agent Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Agencies View</a>
                    {/* <!-- Level Three--> */}
                    <ul>
                      <li>
                        <a href="page-listing-agencies-v1.html">Agencies V1</a>
                      </li>
                      <li>
                        <a href="page-listing-agencies-v2.html">Agencies V2</a>
                      </li>
                      <li>
                        <a href="page-listing-agencies-v3.html">
                          Agencies Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="page-add-new-property.html">Create Listing</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <span className="title">Property</span>
                </a>
                <ul>
                  <li>
                    <a href="#">User Admin</a>
                    <ul>
                      <li>
                        <a href="page-dashboard.html">Dashboard</a>
                      </li>
                      <li>
                        <a href="page-my-properties.html">My Properties</a>
                      </li>
                      <li>
                        <a href="page-message.html">My Message</a>
                      </li>
                      <li>
                        <a href="page-my-review.html">My Review</a>
                      </li>
                      <li>
                        <a href="page-my-favorites.html">My Favorites</a>
                      </li>
                      <li>
                        <a href="page-add-new-property.html">Add Property</a>
                      </li>
                      <li>
                        <a href="page-my-profile.html">My Profile</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Listing Single</a>
                    {/* <!-- Level Three--> */}
                    <ul>
                      <li>
                        <a href="page-listing-single-v1.html">Single V1</a>
                      </li>
                      <li>
                        <a href="page-listing-single-v2.html">Single V2</a>
                      </li>
                      <li>
                        <a href="page-listing-single-v3.html">Single V3</a>
                      </li>
                      <li>
                        <a href="page-listing-single-v4.html">Single V4</a>
                      </li>
                      <li>
                        <a href="page-listing-single-v5.html">Single V5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="page-add-new-property.html">Create Listing</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <span className="title">Pages</span>
                </a>
                <ul>
                  <li>
                    <a href="#">
                      <span className="title">Pages</span>
                    </a>
                    <ul>
                      <li>
                        <a href="page-shop.html">Shop</a>
                      </li>
                      <li>
                        <a href="page-shop-single.html">Shop Single</a>
                      </li>
                      <li>
                        <a href="page-shop-cart.html">Cart</a>
                      </li>
                      <li>
                        <a href="page-shop-checkout.html">Checkout</a>
                      </li>
                      <li>
                        <a href="page-shop-order.html">Order</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="page-about.html">About Us</a>
                  </li>
                  <li>
                    <a href="page-gallery.html">Gallery</a>
                  </li>
                  <li>
                    <a href="page-faq.html">Faq</a>
                  </li>
                  <li>
                    <a href="page-login.html">LogIn</a>
                  </li>
                  <li>
                    <a href="page-compare.html">Membership</a>
                  </li>
                  <li>
                    <a href="page-compare2.html">Membership 2</a>
                  </li>
                  <li>
                    <a href="page-register.html">Register</a>
                  </li>
                  <li>
                    <a href="page-service.html">Service</a>
                  </li>
                  <li>
                    <a href="page-error.html">404 Page</a>
                  </li>
                  <li>
                    <a href="page-terms.html">Terms and Conditions</a>
                  </li>
                  <li>
                    <a href="page-ui-element.html">UI Elements</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <span className="title">Blog</span>
                </a>
                <ul>
                  <li>
                    <a href="page-blog-v1.html">Blog List 1</a>
                  </li>
                  <li>
                    <a href="page-blog-grid.html">Blog List 2</a>
                  </li>
                  <li>
                    <a href="page-blog-single.html">Single Post</a>
                  </li>
                </ul>
              </li>
              <li className="last">
                <a href="page-contact.html">
                  <span className="title">Contact</span>
                </a>
              </li>
              <li className="list-inline-item list_s">
                <a
                  href="#"
                  className="btn flaticon-user"
                  data-toggle="modal"
                  data-target=".bd-example-modal-lg"
                >
                  <span className="dn-lg">Login/Register</span>
                </a>
              </li>
              <li className="list-inline-item add_listing">
                <a href="page-add-new-property.html">
                  <span className="flaticon-plus"></span>
                  <span className="dn-lg"> Create Listing</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {props.children}
    </div>
  );
};
export default Header;
