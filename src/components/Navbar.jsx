import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories')
        const data = await response.json()
        setCategories(data)
      } catch (error) {
        console.error('Error fetching categories:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCategories()
  }, [])

  const isActive = (path) => {
    return location.pathname === path
  }

  const isProductPage = () => {
    return location.pathname.startsWith('/productos') || location.pathname.startsWith('/producto')
  }

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center space-x-8">
            {/* Home */}
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              Home
            </Link>

            {/* Quienes Somos */}
            <Link
              to="/quienes-somos"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/quienes-somos') 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              Quienes Somos
            </Link>

            {/* Productos Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1 ${
                  isProductPage() 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <span>Productos</span>
                <svg
                  className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute z-50 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-200">
                  <div className="py-1">
                    <Link
                      to="/productos"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Ver todos
                    </Link>
                    {isLoading ? (
                      <div className="px-4 py-2 text-sm text-gray-500">Cargando categorías...</div>
                    ) : (
                      categories.map((category) => (
                        <Link
                          key={category}
                          to={`/productos/categoria/${category}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 capitalize"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          {category}
                        </Link>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Contacto */}
            <Link
              to="/contacto"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/contacto') 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button className="px-3 py-2 text-gray-300 hover:text-white">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
