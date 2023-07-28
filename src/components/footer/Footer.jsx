
export const Footer = () => {
  return (
    <footer className="text-white bg-dark pt-3">
      <div className="container mb-4">
      <div className="row">
          <div className="col-md-3" >
            <h5 className="mb-3">hexashop</h5>
            <ul className="nav">
              <li><b>Address :</b> Paris Road</li>
              <li><b>E-mail :</b> Exemple@gmail.com</li>
              <li><b>Phone :</b> 012 678 985</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="fw-bold fs-6 text mb-3">Shopping and Categories</h5>
            <ul className="nav">
              <li>Men's Shopping</li>
              <li>Women's Shopping</li>
              <li>Kid's Shopping</li>
            </ul>
          </div>
          <div className="col-md-3">
          <h5 className="fw-bold fs-6 mb-3">Useful Links</h5>
            <ul className="nav">
              <li>Homepage</li>
              <li>About Us</li>
              <li>Help</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col-md-3">
          <h5 className="fw-bold fs-6 mb-3">Help & Information</h5>
            <ul className="nav">
              <li>FAQS</li>
              <li>Shopping Us</li>
              <li>Tracking Id</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="copy bg-black p-2 text-center">
        <span>&copy;Copyright @ 2023</span>
      </div>
    </footer>
  )
}
