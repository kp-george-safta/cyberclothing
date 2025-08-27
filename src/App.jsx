import reactLogo from './assets/react.svg'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import './styles/index.scss'

function App() {
  return (
    <>
      <Header/>
      <img src={reactLogo} />
      <Footer/>
    </>
  )
}

export default App
