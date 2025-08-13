import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CardProducto from '../components/CardProducto'

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch featured products (first 6 products)
        const productsResponse = await fetch('https://fakestoreapi.com/products?limit=6')
        const productsData = await productsResponse.json()
        setFeaturedProducts(productsData)

        // Fetch categories
        const categoriesResponse = await fetch('https://fakestoreapi.com/products/categories')
        const categoriesData = await categoriesResponse.json()
        setCategories(categoriesData.slice(0, 4)) // Show only first 4 categories
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const categoryIcons = {
    "men's clothing": "👔",
    "women's clothing": "👗",
    "jewelery": "💍",
    "electronics": "📱"
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section text-white py-24">
        <div className="container-responsive">
          <div className="hero-content text-center">
            <h1 className="hero-title mb-6">
              Bienvenido a PinchiShop
            </h1>
            <p className="hero-subtitle text-xl md:text-2xl mb-10 text-blue-100">
              Descubre la mejor tecnología al mejor precio
            </p>
            <Link
              to="/productos"
              className="btn-primary-modern btn-modern text-lg px-10 py-4"
            >
              Ver Productos
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-responsive">
          <h2 className="text-heading text-center mb-16 text-gray-900">
            Explora por Categorías
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {categories.map((category) => (
              <Link
                key={category}
                to={`/productos/categoria/${category}`}
                className="card-hover p-8 text-center group"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {categoryIcons[category] || "📦"}
                </div>
                <h3 className="text-subheading text-gray-900 capitalize">
                  {category}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-heading text-gray-900">
              Productos Destacados
            </h2>
            <Link
              to="/productos"
              className="text-blue-600 hover:text-blue-700 font-semibold text-lg flex items-center group"
            >
              Ver todos 
              <svg className="icon-md ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="card p-6 animate-pulse-slow">
                  <div className="loading-skeleton h-64 rounded-xl mb-6"></div>
                  <div className="loading-skeleton h-6 rounded mb-3"></div>
                  <div className="loading-skeleton h-4 rounded w-3/4 mb-4"></div>
                  <div className="loading-skeleton h-8 rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <CardProducto key={product.id} producto={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-responsive">
          <h2 className="text-heading text-center mb-16 text-gray-900">
            ¿Por qué elegir TechStore?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
                             <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300">
                 <svg className="icon-2xl text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                 </svg>
               </div>
              <h3 className="text-subheading mb-4 text-gray-900">Garantía de Calidad</h3>
              <p className="text-body text-gray-600">
                Todos nuestros productos cuentan con garantía oficial y soporte técnico especializado.
              </p>
            </div>
            <div className="text-center group">
                             <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300">
                 <svg className="icon-2xl text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
               </div>
              <h3 className="text-subheading mb-4 text-gray-900">Envío Rápido</h3>
              <p className="text-body text-gray-600">
                Recibe tus productos en 24-48 horas con envío gratis en compras superiores a $50.000.
              </p>
            </div>
            <div className="text-center group">
                             <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300">
                 <svg className="icon-2xl text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                 </svg>
               </div>
              <h3 className="text-subheading mb-4 text-gray-900">Pago Seguro</h3>
              <p className="text-body text-gray-600">
                Múltiples opciones de pago con la máxima seguridad y protección al comprador.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
