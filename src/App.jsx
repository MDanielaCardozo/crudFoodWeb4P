import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Menu from './components/shared/Menu'
import Footer from './components/shared/Footer'
import Home from './components/pages/Home'

function App() {


  return (
    <>
    <BrowserRouter>
    <Menu></Menu>
    <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </main>
    <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App
