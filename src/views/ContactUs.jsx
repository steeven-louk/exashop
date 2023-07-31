import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bgContactUs from "../assets/header/bgContactUs.png";

export const ContactUs = () => {
  return (
    <div className="contactUsContainer">
      <div>
        <img src={bgContactUs} alt="" width="100%" />
      </div>
      <div className="container position-relation" style={{ "top":"-10em","position":"relative" }}>
        <h2 className="text-capitalize text-center">get in touch</h2>
        <div className="row">
        <div className="col-md-6">
          <div className="card" style={{ "width":"510px" }} >
              <div className="card-header text-center text-capitalize">
              <FontAwesomeIcon style={{ fontSize:"5em" }} icon="fa-solid fa-phone-volume" />
                <h5>talk to save</h5>
              </div>
              <div className="card-body">
                <p>
                orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
Ipsum has been the industry's standard dummy text ever since the 1500s, whe
n an unknown printer took a galley of type and scrambled it to make a
 type specimen book.orem Ipsum is simply dummy text of the printing
 and typesetting industry. Lorem Ipsum has been the industry's st
andard dummy text ever since the 1500s..... 
                </p>
              </div>
              <span>view all global members</span>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card"  style={{ "width":"510px" }}>
              <div className="card-header text-capitalize text-center">
              <FontAwesomeIcon style={{ fontSize:"5em" }} icon="fa-solid fa-phone-volume" />

                <h5>Contact Customer support</h5>
              </div>
              <div className="card-body">
                <p>
                orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
Ipsum has been the industry's standard dummy text ever since the 1500s, whe
n an unknown printer took a galley of type and scrambled it to make a
 type specimen book.orem Ipsum is simply dummy text of the printing
 and typesetting industry. Lorem Ipsum has been the industry's st
andard dummy text ever since the 1500s..... 
                </p>
              </div>
              <button>customer support</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
