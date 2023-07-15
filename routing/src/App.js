import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Contact from './pages/contact/Contact'
import About from './pages/about/About'
import Home from './pages/home/Home'
import "./App.css"

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/about' element = {<About />}/>
        <Route path='/contact' element = {<Contact />}/>
      </Routes>
    </div>
  )
}

export default App