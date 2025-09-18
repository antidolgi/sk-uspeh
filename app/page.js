export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-900 to-indigo-900 flex flex-col items-center justify-center text-white p-4">
      {/* Hero секция */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Электробезопасность будущего
        </h1>
        <p className="text-xl max-w-2xl mb-8">
          ООО &quot;СК Успех&quot; — надежный партнер для Россети и Мособлэнерго
        </p>
        <button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
          Заказать консультацию
        </button>
      </section>

      {/* Раздел "Наши клиенты" */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Нам доверяют лидеры отрасли</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
            {/* Россети */}
            <div className="bg-white p-4 shadow-md rounded-lg flex items-center justify-center max-w-32">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Rosseti_logo.svg/1200px-Rosseti_logo.svg.png" 
                alt="Россети" 
                className="max-h-16 object-contain" 
              />
            </div>
            
            {/* Мособлэнерго */}
            <div className="bg-white p-4 shadow-md rounded-lg flex items-center justify-center max-w-32">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Mosoblenego_logo.svg/1200px-Mosoblenego_logo.svg.png" 
                alt="Мособлэнерго" 
                className="max-h-16 object-contain" 
              />
            </div>
            
            {/* Временные логотипы */}
            <div className="bg-white p-4 shadow-md rounded-lg flex items-center justify-center max-w-32">
              <img 
                src="https://via.placeholder.com/150/92c952" 
                alt="Клиент 3" 
                className="max-h-16 object-contain" 
              />
            </div>
            
            <div className="bg-white p-4 shadow-md rounded-lg flex items-center justify-center max-w-32">
              <img 
                src="https://via.placeholder.com/150/92c952" 
                alt="Клиент 4" 
                className="max-h-16 object-contain" 
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
