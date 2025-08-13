import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Productos from './pages/Productos'
import ProductoDetalle from './pages/ProductoDetalle'
import QuienesSomos from './pages/QuienesSomos'
import Contacto from './pages/Contacto'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="productos" element={<Productos />} />
        <Route path="productos/categoria/:idCategoria" element={<Productos />} />
        <Route path="producto/:idProducto" element={<ProductoDetalle />} />
        <Route path="quienes-somos" element={<QuienesSomos />} />
        <Route path="contacto" element={<Contacto />} />
      </Route>
    </Routes>
  )
}

export default App
