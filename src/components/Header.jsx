import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import { useCart } from '../context/CartContext'

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const searchParams = useMemo(() => new URLSearchParams(location.search), [location.search])
  const [query, setQuery] = useState(searchParams.get('q') || '')
  const { cartItems, cartCount, cartTotal, removeFromCart, updateQuantity, clearCart } = useCart()
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    setQuery(searchParams.get('q') || '')
  }, [searchParams])

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    navigate(`/productos?q=${encodeURIComponent(query.trim())}`)
  }

  return (
    <header className="header">
      <div className="container-responsive">
        <div className="flex items-center h-20 space-x-8">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover-lift">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-glow">
              <span className="text-white font-bold text-xl">⭐</span>
            </div>  
            <span className="header-logo text-2xl">PinchiShop</span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl">
            <form onSubmit={handleSearchSubmit} className="relative w-full">
              <input
                type="text"
                placeholder="Buscar productos..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="search-bar w-full pl-12 pr-4 py-3 rounded-xl text-gray-700 placeholder-gray-500"
              />
              <svg
                className="absolute left-4 top-3.5 search-icon text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </form>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-6">
            <button className="p-3 text-gray-600 hover:text-blue-600 transition-all duration-200 hover:bg-blue-50 rounded-xl">
              <svg className="user-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            <button onClick={() => setIsCartOpen((v) => !v)} className="p-3 text-gray-600 hover:text-blue-600 transition-all duration-200 hover:bg-blue-50 rounded-xl relative">
              <svg className="cart-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
              <span className="absolute top-0 right-0 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-semibold shadow-lg">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
        {isCartOpen && (
          <div className="absolute right-4 mt-2 w-96 bg-white rounded-xl shadow-xl border border-gray-200 p-4 z-50">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold">Carrito</h3>
              <button onClick={() => setIsCartOpen(false)} className="text-gray-500 hover:text-gray-700">✕</button>
            </div>
            {cartItems.length === 0 ? (
              <p className="text-gray-500">Tu carrito está vacío.</p>
            ) : (
              <div className="space-y-3 max-h-80 overflow-auto">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img src={item.image} alt={item.title} className="w-12 h-12 rounded object-contain bg-gray-50" />
                      <div className="max-w-[180px]">
                        <p className="text-sm font-medium line-clamp-1">{item.title}</p>
                        <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-6 h-6 border rounded">-</button>
                      <span className="w-6 text-center text-sm">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-6 h-6 border rounded">+</button>
                      <button onClick={() => removeFromCart(item.id)} className="text-red-500 ml-2">Eliminar</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="mt-4 border-t pt-3 flex items-center justify-between">
              <span className="font-semibold">Total:</span>
              <span className="font-bold text-blue-600">${cartTotal.toFixed(2)}</span>
            </div>
            <div className="mt-3 flex justify-between">
              <button onClick={clearCart} className="px-3 py-2 rounded-lg border">Vaciar</button>
              <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">Pagar</button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
