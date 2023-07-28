
export const Card = (item) => {

    return (
    <div className="card col-md-8">
        <img src={item.item.image} alt={item.item.name} className="card-img-top w-100 img-fluid object-fit-cover" />
        <div className="card-body d-flex justify-content-between">
            <span className="fw-semibold">{item.item.name}</span>
            <span>stars</span>
        </div>
        <div className="card-footer d-flex justify-content-between">
            <span>${item.item.price}</span>
            <div className="action d-inline-flex gap-1">
                <span>c</span>
                <span>h</span>
            </div>
        </div>
    </div>
  )
}
