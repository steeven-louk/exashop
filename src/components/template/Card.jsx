/* eslint-disable react/prop-types */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Card = ({item, classCard}) => {
console.log('rffff',item)
    return (
    <div className={`card ${classCard}`} >
        <img src={item?.image} alt={item?.name} className="card-img-top w-100 img-fluid object-fit-cover" />
        <div className="card-body d-flex justify-content-between">
            <span className="fw-semibold">{item?.name}</span>
            <span>stars</span>
        </div>
        <div className="card-footer d-flex justify-content-between">
            <span>${item?.price}</span>
            <div className="action d-inline-flex gap-1">
                <span><FontAwesomeIcon className="text-danger" icon="fa-regular fa-heart" /></span>
                <span><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /></span>
            </div>
        </div>
    </div>
  )
}
