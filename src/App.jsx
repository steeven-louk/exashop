
import './App.css'
import { Footer } from './components/footer/Footer'
import { Navbar } from './components/navbar/Navbar'
import { ContactUs } from './views/ContactUs'
import { ProductDetail } from './views/ProductDetail'
import { Home } from './views/home/Home'
import { Kids } from './views/kids/Kids'
import { Men } from './views/mens/Men'
import { Women } from './views/womens/Women'

function App() {

  return (
    <>
      <Navbar/>
      {/* <Home/> */}
      {/* <Men/> */}
      {/* <Women/> */}
      {/* <Kids/> */}
      {/* <ContactUs/> */}
      <ProductDetail/>
      <Footer/>
    </>
  )
}

export default App
