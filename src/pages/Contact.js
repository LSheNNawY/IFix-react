import NavbarComponent from "../components/front/NavbarComponent";
import "../assets/front/css/index.css";
import FooterComponent from "../components/front/FooterComponent";
import contact_header from "../assets/front/img/contact_header.PNG";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div className="index-wrapper">
      <NavbarComponent />
      {/*  contact   */}
      <div
        className="contact"
        style={{
          backgroundImage: `url(${contact_header})`,
          marginTop: "-30px",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>CONTACT US</h2>
                <div className="breadcrumb__links">
                  <Link to="/">Home</Link>
                  <span style={{ color: "white" }}>|</span>
                  <Link to="aboutUs">ABOUT</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  location  */}
      <div className="container-fluid">
        <div className="row-">
          <div className="col-lg-12">
            <div className=" contact__map mt-5 ">
              <iframe
                width="600"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=mansoura&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                style={{ marginLeft: "5%", border: "0", width: "90%" }}
              ></iframe>

              <br />
              {/* <style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style>
                                <a href="https://www.embedgooglemap.net">google map embed responsive</a>
                                <style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style> */}
            </div>
          </div>
        </div>
      </div>
      {/*  contact form  */}
      <div className="container-fluid">
        <div
          className="row"
          style={{
            width: "90%",
            marginLeft: "5%",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          <div className="col-lg-6 col-md-6">
            <div className="contact__widget">
              <div className="contact__widget__item">
                <div className="contact__widget__item__icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact__widget__item__text">
                  <h4>Address</h4>
                  <p>
                    160 Pennsylvania Ave NW, Washington, Castle, PA 16101-5161
                  </p>
                </div>
              </div>
              <div className="contact__widget__item">
                <div className="contact__widget__item__icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact__widget__item__text">
                  <h4>Phone</h4>
                  <p>01028765490 | 01028765498</p>
                </div>
              </div>
              <div className="contact__widget__item">
                <div className="contact__widget__item__icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact__widget__item__text">
                  <h4>Support</h4>
                  <p>fix.support@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="contact__form">
              <form action="#">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <textarea placeholder="Comment"></textarea>
                <button type="submit" className="site-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* footer section  */}
      <FooterComponent />
    </div>
  );
};

export default Contact;
