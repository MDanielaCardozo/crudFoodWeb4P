import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Menu from './components/shared/Menu'
import Footer from './components/shared/Footer'
import Home from './components/views/Home/Home'
import DetalleDeProducto from './components/views/DetalleDeProducto'
import Login from './components/views/Login'
import Administrador from './components/views/Administrador'
import FormularioProducto from './components/views/Producto/FormularioProducto'

function App() {

  return (
    <>
    <BrowserRouter>
    <Menu></Menu>
    <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detalle' element={<DetalleDeProducto/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/administrador' element={<Administrador/>}/>
        <Route path='/administrador/crear' element={<FormularioProducto></FormularioProducto>}/>
        <Route path='administrador/editar/:id' element={<FormularioProducto></FormularioProducto>}/>
        <Route path='*' element={<Error></Error>}/>
      </Routes>
    </main>
    <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App
