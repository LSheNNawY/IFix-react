import NavbarComponent from "../components/front/NavbarComponent"
import "../assets/front/css/index.css";
import FooterComponent from "../components/front/FooterComponent";
import contact_header from "../assets/front/img/contact_header.PNG"
import { Link } from "react-router-dom";
const Contact = () => {
    
    return (
        <div className="index-wrapper">
            <NavbarComponent/>
            {/*  contact   */}
            <div classNameName="contact" style= {{backgroundImage: `url(${contact_header})`, marginTop: "-30px"}}>
                <div classNameName="container">
                    <div classNameName="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2>CONTACT US</h2>
                                <div className="breadcrumb__links">
                                    <Link to="/">Home</Link>
                                    <span style={{color: "white"}}>|</span>
                                    <a href="aboutUs.html">ABOUT</a>
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
                        <div className="contact__map mt-5 ">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49116.39176087041!2d-86.41867791216099!3d39.69977417971648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886ca48c841038a1%3A0x70cfba96bf847f0!2sPlainfield%2C%20IN%2C%20USA!5e0!3m2!1sen!2sbd!4v1586106673811!5m2!1sen!2sbd"
                                height="500" width="90%" aria-hidden="false" tabindex="0"
                                style={{marginLeft: "5%", border: "0"}}></iframe>
                        </div>
                    </div>
                </div>

            </div>
            {/*  contact form  */}
            <div className="container-fluid" >
                <div className="row" style={{
                            width: "90%",
                            marginLeft: "5%",
                            marginTop: "50px",
                            marginBottom: "50px",
                        }}>
                    <div className="col-lg-6 col-md-6">
                        <div className="contact__widget">
                            <div className="contact__widget__item">
                                <div className="contact__widget__item__icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="contact__widget__item__text">
                                    <h4>Address</h4>
                                    <p>160 Pennsylvania Ave NW, Washington, Castle, PA 16101-5161</p>
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
                                <button type="submit" className="site-btn">Send Message</button> 
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* footer section  */}
            <FooterComponent/>
        </div>
        
  );
  };

  export default Contact;
