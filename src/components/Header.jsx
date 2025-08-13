import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <div className="container-responsive">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover-lift">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-glow">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="header-logo text-2xl">PinchiShop</span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Buscar productos..."
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
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-6">
            <button className="p-3 text-gray-600 hover:text-blue-600 transition-all duration-200 hover:bg-blue-50 rounded-xl">
              <svg className="user-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            <button className="p-3 text-gray-600 hover:text-blue-600 transition-all duration-200 hover:bg-blue-50 rounded-xl relative">
              <svg className="cart-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-semibold shadow-lg">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
