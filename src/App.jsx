import { Routes, Route, Link } from 'react-router-dom'
import './styles/index.scss'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import Home from './pages/home';
import Login from './pages/login';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </>
  )
}


export default App
