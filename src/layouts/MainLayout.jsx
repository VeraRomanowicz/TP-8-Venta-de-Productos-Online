import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
