import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import men1 from "../assets/men/men1.png";


export const CartDetail = () => {
  return (
    <div className="cart p-5">
      <h3>Shopping Cart</h3>

      <div className="row">
        <div className="col-md-7">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th scope="col">Name</th>
                <th scope="col">Amount</th>
                <th scope="col">Quantity</th>
                <th scope="col">Color</th>
              </tr>
            </thead>
            <tbody>
              <tr className="my-auto align-baseline">
                <td>
                  <img
                    src={men1}
                    alt=""
                    width={65}
                    className="rounded object-fit-cover"
                  />
                </td>
                <td>Classic Spring</td>
                <td>$120.00</td>
                <td className="d-flex gap-2">
                  <span className="px-2 fw-bold bg-danger rounded-pill">-</span>{" "}
                  <div className="bg-white px-3">5</div>{" "}
                  <span className="px-2 fw-bold bg-danger rounded-pill">+</span>
                </td>
                <td>white</td>
              </tr>
              <tr className="my-auto align-baseline">
                <td>
                  <img
                    src={men1}
                    alt=""
                    width={65}
                    className="rounded object-fit-cover"
                  />
                </td>
                <td>Classic Spring</td>
                <td>$120.00</td>
                <td className="d-flex gap-2">
                  <span className="px-2 fw-bold bg-danger rounded-pill"><FontAwesomeIcon icon="fa-solid fa-minus" /></span>{" "}
                  <div className="bg-white px-3">5</div>{" "}
                  <span className="px-2 fw-bold bg-danger rounded-pill"><FontAwesomeIcon icon="fa-solid fa-plus" /></span>
                </td>
                <td>white</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="col-md-5 bg-white rounded p-2 shadow">
          <h5 className="text-center text-capitalize">order summary</h5>
          <hr />
          <div className="border text-center p-1">
            <span>Have a promo code</span>
          </div>

          <div className="d-flex justify-content-between">
            <div className="left d-flex gap-2 flex-column">
              <span>payable amount</span>
              <span>Shipping</span>
            </div>
            <div className="right gap-2 d-flex flex-column pe-5">
              <span>$120.00</span>
              <span>$10.00</span>
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <span>order total</span>
            <span className="pe-5">$130.00</span>
          </div>

          <button className="btn-success btn d-block mx-auto text-capitalize">
            proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};
