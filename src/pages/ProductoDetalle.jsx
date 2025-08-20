import { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext'
import { useParams, Link } from 'react-router-dom'

const ProductoDetalle = () => {
  const { idProducto } = useParams()
  const [producto, setProducto] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const { addToCart } = useCart()

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(`https://fakestoreapi.com/products/${idProducto}`)
        if (!response.ok) {
          throw new Error('Producto no encontrado')
        }
        const data = await response.json()
        setProducto(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducto()
  }, [idProducto])

  const handleAddToCart = () => {
    if (!producto) return
    addToCart(producto, quantity)
  }

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 animate-pulse">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-200 h-96 rounded"></div>
              <div>
                <div className="bg-gray-200 h-8 rounded mb-4"></div>
                <div className="bg-gray-200 h-4 rounded mb-2"></div>
                <div className="bg-gray-200 h-4 rounded w-3/4 mb-6"></div>
                <div className="bg-gray-200 h-12 rounded mb-4"></div>
                <div className="bg-gray-200 h-8 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
                         <svg
               className="mx-auto icon-3xl text-gray-400"
               fill="none"
               stroke="currentColor"
               viewBox="0 0 24 24"
             >
               <path
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 strokeWidth={2}
                 d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
               />
             </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">Error</h3>
            <p className="mt-1 text-sm text-gray-500">{error}</p>
            <div className="mt-6">
              <Link
                to="/productos"
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Volver a Productos
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!producto) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li>
              <Link to="/" className="hover:text-gray-700">
                Home
              </Link>
            </li>
            <li>
              <span>/</span>
            </li>
            <li>
              <Link to="/productos" className="hover:text-gray-700">
                Productos
              </Link>
            </li>
            <li>
              <span>/</span>
            </li>
            <li>
              <Link to={`/productos/categoria/${producto.category}`} className="hover:text-gray-700 capitalize">
                {producto.category}
              </Link>
            </li>
            <li>
              <span>/</span>
            </li>
            <li className="text-gray-900">{producto.title}</li>
          </ol>
        </nav>

        {/* Product Detail */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Images */}
            <div>
              <div className="product-detail-image-container mb-4">
                <img
                  src={producto.image}
                  alt={producto.title}
                  className="product-detail-image"
                />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full capitalize">
                  {producto.category}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {producto.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className={`h-5 w-5 ${
                        index < Math.floor(producto.rating?.rate || 0)
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-2">
                  {producto.rating?.rate} ({producto.rating?.count} reseñas)
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold text-blue-600">
                  ${producto.price}
                </span>
                <span className="text-sm text-gray-500 ml-2">
                  Envío gratis
                </span>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Descripción
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {producto.description}
                </p>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cantidad
                </label>
                <div className="flex items-center space-x-3">
                                     <button
                     onClick={() => handleQuantityChange(quantity - 1)}
                     className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                   >
                     <svg className="icon-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                     </svg>
                   </button>
                  <span className="w-16 text-center text-lg font-medium">
                    {quantity}
                  </span>
                                     <button
                     onClick={() => handleQuantityChange(quantity + 1)}
                     className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                   >
                     <svg className="icon-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                     </svg>
                   </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Agregar al Carrito
                </button>
                                 <button className="bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                   <svg className="icon-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                   </svg>
                 </button>
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">SKU:</span>
                    <span className="ml-2 text-gray-900">#{producto.id}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Categoría:</span>
                    <span className="ml-2 text-gray-900 capitalize">{producto.category}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Productos Relacionados
          </h2>
          <div className="text-center py-8 text-gray-500">
            <p>Funcionalidad de productos relacionados próximamente...</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductoDetalle
