import { Outlet } from 'react-router-dom'
import { CartProvider } from '../context/CartContext'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}

export default MainLayout
