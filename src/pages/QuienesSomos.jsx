const QuienesSomos = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Quienes Somos
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Tu tienda de confianza para productos tecnológicos de alta calidad
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nuestra Historia
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                TechStore nació en 2020 con la misión de democratizar el acceso a la tecnología de calidad. 
                Comenzamos como una pequeña tienda local y hoy somos una de las principales referencias 
                en venta de productos tecnológicos en Argentina.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Nuestro compromiso es ofrecer productos auténticos, con garantía oficial y el mejor 
                soporte técnico del mercado. Trabajamos directamente con los fabricantes más reconocidos 
                para asegurar la calidad y autenticidad de cada producto.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Creemos que la tecnología debe ser accesible para todos, por eso ofrecemos múltiples 
                opciones de pago, envío rápido y un servicio al cliente excepcional.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
                  <div className="text-gray-600">Clientes Satisfechos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                  <div className="text-gray-600">Productos Disponibles</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-600">Soporte Técnico</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">4.9★</div>
                  <div className="text-gray-600">Calificación Promedio</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Calidad Garantizada</h3>
              <p className="text-gray-600">
                Todos nuestros productos son originales y cuentan con garantía oficial del fabricante.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Servicio al Cliente</h3>
              <p className="text-gray-600">
                Nuestro equipo está disponible 24/7 para resolver cualquier consulta o problema.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovación Constante</h3>
              <p className="text-gray-600">
                Siempre estamos actualizados con las últimas tendencias y tecnologías del mercado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nuestro Equipo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gray-300 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="h-16 w-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1">María González</h3>
              <p className="text-gray-600">CEO & Fundadora</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-300 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="h-16 w-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1">Carlos Rodríguez</h3>
              <p className="text-gray-600">Director Técnico</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-300 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="h-16 w-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1">Ana Martínez</h3>
              <p className="text-gray-600">Gerente de Ventas</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-300 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="h-16 w-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1">Luis Fernández</h3>
              <p className="text-gray-600">Soporte Técnico</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Listo para descubrir la mejor tecnología?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Explora nuestro catálogo y encuentra el producto perfecto para ti
          </p>
          <a
            href="/productos"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Ver Productos
          </a>
        </div>
      </section>
    </div>
  )
}

export default QuienesSomos
