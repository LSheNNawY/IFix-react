import NavbarComponent from "../components/front/NavbarComponent";
import FooterComponent from "../components/front/FooterComponent";
import "../assets/front/css/login.css";

const Order = () => {
  return (
    <div className="login-wrapper">
      <NavbarComponent />
      <div
        style={{
          backgroundColor: "#ebeeef",
          paddingTop: "120px",
          paddingBottom: "120px",
          marginTop: "-80px",
        }}
      >
        <div className="container ">
          <div className="row">
            <div className=" login-form col-lg-6 col-md-8">
              <div className="login-form-title">
                <span className="login-form-title-1">Order</span>
              </div>

              <form>
                <div class="form-group ">
                  <label for="inputService">Service</label>
                  <select id="inputService" class="form-control">
                    <option selected>service name</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="inputAddress">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="Enter your Address
                    "
                  />
                </div>
                <div class="form-group">
                  <label for="inputAddress">Start Date</label>
                  <input
                    type="date"
                    className="form-control"
                   
                    
                  />
                </div>


                <button type="submit" class="btn btn-primary site-btn">
                  Order
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
};

export default Order;
