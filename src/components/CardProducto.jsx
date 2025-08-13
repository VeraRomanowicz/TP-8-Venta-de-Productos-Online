import { Link } from 'react-router-dom'

const CardProducto = ({ producto }) => {
  const { id, title, price, image, category, rating } = producto

  return (
    <div className="product-card group">
      {/* Product Image */}
      <div className="product-image-container h-64">
        <img
          src={image}
          alt={title}
          className="product-image grid-image"
        />
                 <div className="product-overlay">
           <div className="text-white text-center">
             <svg className="icon-3xl mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
             </svg>
             <p className="font-semibold">Ver Detalles</p>
           </div>
         </div>
        <div className="absolute top-4 right-4">
          <span className="category-badge-modern">
            {category}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="product-content">
        <h3 className="product-title line-clamp-2">
          {title}
        </h3>
        
        {/* Rating */}
        <div className="product-rating">
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`star h-4 w-4 ${
                  index < Math.floor(rating?.rate || 0)
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
          <span className="text-sm text-gray-600">
            ({rating?.count || 0})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-6">
          <span className="product-price">
            ${price}
          </span>
                     <span className="text-sm text-green-600 font-medium flex items-center">
             <svg className="icon-sm mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
             </svg>
             Envío gratis
           </span>
        </div>

        {/* Actions */}
        <div className="flex space-x-3">
          <Link
            to={`/producto/${id}`}
            className="btn-primary-modern btn-modern flex-1"
          >
            Ver Detalles
          </Link>
                     <button className="btn-secondary-modern btn-modern p-3">
             <svg className="icon-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
             </svg>
           </button>
        </div>
      </div>
    </div>
  )
}

export default CardProducto
