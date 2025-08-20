import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product, quantity = 1) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.id === product.id)
      if (existingIndex !== -1) {
        const updated = [...prev]
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        }
        return updated
      }
      return [...prev, { ...product, quantity }]
    })
  }

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId))
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return
    setCartItems((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity } : item))
    )
  }

  const clearCart = () => setCartItems([])

  const cartCount = useMemo(() => cartItems.reduce((sum, item) => sum + item.quantity, 0), [cartItems])
  const cartTotal = useMemo(() => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0), [cartItems])

  const value = useMemo(
    () => ({ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, cartCount, cartTotal }),
    [cartItems, cartCount, cartTotal]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const ctx = useContext(CartContext)
  if (!ctx) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return ctx
}


