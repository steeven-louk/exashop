
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer } from './components/footer/Footer'
import { Navbar } from './components/navbar/Navbar'
import { ContactUs } from './views/ContactUs'
import { Faqs } from './views/Faqs'
import { ProductDetail } from './views/ProductDetail'
import { Home } from './views/home/Home'
import { Kids } from './views/kids/Kids'
import { Men } from './views/mens/Men'
import { Women } from './views/womens/Women'

function App() {

  return (
    <>
      <Navbar/>

      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/women' element={<Women/>}/>
        <Route path='/kids' element={<Kids/>}/>
        <Route path='/contactUs' element={<ContactUs/>}/>
        <Route path='/product/:id' element={<ProductDetail/>}/>
        <Route path='/faqs' element={<Faqs/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
