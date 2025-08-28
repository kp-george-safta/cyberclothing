import { Routes, Route, Link } from 'react-router-dom'
import './styles/index.scss'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import Home from './pages/home';
import Login from './pages/login';
import About from './pages/about';
import Checkout from './pages/checkout';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Download from './pages/download';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/download" element={<Download/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
