/* eslint-disable react/prop-types */

import "./style.css";
export const Collection = (props) => {
  return (
    <div className="collection">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex">
            <img
              src={props.img2}
              style={{ width: "230px", height: "330px" }}
              alt=""
            />
            <img
              src={props.img1}
              alt=""
              style={{ width: "230px", height: "330px" }}
            />
          </div>
          <div className="col-md-6 text-white">
            <h3>{props.title}</h3>

            <p style={{ "fontSize":"14px" }} className="text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <p  style={{ "fontSize":"14px" }} className="text-white">
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem IpsuLorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
