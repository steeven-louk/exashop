/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Card } from "./Card"


export const Section = (props) => {


  return (
    <section className=" container mb-5">
        <h2 className="fw-bold text-capitalize">{props?.sectionTitle}</h2>
        <p>{props?.sectionText}</p>
       
        <Swiper
      spaceBetween={-90}
      slidesPerView={4}
    //   onSlideChange={() => console.log('slide change')}
    //   onSwiper={(swiper) => console.log(swiper)}
    >


      {props?.items?.map((item, index)=>(<SwiperSlide key={index}><Card classCard={"col-md-8"}  item={item}/></SwiperSlide>))} 

    </Swiper>
        

    </section>
  )
}
