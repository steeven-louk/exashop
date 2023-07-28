/* eslint-disable react/prop-types */
import { Card } from "./Card"

export const SectionPages = (props) => {
  return (
    <section>
        <h3 className="fw-bold text-capitalize">{props?.sectionTitle}</h3>
        <div className="row gap-3 justify-content-center">
           
      {props?.items?.map((item, index)=>(<Card  key={index} item={item}/>))} 
           
        </div>
    </section>
  )
}
