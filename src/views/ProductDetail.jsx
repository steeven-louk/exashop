import productImg from "../assets/men/men1.png"
import { Section } from "../components/template/Section"
import { menLatest } from "../services/data"
export const ProductDetail = () => {
  return (
    <div className="ProductDetail my-5">
        <div className="product mx-auto mb-5" style={{ width:"400px" }}>
            <h4 className="title text-center my-3 fw-bold">Classic Spring</h4>
            <img src={productImg} alt="" className=" object-fit-cover" width="100%" />

            <div className="bottom shadow mt-4 rounded p-4 bg-tertiary d-flex align-items-center justify-content-between">
                <div className="d-flex flex-column">
                    <span>Classic Spring</span>
                    <span>$125</span>
                </div>
                <div className="icons">h c</div>
            </div>

            <button className="d-block mx-auto mt-4">process with payment</button>
        </div>

        <Section
        items={menLatest}
       
      />
    </div>
  )
}
