/* eslint-disable react/no-unescaped-entities */
import { Header } from "../../components/header/Header";
import { Section } from "../../components/template/Section";
import { kidLatest, menLatest, womenLatest } from "../../services/data";

import explore1 from "../../assets/explore1.png"
import explore2 from "../../assets/explore2.png"
import explore3 from "../../assets/explore3.png"
import explore4 from "../../assets/explore4.png"

import social1 from "../../assets/social1.png"
import social2 from "../../assets/social2.png"
import social3 from "../../assets/social3.png"
import social4 from "../../assets/social4.png"
import social5 from "../../assets/social5.png"
import social6 from "../../assets/social6.png"

export const Home = () => {
  return (
    <div>
      <Header />

      <Section
        items={menLatest}
        sectionTitle="men's latest"
        sectionText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni corporis odit odio cupiditate beatae illo."
      />
      <Section
        items={womenLatest}
        sectionTitle="women's latest"
        sectionText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni corporis odit odio cupiditate beatae illo."
      />
      <Section
        items={kidLatest}
        sectionTitle="kid's latest"
        sectionText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni corporis odit odio cupiditate beatae illo."
      />

      <section className="ourProduct py-4 shadow bg-white">

        <div className="container">
        <h3>Explore Our Products</h3>
        <div className="row justify-content-between ">
          <div className="col-md-6">
            <p style={{ "fontSize":"14px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <p style={{ "fontSize":"14px" }}>
              {" "}
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
            <p style={{ "fontSize":"14px" }}>
              {" "}
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
          <div className="col-md-6">
            <div className="d-flex flex-wrap gap-3 justify-content-end">
              <div className="">
                <img src={explore1} alt="" style={{ "width":"11em" , objectFit: "cover"}}/>
              </div>
              <div className="">
              <img src={explore2} alt="" style={{ "width":"11em" , objectFit: "cover"}}/>
              </div>
              <div className="">
              <img src={explore3} alt="" style={{ "width":"11em" , objectFit: "cover"}}/>
              </div>
              <div className="">
              <img src={explore4} alt="" style={{ "width":"11em" , objectFit: "cover"}}/>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section className="social container my-5">
        <div className="title">
          <h3>social media</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
        </div>

        <div className="img-social d-flex gap-2">
          <img src={social1} alt="" style={{ "width":"150px", "height":"250px", "objectFit":"cover" }} />
          <img src={social2} alt=""  style={{ "width":"150px", "height":"250px", "objectFit":"cover" }} />
          <img src={social3} alt=""  style={{ "width":"150px", "height":"250px", "objectFit":"cover" }} />
          <img src={social4} alt=""  style={{ "width":"150px", "height":"250px", "objectFit":"cover" }} />
          <img src={social5} alt=""  style={{ "width":"150px", "height":"250px", "objectFit":"cover" }} />
          <img src={social6} alt=""  style={{ "width":"150px", "height":"250px", "objectFit":"cover" }} />
        </div>
      </section>
    </div>
  );
};
