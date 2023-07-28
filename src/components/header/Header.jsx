import weAre from "../../assets/header/weAre.png";
import women from "../../assets/header/women.png";
import men from "../../assets/header/men.png";
import kids from "../../assets/header/kids.png";
import accessories from "../../assets/header/accessories.png";
export const Header = () => {
  return (
    <header className="mt-5">
      <div className="col-md-12">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-3 ">
              <img src={weAre} alt="" height="100%" width="100%" className="img-fluid h-100 object-fit-cover" />
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6 col-6 ">
                  <img
                    src={women}
                    alt=""
                    className=" img-fluid mb-3 object-fit-cover"
                    style={{ width: "18.4em", height: "220px" }}
                  />
                </div>
                <div className="col-md-6 col-6">
                  <img
                    src={men}
                    alt=""
                    className=" img-fluid mb-3 object-fit-cover"
                    style={{ width: "18.4em", height: "220px" }}
                  />
                </div>
                <div className="col-md-6 col-6">
                  {" "}
                  <img
                    src={kids}
                    alt=""
                    className="img-fluid object-fit-cover"
                    style={{ width: "18.4em", height: "220px" }}
                  />
                </div>
                <div className="col-md-6 col-6">
                  {" "}
                  <img
                    src={accessories}
                    alt=""
                    className=" img-fluid object-fit-cover"
                    style={{ width: "18.4em", height: "220px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
