
import './App.css'
import { Footer } from './components/footer/Footer'
import { Navbar } from './components/navbar/Navbar'
import { Home } from './views/home/Home'
import { Men } from './views/mens/Men'

function App() {

  return (
    <>
      <Navbar/>
      {/* <Home/> */}
      <Men/>
      <Footer/>
    </>
  )
}

export default App
