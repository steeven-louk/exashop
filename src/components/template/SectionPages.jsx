/* eslint-disable react/prop-types */
import { Card } from "./Card"

export const SectionPages = (props) => {
  return (
    <section>
        <h3 className="fw-bold text-capitalize">{props?.sectionTitle}</h3>
        <div className="row gap-3 justify-content-center">
           
      {props?.items?.map((item, index)=>(<Card classCard={"col-md-3"}  key={index} item={item}/>))} 
           
        </div>
    </section>
  )
}
