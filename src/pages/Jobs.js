import NavbarComponent from "../components/front/NavbarComponent";
import FooterComponent from "../components/front/FooterComponent";
import "../assets/front/css/index.css";
import contact_header from "../assets/front/img/contact_header.PNG";
import { Link } from "react-router-dom";
const Jobs = () => {
  return (
    <div className="index-wrapper">
      <NavbarComponent />

      <div
        classNameName="contact"
        style={{
          backgroundImage: `url(${contact_header})`,
          marginTop: "-30px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div classNameName="container">
          <div classNameName="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>MY JOBS</h2>
                <div className="breadcrumb__links">
                  <Link to="/">Home</Link>
                  <span style={{ color: "white" }}>|</span>
                  <Link to="Contact">CONTACT</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* my jobs */}
      <div className="container">
        <div className="row">
          <div className=" profession-wrapper">
              {/* one job */}
            <div className="services__item ">
                <div className="col-xs-12 col-lg-10" style={{margin:"auto"}}>
              <div className="row">
                  <div className="col-3">
                <div className="services__item__icon  ">
                  <i className="fas fa-bolt"></i>
                </div>
                </div>
                <div className="col-9">
                <div className="services__item__text">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.Labore dicta nihil illo porro voluptates. Nobis fug mollitia atque culpa cumque eveniet itaque labore, aliqui dolorum eaque dolores reiciendis accusamus amet.
                  </p>
                </div>
                <div className="dates">
                    <div className="row">
                    <div className="col-6">
                        <h4>from : </h4>
                    </div>
                    <div className="col-6">
                        <h4>To : </h4>
                    </div>

                    </div>
                   
                </div>
                </div>
              </div>
              </div>
            </div>
                {/* one job */}
                <div className="services__item ">
                <div className="col-xs-12 col-lg-10" style={{margin:"auto"}}>
              <div className="row">
                  <div className="col-3">
                <div className="services__item__icon  ">
                  <i className="fas fa-bolt"></i>
                </div>
                </div>
                <div className="col-9">
                <div className="services__item__text">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore dicta nihil illo porro voluptates. Nobis fuga
                    mollitia atque culpa cumque eveniet itaque labore, aliquid
                    dolorum eaque dolores reiciendis accusamus amet.
                  </p>
                </div>
                <div className="dates">
                    <div className="row">
                    <div className="col-6">
                        <h4>from : </h4>
                    </div>
                    <div className="col-6">
                        <h4>To : </h4>
                    </div>

                    </div>
                   
                </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default Jobs;
